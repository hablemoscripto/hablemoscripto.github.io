import React, { useState, useEffect } from 'react';
import { Loader2, Crown, CheckCircle } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';
import { createPaymentRecord, Product, PRODUCTS, getUserPremiumStatus } from '../services/paymentService';

declare global {
  interface Window {
    WidgetCheckout: new (config: WompiWidgetConfig) => WompiWidget;
  }
}

interface WompiWidgetConfig {
  currency: string;
  amountInCents: number;
  reference: string;
  publicKey: string;
  redirectUrl?: string;
  customerData?: {
    email: string;
    fullName?: string;
    phoneNumber?: string;
    phoneNumberPrefix?: string;
  };
}

interface WompiWidget {
  open: (callback: (result: WompiResult) => void) => void;
}

interface WompiResult {
  transaction?: {
    id: string;
    status: string;
    reference: string;
  };
}

interface PaymentButtonProps {
  productId?: string;
  onSuccess?: () => void;
  onError?: (error: string) => void;
  className?: string;
}

export default function PaymentButton({
  productId = 'premium_lifetime',
  onSuccess,
  onError,
  className = '',
}: PaymentButtonProps) {
  const { user } = useAuth();
  const [loading, setLoading] = useState(false);
  const [isPremium, setIsPremium] = useState(false);
  const [checkingStatus, setCheckingStatus] = useState(true);
  const [widgetLoaded, setWidgetLoaded] = useState(false);

  const product: Product = PRODUCTS[productId];
  const publicKey = import.meta.env.VITE_WOMPI_PUBLIC_KEY;

  // Load Wompi Widget script
  useEffect(() => {
    if (document.getElementById('wompi-widget-script')) {
      setWidgetLoaded(true);
      return;
    }

    const script = document.createElement('script');
    script.id = 'wompi-widget-script';
    script.src = 'https://checkout.wompi.co/widget.js';
    script.async = true;
    script.onload = () => setWidgetLoaded(true);
    script.onerror = () => {
      console.error('Failed to load Wompi widget');
      onError?.('Error al cargar el sistema de pagos');
    };
    document.body.appendChild(script);

    return () => {
      // Don't remove script on unmount to avoid reloading
    };
  }, []);

  // Check if user is already premium
  useEffect(() => {
    async function checkPremiumStatus() {
      if (!user) {
        setCheckingStatus(false);
        return;
      }

      try {
        const status = await getUserPremiumStatus(user.id);
        setIsPremium(status.isPremium);
      } catch (error) {
        console.error('Error checking premium status:', error);
      } finally {
        setCheckingStatus(false);
      }
    }

    checkPremiumStatus();
  }, [user]);

  const handlePayment = async () => {
    if (!user) {
      onError?.('Debes iniciar sesion para realizar el pago');
      return;
    }

    if (!widgetLoaded || !window.WidgetCheckout) {
      onError?.('El sistema de pagos aun no esta listo. Intenta de nuevo.');
      return;
    }

    if (!publicKey) {
      onError?.('Error de configuracion del sistema de pagos');
      console.error('VITE_WOMPI_PUBLIC_KEY not configured');
      return;
    }

    setLoading(true);

    try {
      // Create payment record in database
      const { reference } = await createPaymentRecord(
        product,
        user.id,
        user.email || '',
        user.user_metadata?.full_name || user.user_metadata?.name
      );

      // Open Wompi widget
      const checkout = new window.WidgetCheckout({
        currency: 'COP',
        amountInCents: product.priceInCents,
        reference: reference,
        publicKey: publicKey,
        redirectUrl: `${window.location.origin}/pago-completado?ref=${reference}`,
        customerData: {
          email: user.email || '',
          fullName: user.user_metadata?.full_name || user.user_metadata?.name || '',
        },
      });

      checkout.open((result: WompiResult) => {
        setLoading(false);

        if (result.transaction) {
          if (result.transaction.status === 'APPROVED') {
            setIsPremium(true);
            onSuccess?.();
          } else if (result.transaction.status === 'DECLINED') {
            onError?.('El pago fue rechazado. Intenta con otro metodo de pago.');
          } else if (result.transaction.status === 'VOIDED') {
            onError?.('El pago fue cancelado.');
          }
          // For PENDING status, the webhook will handle the update
        }
      });
    } catch (error) {
      setLoading(false);
      console.error('Payment error:', error);
      onError?.('Error al procesar el pago. Intenta de nuevo.');
    }
  };

  const formatPrice = (cents: number) => {
    return new Intl.NumberFormat('es-CO', {
      style: 'currency',
      currency: 'COP',
      minimumFractionDigits: 0,
    }).format(cents / 100);
  };

  if (checkingStatus) {
    return (
      <button
        disabled
        className={`bg-slate-700 text-slate-400 font-semibold py-3 px-6 rounded-lg flex items-center justify-center gap-2 ${className}`}
      >
        <Loader2 size={20} className="animate-spin" />
        Cargando...
      </button>
    );
  }

  if (isPremium) {
    return (
      <div className={`bg-gradient-to-r from-amber-500/20 to-orange-500/20 border border-amber-500/50 text-amber-400 font-semibold py-3 px-6 rounded-lg flex items-center justify-center gap-2 ${className}`}>
        <CheckCircle size={20} />
        Ya eres Premium
      </div>
    );
  }

  return (
    <button
      onClick={handlePayment}
      disabled={loading || !user}
      className={`bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 disabled:from-slate-600 disabled:to-slate-600 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 flex items-center justify-center gap-2 disabled:cursor-not-allowed ${className}`}
    >
      {loading ? (
        <>
          <Loader2 size={20} className="animate-spin" />
          Procesando...
        </>
      ) : (
        <>
          <Crown size={20} />
          {user ? `Obtener Premium - ${formatPrice(product.priceInCents)}` : 'Inicia sesion para comprar'}
        </>
      )}
    </button>
  );
}
