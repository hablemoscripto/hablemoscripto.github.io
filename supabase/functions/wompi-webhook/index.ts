import { serve } from 'https://deno.land/std@0.168.0/http/server.ts'
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2'
import { sendFundadorWelcome } from '../_shared/welcome-email.ts'

// Receives Wompi transaction.updated events, verifies the HMAC signature, and
// on APPROVED upgrades the user via the upgrade_user_to_premium RPC with the
// stored tier ('premium' = Inversor / inversor_lifetime, 'vip' = Cripto Experto
// / vip_lifetime), then sends the Fundador welcome email (non-fatal).
// Idempotent via the processed_webhook_events table.

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
}

interface WompiEvent {
  event: string
  data: {
    transaction: {
      id: string
      created_at: string
      amount_in_cents: number
      reference: string
      currency: string
      payment_method_type: string
      status: string
      customer_email: string
      customer_data?: {
        full_name?: string
      }
    }
  }
  sent_at: string
  timestamp: number
  signature: {
    checksum: string
    properties: string[]
  }
  environment: string
}

async function verifySignature(
  event: WompiEvent,
  eventsSecret: string
): Promise<boolean> {
  const { signature, data } = event
  const { properties, checksum } = signature
  const transaction = data.transaction

  // Build the string to hash based on the properties
  const values = properties.map((prop) => {
    const keys = prop.split('.')
    let value: any = { transaction }
    for (const key of keys) {
      if (value == null) return ''
      value = value[key]
    }
    return value
  })

  const stringToHash = values.join('') + event.timestamp + eventsSecret

  // Create SHA256 hash
  const encoder = new TextEncoder()
  const data_buffer = encoder.encode(stringToHash)
  const hashBuffer = await crypto.subtle.digest('SHA-256', data_buffer)
  const hashArray = Array.from(new Uint8Array(hashBuffer))
  const calculatedChecksum = hashArray.map((b) => b.toString(16).padStart(2, '0')).join('')

  return calculatedChecksum === checksum
}

serve(async (req) => {
  // Handle CORS preflight
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders })
  }

  try {
    const supabaseUrl = Deno.env.get('SUPABASE_URL')!
    const supabaseServiceKey = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!
    const eventsSecret = Deno.env.get('WOMPI_EVENTS_SECRET')!

    const supabase = createClient(supabaseUrl, supabaseServiceKey)

    const event: WompiEvent = await req.json()

    console.log('Received Wompi event:', event.event)

    // Verify signature
    const isValid = await verifySignature(event, eventsSecret)
    if (!isValid) {
      console.error('Invalid signature')
      return new Response(
        JSON.stringify({ error: 'Invalid signature' }),
        { status: 401, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      )
    }

    // Only process transaction.updated events
    if (event.event !== 'transaction.updated') {
      return new Response(
        JSON.stringify({ message: 'Event ignored' }),
        { status: 200, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      )
    }

    const { transaction } = event.data
    const eventId = event.signature.checksum

    // Idempotency strategy:
    //   1. INSERT a marker row keyed by signature.checksum *before* doing work.
    //      This wins the race against a simultaneous retry — only one caller
    //      can pass the unique constraint.
    //   2. Do the work.
    //   3. If the work fails, DELETE the marker row before returning non-2xx,
    //      so Wompi's retry can actually retry. Without step 3, a transient
    //      RPC failure is fatal: the marker row is left behind, and every
    //      retry returns "Already processed" while the user never gets premium.
    const cleanupDedupeRow = async () => {
      const { error } = await supabase
        .from('processed_webhook_events')
        .delete()
        .eq('id', eventId)
      if (error) {
        console.error('Failed to clean up dedupe row for retry:', error)
      }
    }

    const { error: dedupeError } = await supabase
      .from('processed_webhook_events')
      .insert({
        id: eventId,
        event_type: event.event,
        reference: transaction.reference,
        status: transaction.status,
      })

    if (dedupeError) {
      if (dedupeError.code === '23505') {
        console.log('Duplicate event — already processed:', eventId)
        return new Response(
          JSON.stringify({ success: true, message: 'Already processed' }),
          { status: 200, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
        )
      }
      console.error('Failed to record webhook event:', dedupeError)
      return new Response(
        JSON.stringify({ error: 'Internal server error' }),
        { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      )
    }

    const { data: payment, error: paymentError } = await supabase
      .from('payments')
      .update({
        wompi_transaction_id: transaction.id,
        status: transaction.status,
        payment_method: transaction.payment_method_type,
        updated_at: new Date().toISOString(),
      })
      .eq('wompi_reference', transaction.reference)
      .select()
      .single()

    if (paymentError) {
      console.error('Error updating payment:', paymentError)
      await cleanupDedupeRow()
      return new Response(
        JSON.stringify({ error: 'Payment not found' }),
        { status: 404, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      )
    }

    if (transaction.status === 'APPROVED' && payment.user_id) {
      // 'premium' (Inversor / inversor_lifetime) or 'vip' (Cripto Experto /
      // vip_lifetime). The RPC persists this as user_profiles.premium_tier.
      const tier: 'premium' | 'vip' =
        payment.product_type === 'vip_lifetime' ? 'vip' : 'premium'

      const { error: upgradeError } = await supabase.rpc('upgrade_user_to_premium', {
        p_user_id: payment.user_id,
        p_tier: tier,
      })

      if (upgradeError) {
        console.error('Error upgrading user:', upgradeError)
        await cleanupDedupeRow()
        return new Response(
          JSON.stringify({ error: 'Failed to upgrade user', reference: transaction.reference }),
          { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
        )
      }

      console.log('User upgraded to premium:', payment.user_id)

      // Fundador welcome email — strictly non-fatal: the upgrade already
      // succeeded, so an email failure must never make the webhook return a
      // non-2xx (Wompi would retry against an already-processed dedupe row and
      // hit "Already processed" without re-running the upgrade).
      try {
        await sendFundadorWelcome({
          to: payment.customer_email ?? transaction.customer_email,
          name: payment.customer_name ?? transaction.customer_data?.full_name,
          tier,
          resendApiKey: Deno.env.get('RESEND_API_KEY') ?? '',
        })
      } catch (emailError) {
        console.error('Fundador welcome email failed (non-fatal):', emailError)
      }
    }

    return new Response(
      JSON.stringify({ success: true, status: transaction.status }),
      { status: 200, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    )
  } catch (error) {
    console.error('Webhook error:', error)
    return new Response(
      JSON.stringify({ error: 'Internal server error' }),
      { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    )
  }
})
