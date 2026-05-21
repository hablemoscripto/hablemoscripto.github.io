import { supabase } from '../lib/supabase';
import { reportError } from '../utils/errorReporting';

// ---------------------------------------------------------------------------
// Pricing model
//
// Lifetime tiers only at launch — see PRODUCTION-CHECKLIST.md and the
// founder-context memory for why. Monthly/yearly subscription SKUs will be
// added later on top of Wompi tokenization (Payment Sources). Until then,
// `productType` strings live in this file and the create-payment Edge
// Function's PRODUCT_CATALOG. The two MUST stay in sync.
// ---------------------------------------------------------------------------

export type PlanTier = 'free' | 'premium' | 'vip';

export interface PricingPlan {
  tier: PlanTier;
  name: string;
  description: string;
  priceUsd: number;
  priceCopCents: number; // centavos — what Wompi expects on amountInCents
  priceUsdc: number;
  productType?: string; // SKU sent to create-payment / verify-crypto-payment
  features: string[];
  highlighted?: boolean;
  gradient?: boolean;
}

export const PRICING_PLANS: Record<PlanTier, PricingPlan> = {
  free: {
    tier: 'free',
    name: 'Explorador',
    description: 'Empieza tu camino en el mundo cripto',
    priceUsd: 0,
    priceCopCents: 0,
    priceUsdc: 0,
    features: [
      'Nivel Principiante completo (19 lecciones)',
      'Quizzes interactivos',
      'Certificado de nivel',
      'Sistema de logros',
      'Asistente IA (límite diario)',
    ],
  },
  premium: {
    tier: 'premium',
    name: 'Inversor',
    description: 'Para quienes quieren dominar DeFi',
    priceUsd: 99,
    priceCopCents: 35000000, // 350,000 COP
    priceUsdc: 99,
    productType: 'inversor_lifetime',
    features: [
      'Todo lo del plan Explorador',
      'Nivel Intermedio completo (12 lecciones)',
      'Análisis de mercado semanal',
      'Asistente IA ilimitado',
      'Comunidad privada',
      'Sesiones en vivo mensuales',
    ],
    highlighted: true,
  },
  vip: {
    tier: 'vip',
    name: 'Cripto Experto',
    description: 'Acceso total + mentoría personalizada',
    priceUsd: 249,
    priceCopCents: 90000000, // 900,000 COP
    priceUsdc: 249,
    productType: 'vip_lifetime',
    features: [
      'Todo lo del plan Inversor',
      'Nivel Avanzado completo (11 lecciones)',
      'Mentoría 1 a 1 mensual',
      'Estrategias avanzadas de trading',
      'Alertas de mercado en tiempo real',
      'Acceso anticipado a nuevo contenido',
      'Grupo exclusivo de networking',
    ],
    gradient: true,
  },
};

export interface PaymentData {
  reference: string;
  amountInCents: number;
  currency: string;
  signature: string;
}

// ---------------------------------------------------------------------------
// Wompi (COP) payments
// ---------------------------------------------------------------------------

export async function createPaymentWithSignature(
  productType: string,
  customerEmail: string,
  customerName?: string,
): Promise<PaymentData> {
  const {
    data: { session },
  } = await supabase.auth.getSession();

  if (!session?.access_token) {
    throw new Error('No authenticated session');
  }

  const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;

  const response = await fetch(`${supabaseUrl}/functions/v1/create-payment`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${session.access_token}`,
    },
    body: JSON.stringify({
      productType,
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
// Subscription / tier status
// ---------------------------------------------------------------------------

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

  // Lifetime tiers leave premium_expires_at NULL. Only enforce expiration
  // when it's set — that's the future subscription path.
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

export async function getUserSubscriptionStatus(
  userId: string,
): Promise<{
  tier: PlanTier;
  expiresAt?: string;
}> {
  const { data, error } = await supabase
    .from('user_profiles')
    .select('is_premium, premium_tier, premium_expires_at')
    .eq('id', userId)
    .single();

  if (error) {
    if (error.code === 'PGRST116') {
      return { tier: 'free' };
    }
    reportError(error, {
      component: 'paymentService',
      action: 'getUserSubscriptionStatus',
    });
    throw error;
  }

  if (!data.is_premium) {
    return { tier: 'free' };
  }

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
  };
}

// ---------------------------------------------------------------------------
// USDC (crypto) payments
// ---------------------------------------------------------------------------

export async function submitCryptoPayment(
  tier: 'premium' | 'vip',
  transactionSignature: string,
): Promise<{ success: boolean; error?: string }> {
  const {
    data: { session },
  } = await supabase.auth.getSession();

  if (!session?.access_token) {
    return { success: false, error: 'No authenticated session' };
  }

  const expectedAmount = PRICING_PLANS[tier].priceUsdc;
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
