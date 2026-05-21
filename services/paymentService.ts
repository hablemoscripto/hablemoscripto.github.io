import { supabase } from '../lib/supabase';
import { reportError } from '../utils/errorReporting';

// ---------------------------------------------------------------------------
// Pricing model — v2 (May 2026)
//
// Replaces the legacy binary free/premium/vip set with a multi-product
// structure for LatAm: two lifetime course tiers (Básico / Completo), a
// 12-month Comunidad pass, and an Acceso Total bundle. All v1 products are
// one-time purchases — Wompi does not natively support recurring billing,
// so Comunidad renews via re-purchase + email reminder, not a subscription.
//
// `wompiSku` is the SKU sent to create-payment / wompi-webhook. The server
// catalog (supabase/functions/create-payment/index.ts → PRODUCT_CATALOG)
// MUST stay in sync with `wompiSku` values here.
// ---------------------------------------------------------------------------

export type PlanId =
  | 'free'
  | 'basico'
  | 'completo'
  | 'comunidad_anual'
  | 'acceso_total';

export type ProductType = 'course' | 'community' | 'bundle';

export type CourseTier = 'free' | 'basico' | 'completo';
export type CommunityStatus = 'none' | 'active' | 'expired';

export interface PricingPlan {
  id: PlanId;
  productType: ProductType;
  name: string;
  description: string;
  priceUsd: number;
  // TODO(launch-blocker, priceCopCents): the COP figures below are arithmetic
  // conversions of priceUsd at a placeholder FX rate (~4,000 COP/USD). Before
  // any real launch, replace with EITHER (a) a daily-updated FX rate computed
  // at checkout time, OR (b) deliberately re-priced COP-native round numbers
  // (e.g., 299,000 COP instead of 316,000 — rounder and more familiar for
  // Colombian buyers anyway). Do NOT ship with these placeholder values.
  priceCopCents: number; // centavos — Wompi widget expects amountInCents in COP

  wompiSku?: string; // SKU sent to create-payment Edge Function

  // Entitlement grants applied on successful purchase.
  grantsCourseTier?: CourseTier;    // omitted for community-only plans
  grantsCommunityMonths?: number;   // sets communityStatus='active' for N months

  // UI metadata
  features: string[];
  highlighted?: boolean;
  gradient?: boolean;
}

export const PRICING_PLANS: Record<PlanId, PricingPlan> = {
  free: {
    id: 'free',
    productType: 'course',
    name: 'Principiante',
    description: 'Empieza tu camino en el mundo cripto',
    priceUsd: 0,
    priceCopCents: 0,
    features: [
      'Nivel Principiante completo (19 lecciones)',
      'Quizzes interactivos',
      'Certificado de nivel',
      'Sistema de logros',
      'Asistente IA (límite diario)',
    ],
  },
  basico: {
    id: 'basico',
    productType: 'course',
    name: 'Cripto Básico',
    description: 'Desbloquea el Nivel Intermedio',
    priceUsd: 79,
    priceCopCents: 31600000,
    wompiSku: 'basico_lifetime',
    grantsCourseTier: 'basico',
    features: [
      'Todo lo del plan Principiante',
      'Nivel Intermedio completo (12 lecciones)',
      'Acceso de por vida',
    ],
    highlighted: true,
  },
  completo: {
    id: 'completo',
    productType: 'course',
    name: 'Cripto Completo',
    description: 'Acceso de por vida a todo el contenido',
    priceUsd: 179,
    priceCopCents: 71600000,
    wompiSku: 'completo_lifetime',
    grantsCourseTier: 'completo',
    features: [
      'Todo lo del plan Cripto Básico',
      'Nivel Avanzado completo (11 lecciones)',
      'Acceso de por vida',
    ],
    gradient: true,
  },
  comunidad_anual: {
    id: 'comunidad_anual',
    productType: 'community',
    name: 'Comunidad anual',
    description: '12 meses de acceso a la Comunidad',
    priceUsd: 190,
    priceCopCents: 76000000,
    wompiSku: 'comunidad_annual',
    grantsCommunityMonths: 12,
    features: [
      '12 meses de acceso a la Comunidad (Discord)',
      'Sesiones en vivo mensuales',
      'Análisis de mercado y oportunidades',
      'Renovación manual al vencer',
    ],
  },
  acceso_total: {
    id: 'acceso_total',
    productType: 'bundle',
    name: 'Acceso Total',
    description: 'Cripto Completo + 12 meses de Comunidad',
    priceUsd: 329,
    priceCopCents: 131600000,
    wompiSku: 'acceso_total_bundle',
    grantsCourseTier: 'completo',
    grantsCommunityMonths: 12,
    features: [
      'Cripto Completo (de por vida)',
      '12 meses de Comunidad',
      'Mejor relación precio/valor',
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
