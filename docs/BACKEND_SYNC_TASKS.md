# Backend Sync Tasks — New Pricing Model (2026 Launch)

This document lists the exact changes required in the Supabase Edge Functions and database logic to support the new frontend pricing model.

## 1. Update PRODUCT_CATALOG (create-payment/index.ts)

**File:** `supabase/functions/create-payment/index.ts`

Replace the current catalog with:

```ts
const PRODUCT_CATALOG: Record<string, { name: string; amountInCents: number }> = {
  intermedio_lifetime: { name: 'Intermedio — Acceso de por vida', amountInCents: 34900000 },
  fundador_lifetime:   { name: 'Fundador — Plataforma + Comunidad (limitado)', amountInCents: 89900000 },
  experto_lifetime:    { name: 'Experto — Plataforma + Comunidad', amountInCents: 89900000 },
};
```

## 2. Update wompi-webhook logic

**File:** `supabase/functions/wompi-webhook/index.ts`

- Update the handler to recognize the new SKUs (`intermedio_lifetime`, `fundador_lifetime`, `experto_lifetime`).
- Map them to the correct entitlements:
  - `intermedio_lifetime` → `courseTier: 'intermedio'`
  - `fundador_lifetime` / `experto_lifetime` → `courseTier: 'fundador'` or `'experto'` + community access

- Consider adding a `fundador_early` flag or special role for the first 100 (can be handled via a separate counter or manual promotion initially).

## 3. Update Entitlements Mapping (paymentService.ts + webhook)

The frontend now uses:
- `intermedio`
- `fundador`
- `experto`

The legacy mapping in `getUserEntitlements` still references old `premium` / `vip`. This needs to be updated once the database starts receiving the new SKUs.

## 4. Database Considerations

- No immediate schema change required for basic functionality.
- If we want to track "Fundador status" separately (for permanent badge), we may later add a boolean or specific tier value.

## 5. Deployment Order

1. Update and deploy `create-payment`
2. Update and deploy `wompi-webhook`
3. (Optional) Update `verify-crypto-payment` if crypto is enabled at launch
4. Test end-to-end with sandbox Wompi cards using the new SKUs

## 6. Important Notes

- The frontend can ship with the new plan names before the backend is fully updated (payments will fail until backend is synced).
- Coordinate the backend deploy with the frontend deploy that exposes the new pricing.
- Update the server-side `PRODUCT_CATALOG` and the frontend `PRICING_PLANS.wompiSku` in the same release window.

**Owner:** Sebastián (or whoever handles Edge Function deploys)
