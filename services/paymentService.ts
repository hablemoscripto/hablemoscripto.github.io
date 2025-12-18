import { supabase } from '../lib/supabase';

export interface Product {
  id: string;
  name: string;
  description: string;
  priceInCents: number;
  type: 'premium_lifetime' | 'premium_yearly' | 'premium_monthly';
}

export const PRODUCTS: Record<string, Product> = {
  premium_lifetime: {
    id: 'premium_lifetime',
    name: 'Premium Lifetime',
    description: 'Acceso de por vida a todo el contenido premium',
    priceInCents: 9900000, // $99,000 COP
    type: 'premium_lifetime',
  },
};

function generateReference(): string {
  const timestamp = Date.now();
  const random = Math.random().toString(36).substring(2, 8);
  return `HC-${timestamp}-${random}`;
}

export async function createPaymentRecord(
  product: Product,
  userId: string | null,
  customerEmail: string,
  customerName?: string
) {
  const reference = generateReference();

  const { data, error } = await supabase
    .from('payments')
    .insert({
      user_id: userId,
      wompi_reference: reference,
      amount_in_cents: product.priceInCents,
      currency: 'COP',
      status: 'PENDING',
      product_type: product.type,
      product_name: product.name,
      customer_email: customerEmail,
      customer_name: customerName,
    })
    .select()
    .single();

  if (error) {
    console.error('Error creating payment record:', error);
    throw error;
  }

  return { payment: data, reference };
}

export async function getPaymentByReference(reference: string) {
  const { data, error } = await supabase
    .from('payments')
    .select('*')
    .eq('wompi_reference', reference)
    .single();

  if (error) {
    console.error('Error getting payment:', error);
    throw error;
  }

  return data;
}

export async function getUserPremiumStatus(userId: string) {
  const { data, error } = await supabase
    .from('user_profiles')
    .select('is_premium, premium_since, premium_expires_at')
    .eq('id', userId)
    .single();

  if (error) {
    // User profile might not exist yet
    if (error.code === 'PGRST116') {
      return { isPremium: false };
    }
    console.error('Error getting premium status:', error);
    throw error;
  }

  // Check if premium has expired
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
