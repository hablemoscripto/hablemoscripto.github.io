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

export interface PaymentData {
  reference: string;
  amountInCents: number;
  currency: string;
  signature: string;
}

export async function createPaymentWithSignature(
  product: Product,
  customerEmail: string,
  customerName?: string
): Promise<PaymentData> {
  const { data: sessionData } = await supabase.auth.getSession();
  const accessToken = sessionData?.session?.access_token;

  if (!accessToken) {
    throw new Error('No authenticated session');
  }

  const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;

  const response = await fetch(`${supabaseUrl}/functions/v1/create-payment`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${accessToken}`,
    },
    body: JSON.stringify({
      productType: product.type,
      productName: product.name,
      amountInCents: product.priceInCents,
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
