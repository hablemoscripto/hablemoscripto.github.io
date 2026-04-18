import { supabase } from '../lib/supabase';
import { reportError } from '../utils/errorReporting';

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

export type PlanTier = 'free' | 'premium' | 'vip';
export type BillingCycle = 'monthly' | 'yearly';

export interface PricingPlan {
  tier: PlanTier;
  name: string;
  description: string;
  priceUsdMonthly: number;
  priceUsdYearly: number;
  priceCopMonthly: number;
  priceCopYearly: number;
  priceUsdcMonthly: number;
  priceUsdcYearly: number;
  features: string[];
}

/** @deprecated Use PricingPlan / PRICING_PLANS instead */
export interface Product {
  id: string;
  name: string;
  description: string;
  priceInCents: number;
  type: 'premium_lifetime' | 'premium_yearly' | 'premium_monthly';
}

export interface PaymentData {
  reference: string;
  amountInCents: number;
  currency: string;
  signature: string;
}

// ---------------------------------------------------------------------------
// Pricing plans
// ---------------------------------------------------------------------------

export const PRICING_PLANS: Record<PlanTier, PricingPlan> = {
  free: {
    tier: 'free',
    name: 'Explorador',
    description: 'Comienza tu viaje en cripto',
    priceUsdMonthly: 0,
    priceUsdYearly: 0,
    priceCopMonthly: 0,
    priceCopYearly: 0,
    priceUsdcMonthly: 0,
    priceUsdcYearly: 0,
    features: [
      'Nivel Principiante completo (19 lecciones)',
      'Asistente IA CBas (5 preguntas/dia)',
      'Newsletter semanal gratuito',
      'Gamificacion basica (XP y rachas)',
    ],
  },
  premium: {
    tier: 'premium',
    name: 'Inversor',
    description: 'Acceso completo a toda la educación',
    priceUsdMonthly: 15,
    priceUsdYearly: 120,
    priceCopMonthly: 65000,
    priceCopYearly: 520000,
    priceUsdcMonthly: 15,
    priceUsdcYearly: 120,
    features: [
      'Las 44 lecciones (Principiante + Intermedio + Avanzado)',
      'Asistente IA CBas ilimitado',
      'Quizzes y certificados',
      'Gamificacion completa',
      'Acceso a contenido futuro',
    ],
  },
  vip: {
    tier: 'vip',
    name: 'Cripto Experto',
    description: 'Mentoria directa con CBas',
    priceUsdMonthly: 35,
    priceUsdYearly: 299,
    priceCopMonthly: 150000,
    priceCopYearly: 1290000,
    priceUsdcMonthly: 35,
    priceUsdcYearly: 299,
    features: [
      'Todo lo de Inversor',
      'Llamada grupal semanal en vivo con CBas',
      'Canal privado de Discord',
      'Analisis de mercado semanal detallado',
      'Q&A directo con prioridad',
      'Acceso anticipado a nuevo contenido',
    ],
  },
};

/**
 * @deprecated Kept for backward compatibility with PaymentButton.
 * Prefer PRICING_PLANS for new code.
 */
export const PRODUCTS: Record<string, Product> = {
  premium_lifetime: {
    id: 'premium_lifetime',
    name: 'Premium Lifetime',
    description: 'Acceso de por vida a todo el contenido premium',
    priceInCents: 9900000, // $99,000 COP
    type: 'premium_lifetime',
  },
};

// ---------------------------------------------------------------------------
// Wompi (COP) payments
// ---------------------------------------------------------------------------

export async function createPaymentWithSignature(
  product: Product,
  customerEmail: string,
  customerName?: string,
): Promise<PaymentData> {
  const {
    data: { session },
  } = await supabase.auth.getSession();

  if (!session?.access_token) {
    throw new Error('No authenticated session');
  }

  const accessToken = session.access_token;
  const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;

  const response = await fetch(`${supabaseUrl}/functions/v1/create-payment`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${accessToken}`,
    },
    body: JSON.stringify({
      productType: product.type,
      customerEmail,
      customerName,
    }),
  });

  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.error || 'Failed to create payment');
  }

  return response.json();
}

export async function getPaymentByReference(reference: string) {
  const { data, error } = await supabase
    .from('payments')
    .select('status, product_name, wompi_reference')
    .eq('wompi_reference', reference)
    .single();

  if (error) {
    reportError(error, {
      component: 'paymentService',
      action: 'getPaymentByReference',
    });
    throw error;
  }

  return data;
}

// ---------------------------------------------------------------------------
// Subscription status
// ---------------------------------------------------------------------------

/**
 * @deprecated Use getUserSubscriptionStatus for tier-aware status.
 */
export async function getUserPremiumStatus(userId: string) {
  const { data, error } = await supabase
    .from('user_profiles')
    .select('is_premium, premium_since, premium_expires_at')
    .eq('id', userId)
    .single();

  if (error) {
    if (error.code === 'PGRST116') {
      return { isPremium: false };
    }
    reportError(error, {
      component: 'paymentService',
      action: 'getUserPremiumStatus',
    });
    throw error;
  }

  if (data.is_premium && data.premium_expires_at) {
    const expiresAt = new Date(data.premium_expires_at);
    if (expiresAt < new Date()) {
      return { isPremium: false, expired: true };
    }
  }

  return {
    isPremium: data.is_premium,
    premiumSince: data.premium_since,
    premiumExpiresAt: data.premium_expires_at,
  };
}

/**
 * Returns the user's current subscription tier, expiration date, and billing
 * cycle. Falls back to 'free' when no active subscription is found or the
 * subscription has expired.
 */
export async function getUserSubscriptionStatus(
  userId: string,
): Promise<{
  tier: PlanTier;
  expiresAt?: string;
  billingCycle?: BillingCycle;
}> {
  const { data, error } = await supabase
    .from('user_profiles')
    .select(
      'is_premium, premium_tier, premium_expires_at, billing_cycle',
    )
    .eq('id', userId)
    .single();

  if (error) {
    // Profile might not exist yet — treat as free
    if (error.code === 'PGRST116') {
      return { tier: 'free' };
    }
    reportError(error, {
      component: 'paymentService',
      action: 'getUserSubscriptionStatus',
    });
    throw error;
  }

  // No active subscription
  if (!data.is_premium) {
    return { tier: 'free' };
  }

  // Check expiration
  if (data.premium_expires_at) {
    const expiresAt = new Date(data.premium_expires_at);
    if (expiresAt < new Date()) {
      return { tier: 'free' };
    }
  }

  const tier: PlanTier =
    data.premium_tier === 'vip'
      ? 'vip'
      : data.premium_tier === 'premium'
        ? 'premium'
        : 'free';

  return {
    tier,
    expiresAt: data.premium_expires_at ?? undefined,
    billingCycle: (data.billing_cycle as BillingCycle) ?? undefined,
  };
}

// ---------------------------------------------------------------------------
// USDC (crypto) payments
// ---------------------------------------------------------------------------

/**
 * Submits a Solana USDC transaction signature to the backend for
 * verification. On success the Edge Function upgrades the user's tier
 * and creates a payment record.
 */
export async function submitCryptoPayment(
  tier: PlanTier,
  billingCycle: BillingCycle,
  transactionSignature: string,
): Promise<{ success: boolean; error?: string }> {
  const {
    data: { session },
  } = await supabase.auth.getSession();

  if (!session?.access_token) {
    return { success: false, error: 'No authenticated session' };
  }

  const plan = PRICING_PLANS[tier];
  const expectedAmount =
    billingCycle === 'yearly' ? plan.priceUsdcYearly : plan.priceUsdcMonthly;

  const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;

  try {
    const response = await fetch(
      `${supabaseUrl}/functions/v1/verify-crypto-payment`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${session.access_token}`,
        },
        body: JSON.stringify({
          transactionSignature,
          expectedAmount,
          tier,
          billingCycle,
        }),
      },
    );

    const result = await response.json();

    if (!response.ok) {
      return {
        success: false,
        error: result.error || 'Error al verificar el pago',
      };
    }

    return { success: true };
  } catch (err) {
    reportError(err, {
      component: 'paymentService',
      action: 'submitCryptoPayment',
    });
    return {
      success: false,
      error: 'Error de conexion al verificar el pago',
    };
  }
}
