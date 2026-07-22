import { supabase } from '../lib/supabase';
import { reportError } from '../utils/errorReporting';

// ---------------------------------------------------------------------------
// Pricing model — Launch 2026 (two paid lifetime tiers + free)
//
// - Principiante (free): Nivel Principiante only.
// - Inversor ($99): full platform — all 44 lessons.
// - Cripto Experto ($249): full platform + Comunidad (Discord + charlas en vivo).
//
// All plans are one-time lifetime purchases (no subscriptions at launch).
// "Precio Fundador": launch pricing rises later with 30-day notice — no fake
// scarcity. The server (PRODUCT_CATALOG) is authoritative for charged amounts.
// ---------------------------------------------------------------------------

export type PlanId = 'free' | 'inversor' | 'experto';

export type ProductType = 'course' | 'community' | 'bundle';

export type CourseTier = 'free' | 'inversor' | 'experto';
export type CommunityStatus = 'none' | 'active' | 'expired';

export interface PricingPlan {
  id: PlanId;
  productType: ProductType;
  name: string;
  description: string;
  priceUsd: number;
  // COP-native launch prices (centavos). Wompi charges amountInCents in COP.
  // MUST match PRODUCT_CATALOG in supabase/functions/create-payment — the
  // server is authoritative for the charged amount and ignores client values.
  priceCopCents: number;

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
    description: 'Newsletter semanal + Nivel Principiante',
    priceUsd: 0,
    priceCopCents: 0,
    features: [
      'Nivel Principiante completo (19 lecciones)',
      'Newsletter semanal con análisis de mercado',
      'Acceso a recursos gratuitos',
    ],
  },
  inversor: {
    id: 'inversor',
    productType: 'course',
    name: 'Inversor',
    description: 'Las 44 lecciones completas de por vida. El plan principal.',
    priceUsd: 99,
    priceCopCents: 35000000, // 350,000 COP
    wompiSku: 'inversor_lifetime',
    grantsCourseTier: 'inversor',
    features: [
      'Acceso completo a las 44 lecciones',
      'Videos dedicados en cada lección',
      'Todas las actualizaciones futuras del currículum',
      'Certificado al completar cada nivel',
      'Sistema de logros y repaso espaciado',
    ],
    highlighted: true,
  },
  experto: {
    id: 'experto',
    productType: 'bundle',
    name: 'Cripto Experto',
    description:
      'Todo Inversor, más acceso de fundador a comunidad y mentoría cuando abramos ese canal',
    priceUsd: 249,
    priceCopCents: 90000000, // 900,000 COP
    wompiSku: 'vip_lifetime',
    grantsCourseTier: 'experto',
    grantsCommunityMonths: 120, // lifetime community access in this model
    features: [
      'Todo lo del plan Inversor',
      'Acceso de fundador a la comunidad privada cuando abra (Discord)',
      'Charlas en vivo y Q&A cuando se activen con la comunidad',
      'Prioridad al solicitar mentoría 1 a 1',
    ],
    gradient: true,
  },
};

// Shared COP display formatting so every surface renders prices identically.
export function formatCop(cents: number): string {
  return new Intl.NumberFormat('es-CO', {
    style: 'currency',
    currency: 'COP',
    minimumFractionDigits: 0,
  }).format(cents / 100);
}

export interface PaymentData {
  reference: string;
  amountInCents: number;
  currency: string;
  signature: string;
}

// ---------------------------------------------------------------------------
// User entitlements — v2
//
// Two independent entitlements replace the old single `tier`:
//   - courseTier: lifetime, set on course purchase, never expires.
//   - communityStatus: 12-month entitlement tied to communityExpiresAt.
//     Renewal is manual (re-purchase of Comunidad anual); no recurring
//     billing in v1 — Wompi doesn't support it natively.
// ---------------------------------------------------------------------------

export interface UserEntitlements {
  courseTier: CourseTier;
  communityStatus: CommunityStatus;
  communityExpiresAt: Date | null;
}

export const ANONYMOUS_ENTITLEMENTS: UserEntitlements = {
  courseTier: 'free',
  communityStatus: 'none',
  communityExpiresAt: null,
};

// ---------------------------------------------------------------------------
// Access helpers
//
// canAccessLevel — gates lesson levels by courseTier. Note this is the
// entitlement gate (do they own the level?), not the progress gate (have
// they finished the prerequisite level?). Both gates are independent;
// progress-based locking lives in EducationPage.isLevelLocked.
//
// hasCommunityAccess — true iff communityStatus is 'active' and either it has
// no expiry (null = lifetime, e.g. Cripto Experto) or the expiry is still in
// the future. Lazy-derived; a dated row may be effectively expired.
// ---------------------------------------------------------------------------

const COURSE_TIER_RANK: Record<CourseTier, number> = {
  free: 0,
  inversor: 1,
  experto: 2,
};

// Both paid tiers grant the full course (all 44 lessons); they differ only in
// community access. So every paid level requires just the entry paid tier.
const LEVEL_REQUIREMENTS: Record<string, CourseTier> = {
  beginner: 'free',
  intermediate: 'inversor',
  advanced: 'inversor',
};

export function canAccessLevel(
  user: UserEntitlements,
  levelId: string,
): boolean {
  const required = LEVEL_REQUIREMENTS[levelId];
  if (required === undefined) return false;
  return COURSE_TIER_RANK[user.courseTier] >= COURSE_TIER_RANK[required];
}

export function hasCommunityAccess(user: UserEntitlements): boolean {
  if (user.communityStatus !== 'active') return false;
  // null expiry = lifetime access (Cripto Experto); a date = expires then.
  if (!user.communityExpiresAt) return true;
  return user.communityExpiresAt.getTime() > Date.now();
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
    .select('status, product_name, wompi_reference, amount_in_cents, currency')
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
// Derive UserEntitlements from the user_profiles row.
//
// DB stores is_premium + premium_tier ('premium' | 'vip'). UI tiers:
//   premium → 'inversor'  (full course)
//   vip     → 'experto'   (full course + lifetime community)
// ---------------------------------------------------------------------------

export async function getUserEntitlements(
  userId: string,
): Promise<UserEntitlements> {
  const { data, error } = await supabase
    .from('user_profiles')
    .select('is_premium, premium_tier, premium_expires_at')
    .eq('id', userId)
    .single();

  if (error) {
    if (error.code === 'PGRST116') {
      return ANONYMOUS_ENTITLEMENTS;
    }
    reportError(error, {
      component: 'paymentService',
      action: 'getUserEntitlements',
    });
    throw error;
  }

  if (!data.is_premium) {
    return ANONYMOUS_ENTITLEMENTS;
  }

  if (data.premium_expires_at) {
    const expiresAt = new Date(data.premium_expires_at);
    if (expiresAt < new Date()) {
      return ANONYMOUS_ENTITLEMENTS;
    }
  }

  // is_premium is already confirmed true above. Mirror the server gate
  // (get-lesson-content checks is_premium only): any premium user gets at least
  // full course access (inversor); vip adds the experto/community tier. This
  // avoids locking out a premium row whose tier is null/unrecognized.
  const courseTier: CourseTier =
    data.premium_tier === 'vip' ? 'experto' : 'inversor';

  // Cripto Experto (vip) includes lifetime community access; Inversor doesn't.
  const communityStatus: CommunityStatus =
    data.premium_tier === 'vip' ? 'active' : 'none';

  return {
    courseTier,
    communityStatus,
    communityExpiresAt: null, // lifetime when active
  };
}

// ---------------------------------------------------------------------------
// Deferred (post-launch): Wompi has no native recurring billing, so any future
// renewal/subscription model needs a tokenization-based cron. Possible later
// work: stacking community renewals (bump communityExpiresAt from MAX(now,
// current expiry)) and cross-product bridges (course→community grants,
// community→course discounts, newsletter coupons). None implemented at launch.
// All amounts and grants are derived server-side, never from client values.
// ---------------------------------------------------------------------------

// ---------------------------------------------------------------------------
// Deferred (crypto, post-launch): USDC-on-Solana is disabled in the UI at
// launch (card-only). verify-crypto-payment exists but is dormant; revive it
// to speak the inversor/experto vocab with a server-side USDC price table.
// ---------------------------------------------------------------------------
