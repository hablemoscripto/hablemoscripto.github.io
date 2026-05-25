import { supabase } from '../lib/supabase';
import { reportError } from '../utils/errorReporting';

// ---------------------------------------------------------------------------
// Pricing model — Launch 2026
//
// Clean structure aligned with product vision:
// - Principiante (free)
// - Intermedio (full platform access)
// - Fundador (full platform + Comunidad, limited to first 100 buyers)
// - Experto (same benefits as Fundador, after Fundador spots are exhausted)
//
// All plans are one-time lifetime purchases.
// Recurring revenue (annual renewals or packaged mentorship) is planned
// for a later phase once payment infrastructure supports it cleanly.
// ---------------------------------------------------------------------------

export type PlanId =
  | 'free'
  | 'intermedio'
  | 'fundador'
  | 'experto';

export type ProductType = 'course' | 'community' | 'bundle';

export type CourseTier = 'free' | 'intermedio' | 'fundador' | 'experto';
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
    description: 'Newsletter semanal + Nivel Principiante',
    priceUsd: 0,
    priceCopCents: 0,
    features: [
      'Nivel Principiante completo (19 lecciones)',
      'Newsletter semanal con análisis de mercado',
      'Acceso a recursos gratuitos',
    ],
  },
  intermedio: {
    id: 'intermedio',
    productType: 'course',
    name: 'Intermedio',
    description: 'Acceso completo a toda la plataforma educativa',
    priceUsd: 99,
    priceCopCents: 34900000, // ~349,000 COP
    wompiSku: 'intermedio_lifetime',
    grantsCourseTier: 'intermedio',
    features: [
      'Acceso completo a las 42 lecciones',
      'Videos dedicados en cada lección',
      'Todas las actualizaciones futuras',
      'Certificados de nivel',
      'Sistema de logros y repaso espaciado',
    ],
  },
  fundador: {
    id: 'fundador',
    productType: 'bundle',
    name: 'Fundador',
    description: 'Plataforma completa + Comunidad activa (solo primeras 100 personas)',
    priceUsd: 249,
    priceCopCents: 89900000, // ~899,000 COP
    wompiSku: 'fundador_lifetime',
    grantsCourseTier: 'fundador',
    grantsCommunityMonths: 120, // effectively lifetime for community access in this model
    features: [
      'Todo lo del plan Intermedio',
      'Acceso completo a la Comunidad en Discord',
      'Charlas semanales en vivo con análisis y Q&A',
      'Newsletter premium con perspectivas profundas',
      'Prioridad al solicitar Mentoría Personalizada',
    ],
    highlighted: true,
    gradient: true,
  },
  experto: {
    id: 'experto',
    productType: 'bundle',
    name: 'Experto',
    description: 'Plataforma completa + Comunidad activa',
    priceUsd: 249,
    priceCopCents: 89900000,
    wompiSku: 'experto_lifetime',
    grantsCourseTier: 'experto',
    grantsCommunityMonths: 120,
    features: [
      'Todo lo del plan Intermedio',
      'Acceso completo a la Comunidad en Discord',
      'Charlas semanales en vivo con análisis y Q&A',
      'Newsletter premium con perspectivas profundas',
      'Prioridad al solicitar Mentoría Personalizada',
    ],
  },
};

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
// hasCommunityAccess — true iff communityStatus is 'active' AND the
// expiry date is still in the future. Lazy-derived; the DB row may say
// 'active' but be effectively expired until a maintenance job runs.
// ---------------------------------------------------------------------------

const COURSE_TIER_RANK: Record<CourseTier, number> = {
  free: 0,
  basico: 1,
  completo: 2,
};

const LEVEL_REQUIREMENTS: Record<string, CourseTier> = {
  beginner: 'free',
  intermediate: 'intermedio',
  advanced: 'fundador', // or 'experto' — both grant full access
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
  if (!user.communityExpiresAt) return false;
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
// Derive UserEntitlements from the legacy user_profiles row.
//
// The DB schema still uses `is_premium` + `premium_tier` ('premium' | 'vip').
// Legacy mapping kept for users who purchased before the 2026 relaunch.
// Old `premium` → intermedio equivalent
// Old `vip`     → fundador/experto equivalent
// This logic can be removed after a full migration of historical users.
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

  const courseTier: CourseTier =
    data.premium_tier === 'vip'
      ? 'fundador'
      : data.premium_tier === 'premium'
        ? 'intermedio'
        : 'free';

  return {
    courseTier,
    communityStatus: 'none',
    communityExpiresAt: null,
  };
}

// ---------------------------------------------------------------------------
// TODO(wompi-integration, Phase B):
//
// Wompi is the v1 processor. ALL plans above are one-time purchases — Wompi
// does not natively support recurring billing. Community access is a one-time
// 12-month pass that requires manual renewal (re-purchase + email reminder).
//
// Webhook events to handle in supabase/functions/wompi-webhook:
//   - APPROVED   → apply plan.grantsCourseTier (if any). For
//                  plan.grantsCommunityMonths (if any), set
//                  communityStatus='active' and bump communityExpiresAt
//                  forward by N months from MAX(now, current expiry) so
//                  renewals stack rather than reset on still-active passes.
//                  For 'acceso_total', BOTH grants apply in a single tx.
//   - DECLINED   → no entitlement change; log for support.
//   - VOIDED     → no entitlement change; reconcile if a previous APPROVED
//                  for the same reference was already applied (refund path).
//   - PENDING    → no entitlement change; await terminal event.
//
// All event payloads MUST pass HMAC-SHA256 verification using the
// WOMPI_EVENTS_SECRET against the canonical signature.properties string per
// Wompi's docs. Reject and log on signature mismatch — do not retry.
//
// Transaction `reference` field MUST be set to `${userId}:${planId}` (e.g.
// `7c9a...:basico`) when create-payment generates the reference, so the
// webhook attributes the entitlement back to the purchasing user even when
// customer_email diverges from auth.email. Parse defensively — the
// reference is the only trustworthy link between Wompi's record and ours.
// ---------------------------------------------------------------------------

// ---------------------------------------------------------------------------
// TODO(bridges, Phase B+):
//
// Cross-product entitlement bridges, spec only — none of these are implemented
// in v1. They live here so the gating helpers and webhook code know where
// they'll plug in.
//
//   1. Course → Comunidad grant: on course-tier APPROVED, also grant 3 months
//      of Comunidad (set communityStatus='active', communityExpiresAt =
//      MAX(now + 3 months, current expiry) — never shorten an existing pass).
//      Applies to 'basico' and 'completo' purchases, NOT 'acceso_total'
//      (acceso_total already grants 12 months explicitly).
//
//   2. Comunidad → course discount: any user with hasCommunityAccess() === true
//      at checkout time gets 25% off course-tier plans. Discount math runs
//      server-side in create-payment; never trust a client-supplied flag.
//
//   3. Newsletter → course coupon: newsletter signup issues a one-time 20%-off
//      course coupon, 14-day expiry from issuance. Requires a coupons table
//      (one row per issuance, redeemed-at timestamp). Out of scope for the
//      multi-product refactor; spec lives here.
// ---------------------------------------------------------------------------

// ---------------------------------------------------------------------------
// TODO(crypto, Phase C+): USDC payments are out of v1 (USD-only, Wompi-
// only). When reviving, restore the submitCryptoPayment client + the
// verify-crypto-payment Edge Function to speak the new PlanId vocab
// (Comunidad / Acceso Total may want crypto pricing too, not just course
// tiers). See git history before this commit for the previous shape.
// ---------------------------------------------------------------------------
