import { serve } from 'https://deno.land/std@0.168.0/http/server.ts'
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2'

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

    // Update payment in database
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
      return new Response(
        JSON.stringify({ error: 'Payment not found' }),
        { status: 404, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      )
    }

    // If payment approved, upgrade user to premium
    if (transaction.status === 'APPROVED' && payment.user_id) {
      const { error: upgradeError } = await supabase.rpc('upgrade_user_to_premium', {
        p_user_id: payment.user_id,
        p_product_type: payment.product_type,
      })

      if (upgradeError) {
        console.error('Error upgrading user:', upgradeError)
      } else {
        console.log('User upgraded to premium:', payment.user_id)
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
