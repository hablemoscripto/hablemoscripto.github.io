import React, { useState, useEffect } from 'react';
import { Modal } from './ui/Modal';
import { CreditCard, Wallet, Loader2, AlertCircle } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';
import {
  createPaymentWithSignature,
  PRICING_PLANS,
} from '../services/paymentService';
import { reportError } from '../utils/errorReporting';

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
  signature?: { integrity: string };
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

interface PaymentModalProps {
  isOpen: boolean;
  onClose: () => void;
  planId: 'inversor' | 'experto';
  onSuccess: () => void;
}

export default function PaymentModal({ isOpen, onClose, planId, onSuccess }: PaymentModalProps) {
  const [activeTab, setActiveTab] = useState<'card' | 'crypto'>('card');
  const [loading, setLoading] = useState(false);
  const [widgetLoaded, setWidgetLoaded] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const { user } = useAuth();

  const plan = PRICING_PLANS[planId];
  const copPriceCents = plan.priceCopCents;

  const isHighTier = planId === 'experto';

  const publicKey = import.meta.env.VITE_WOMPI_PUBLIC_KEY;

  useEffect(() => {
    if (document.getElementById('wompi-widget-script')) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setWidgetLoaded(true);
      return;
    }

    const script = document.createElement('script');
    script.id = 'wompi-widget-script';
    script.src = 'https://checkout.wompi.co/widget.js';
    script.async = true;
    script.onload = () => setWidgetLoaded(true);
    script.onerror = () => {
      reportError('Failed to load Wompi widget', { component: 'PaymentModal', action: 'loadWidget' });
    };
    document.body.appendChild(script);
  }, []);

  useEffect(() => {
    if (isOpen) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setErrorMessage('');
    }
  }, [isOpen]);

  const formatCOP = (cents: number) => {
    return new Intl.NumberFormat('es-CO', {
      style: 'currency',
      currency: 'COP',
      minimumFractionDigits: 0,
    }).format(cents / 100);
  };

  const handleCardPayment = async () => {
    if (!user) {
      setErrorMessage('Debes iniciar sesión para realizar el pago');
      return;
    }

    if (!widgetLoaded || !window.WidgetCheckout) {
      setErrorMessage('El sistema de pagos aún no está listo. Intenta de nuevo.');
      return;
    }

    if (!publicKey) {
      setErrorMessage('Error de configuración del sistema de pagos');
      reportError('VITE_WOMPI_PUBLIC_KEY not configured', { component: 'PaymentModal', action: 'handleCardPayment' });
      return;
    }

    if (!plan.wompiSku) {
      setErrorMessage('Plan no válido para pago.');
      return;
    }

    setLoading(true);
    setErrorMessage('');

    try {
      const paymentData = await createPaymentWithSignature(
        plan.wompiSku,
        user.email || '',
        user.user_metadata?.full_name || user.user_metadata?.name,
      );

      const checkout = new window.WidgetCheckout({
        currency: paymentData.currency,
        amountInCents: paymentData.amountInCents,
        reference: paymentData.reference,
        publicKey: publicKey,
        signature: { integrity: paymentData.signature },
        redirectUrl: `${window.location.origin}/pago-completado?ref=${paymentData.reference}`,
        customerData: {
          email: user.email || '',
          fullName: user.user_metadata?.full_name || user.user_metadata?.name || '',
        },
      });

      checkout.open((result: WompiResult) => {
        setLoading(false);

        if (result.transaction) {
          if (result.transaction.status === 'APPROVED') {
            onSuccess();
          } else if (result.transaction.status === 'DECLINED') {
            setErrorMessage('El pago fue rechazado. Intenta con otro método de pago.');
          } else if (result.transaction.status === 'VOIDED') {
            setErrorMessage('El pago fue cancelado.');
          }
        }
      });
    } catch (error) {
      setLoading(false);
      reportError(error, { component: 'PaymentModal', action: 'processCardPayment' });
      setErrorMessage('Error al procesar el pago. Intenta de nuevo.');
    }
  };

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title={`Obtener ${plan.name}`}
      subtitle="Pago único · Acceso de por vida"
      maxWidth="max-w-lg"
    >
      <div className="flex border-b border-navy-700 -mx-6 px-6 -mt-2 mb-6">
        <button
          onClick={() => { setActiveTab('card'); setErrorMessage(''); }}
          className={`flex items-center gap-2 px-4 py-3 text-sm font-bold transition-all border-b-2 -mb-px ${
            activeTab === 'card'
              ? 'border-brand-500 text-brand-400'
              : 'border-transparent text-navy-400 hover:text-navy-200'
          }`}
        >
          <CreditCard size={16} aria-hidden="true" />
          Tarjeta
        </button>
        <button
          onClick={() => { setActiveTab('crypto'); setErrorMessage(''); }}
          className={`flex items-center gap-2 px-4 py-3 text-sm font-bold transition-all border-b-2 -mb-px ${
            activeTab === 'crypto'
              ? 'border-brand-500 text-brand-400'
              : 'border-transparent text-navy-400 hover:text-navy-200'
          }`}
        >
          <Wallet size={16} aria-hidden="true" />
          USDC en Solana
        </button>
      </div>

      {activeTab === 'card' && (
        <div className="space-y-6">
          <div className="bg-navy-800/50 rounded-2xl p-5 border border-white/5">
            <div className="flex justify-between items-center mb-2">
              <span className="text-navy-300 text-sm font-medium">Plan {plan.name}</span>
              <span className="text-white font-bold">{formatCOP(copPriceCents)}</span>
            </div>

            {isHighTier && (
              <p className="text-[11px] text-brand-400 mt-1">
                Como miembro de la Comunidad tienes prioridad al solicitar Mentoría Personalizada.
              </p>
            )}
            <div className="flex justify-between items-center">
              <span className="text-navy-400 text-xs">Pago único · acceso de por vida</span>
              <span className="text-navy-400 text-xs">COP</span>
            </div>
          </div>

          {errorMessage && (
            <div className="flex items-center gap-2 p-3 bg-red-500/10 border border-red-500/20 rounded-xl">
              <AlertCircle size={16} aria-hidden="true" className="text-red-400 flex-shrink-0" />
              <p className="text-sm text-red-400">{errorMessage}</p>
            </div>
          )}

          <button
            onClick={handleCardPayment}
            disabled={loading || !user}
            className="w-full py-4 rounded-2xl text-sm font-bold bg-gradient-to-r from-brand-500 to-brand-600 hover:from-brand-400 hover:to-brand-500 text-navy-950 transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg shadow-brand-500/20"
          >
            {loading ? (
              <>
                <Loader2 size={18} aria-hidden="true" className="animate-spin" />
                Procesando...
              </>
            ) : (
              <>
                <CreditCard size={18} aria-hidden="true" />
                Pagar con tarjeta — {formatCOP(copPriceCents)}
              </>
            )}
          </button>

          <p className="text-[11px] text-navy-400 text-center">
            Pagos procesados de forma segura por Wompi.
          </p>

          {isHighTier && (
            <div className="pt-4 border-t border-navy-700">
              <p className="text-xs text-navy-400 text-center mb-2">
                Como Cripto Experto tendrás prioridad para sesiones de mentoría.
              </p>
              <button
                onClick={() => {
                  onClose();
                  // Scroll to the mentoría section on the page
                  setTimeout(() => {
                    document.getElementById('mentoria')?.scrollIntoView({ behavior: 'smooth', block: 'center' });
                  }, 300);
                }}
                className="w-full text-sm py-2.5 rounded-xl border border-brand-500/40 text-brand-400 hover:bg-brand-500/5 font-medium transition-colors"
              >
                Conocer más sobre Mentoría Personalizada
              </button>
            </div>
          )}
        </div>
      )}

      {activeTab === 'crypto' && (
        // TODO(crypto, later phase): re-enable USDC payments once
        // verify-crypto-payment is updated to the new plan IDs and USDC
        // pricing is decided for the v2 product set. Form internals were
        // removed in this refactor — see git history if reviving.
        <div className="space-y-6 text-center py-8">
          <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-navy-800 border border-white/5 mb-2">
            <Wallet size={24} aria-hidden="true" className="text-navy-300" />
          </div>
          <div>
            <p className="text-base font-bold text-white mb-1">Pagos en cripto — próximamente</p>
            <p className="text-sm text-navy-400 max-w-sm mx-auto leading-relaxed">
              Por ahora, completa tu compra con tarjeta. Vamos a habilitar USDC en una próxima fase.
            </p>
          </div>
          <button
            onClick={() => setActiveTab('card')}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-bold bg-navy-800 hover:bg-navy-700 border border-white/10 hover:border-brand-500/40 text-white transition-all"
          >
            <CreditCard size={16} aria-hidden="true" />
            Volver a pago con tarjeta
          </button>
        </div>
      )}
    </Modal>
  );
}
