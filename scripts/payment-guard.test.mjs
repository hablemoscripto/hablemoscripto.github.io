/**
 * Release 1C: a second charge must not demote Cripto Experto, and the green
 * screen must wait until the profile rank covers the SKU.
 */
import { test } from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const read = (rel) => readFileSync(join(root, rel), 'utf8');

test('upgrade RPC returns false instead of demoting vip', () => {
  const sql = read('supabase/migrations/2026-10-31_no_downgrade_on_upgrade.sql');
  assert.match(sql, /DROP FUNCTION IF EXISTS public\.upgrade_user_to_premium\(UUID, TEXT\)/);
  assert.match(sql, /RETURNS BOOLEAN/);
  assert.match(sql, /v_tier = 'vip'/);
  assert.match(sql, /v_tier = 'premium' AND p_tier = 'premium'/);
  assert.match(sql, /IF v_blocked THEN\s+RETURN FALSE;/);
  assert.match(sql, /RETURN TRUE;/);
  assert.match(
    sql,
    /REVOKE ALL ON FUNCTION public\.upgrade_user_to_premium\(UUID, TEXT\) FROM PUBLIC/
  );
  assert.match(sql, /FROM anon, authenticated/);
  assert.match(
    sql,
    /GRANT EXECUTE ON FUNCTION public\.upgrade_user_to_premium\(UUID, TEXT\) TO service_role/
  );
  assert.match(sql, /FOR UPDATE/);
});

test('create-payment refuses a held rank before it signs', () => {
  const fn = read('supabase/functions/create-payment/index.ts');
  assert.match(fn, /Ya tienes este acceso\. No hicimos un cobro\./);
  assert.match(fn, /status: 409/);
  assert.match(fn, /status: 503/);
  assert.match(fn, /No pudimos confirmar tu acceso\. Intenta de nuevo\./);
  assert.match(fn, /customer_email: customerEmail/);
  assert.match(fn, /const customerEmail = user\.email/);
  assert.doesNotMatch(fn, /customer_email: body\.customerEmail/);
  assert.doesNotMatch(fn, /const \{ productType, customerEmail, customerName \}/);
  const signAt = fn.indexOf('await generateSignature');
  const refuseAt = fn.indexOf('heldRank(profile)');
  assert.ok(refuseAt > 0 && signAt > 0 && refuseAt < signAt);
});

test('webhook skips the welcome email when the upgrade is a no-op', () => {
  const fn = read('supabase/functions/wompi-webhook/index.ts');
  assert.match(fn, /upgraded === false/);
  assert.match(fn, /UNKNOWN_PRODUCT/);
  assert.match(fn, /productType !== 'inversor_lifetime' && productType !== 'vip_lifetime'/);
  assert.doesNotMatch(fn, /payment\.product_type === 'vip_lifetime' \? 'vip' : 'premium'/);
});

test('green screen and checkout wait for the granted rank', () => {
  const success = read('components/PaymentSuccess.tsx');
  assert.doesNotMatch(success, /Te notificaremos/);
  assert.match(success, /skuRank\(productType\)/);
  assert.match(success, /Pago recibido/);
  assert.match(success, /No hay un pago para mostrar/);
  assert.match(success, /soporte@hablemoscripto\.io/);

  const modal = read('components/PaymentModal.tsx');
  assert.match(
    modal,
    /Este cobro es de 900\.000 COP\. Los 350\.000 COP que ya pagaste no se descuentan\./
  );
  assert.match(modal, /Pasar a Cripto Experto/);
  assert.match(modal, /onOpenMentoria/);
  assert.doesNotMatch(modal, /getElementById\('mentoria'\)/);
  assert.match(modal, /attemptRef/);

  const page = read('components/EducationPage.tsx');
  assert.match(page, /courseTierRank\(fresh\.courseTier\) >= targetRank/);
  assert.match(page, /entitlementsStatus !== 'ready'/);
  assert.match(page, /No pudimos confirmar tu acceso/);

  const pricing = read('components/PricingSection.tsx');
  assert.match(pricing, /Pasar a Cripto Experto/);

  const ctx = read('contexts/EntitlementsContext.tsx');
  assert.match(ctx, /unknown/);
  assert.match(ctx, /confirmedUserId/);
});
