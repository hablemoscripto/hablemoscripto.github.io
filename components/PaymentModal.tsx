import React, { useState, useEffect, useCallback } from 'react';
import { Modal } from './ui/Modal';
import { CreditCard, Loader2, AlertCircle, ShieldCheck } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';
import {
  createPaymentWithSignature,
  formatCop,
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
  // When provided, the Inversor view offers a path to Cripto Experto so the
  // higher tier is reachable from the unlock flow, not only from the pricing grid.
  onSwitchPlan?: (planId: 'inversor' | 'experto') => void;
}

export default function PaymentModal({ isOpen, onClose, planId, onSuccess, onSwitchPlan }: PaymentModalProps) {
  const [loading, setLoading] = useState(false);
  const [widgetLoaded, setWidgetLoaded] = useState(false);
  const [widgetFailed, setWidgetFailed] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const { user } = useAuth();

  const plan = PRICING_PLANS[planId];
  const copPriceCents = plan.priceCopCents;

  const isHighTier = planId === 'experto';

  const publicKey = import.meta.env.VITE_WOMPI_PUBLIC_KEY;

  // Adblockers and flaky mobile networks can block the Wompi script entirely;
  // a stale <script> tag in the DOM does not mean it ever executed, so the
  // source of truth for "loaded" is window.WidgetCheckout, and failures must
  // surface to the buyer with a retry instead of a dead "intenta de nuevo".
  const injectWidgetScript = useCallback(() => {
    setWidgetFailed(false);
    if (window.WidgetCheckout) {
      setWidgetLoaded(true);
      return;
    }
    document.getElementById('wompi-widget-script')?.remove();

    const script = document.createElement('script');
    script.id = 'wompi-widget-script';
    script.src = 'https://checkout.wompi.co/widget.js';
    script.async = true;
    script.onload = () => setWidgetLoaded(true);
    script.onerror = () => {
      setWidgetFailed(true);
      reportError('Failed to load Wompi widget', { component: 'PaymentModal', action: 'loadWidget' });
    };
    document.body.appendChild(script);
  }, []);

  useEffect(() => {
    // Sets state synchronously only when the widget is already on window
    // (remount with the script previously loaded) — same pattern as the
    // isOpen effect below.
    // eslint-disable-next-line react-hooks/set-state-in-effect
    injectWidgetScript();
  }, [injectWidgetScript]);

  useEffect(() => {
    if (isOpen) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setErrorMessage('');
    }
  }, [isOpen]);

  const handleCardPayment = async () => {
    if (!user) {
      setErrorMessage('Debes iniciar sesión para realizar el pago');
      return;
    }

    if (!widgetLoaded || !window.WidgetCheckout) {
      setErrorMessage('El sistema de pagos todavía se está cargando. Espera unos segundos e intenta de nuevo.');
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
      <div className="space-y-6">
          <div className="bg-navy-800/50 rounded-2xl p-5 border border-white/5">
            <div className="flex justify-between items-baseline mb-1">
              <span className="text-navy-300 text-sm font-medium">Plan {plan.name}</span>
              <span className="text-white font-bold">
                {formatCop(copPriceCents)} <span className="text-navy-400 text-xs font-normal">COP</span>
              </span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-navy-400 text-xs">Pago único · acceso de por vida</span>
              <span className="text-navy-400 text-xs">≈ ${plan.priceUsd} USD</span>
            </div>
          </div>

          {widgetFailed && (
            <div role="alert" className="p-3 bg-red-500/10 border border-red-500/20 rounded-xl space-y-2">
              <div className="flex items-start gap-2">
                <AlertCircle size={16} aria-hidden="true" className="text-red-400 flex-shrink-0 mt-0.5" />
                <p className="text-sm text-red-400">
                  No pudimos cargar el sistema de pagos de Wompi. Esto suele pasar cuando un
                  bloqueador de anuncios lo impide. Desactívalo para este sitio y reintenta, o
                  escríbenos a{' '}
                  <a href="mailto:hablemoscripto@gmail.com" className="underline hover:text-red-300 transition-colors">
                    hablemoscripto@gmail.com
                  </a>{' '}
                  y te ayudamos a completar tu compra.
                </p>
              </div>
              <button
                onClick={injectWidgetScript}
                className="w-full text-sm py-2 rounded-lg border border-red-500/30 text-red-300 hover:bg-red-500/10 font-medium transition-colors"
              >
                Reintentar carga
              </button>
            </div>
          )}

          {errorMessage && !widgetFailed && (
            <div className="flex items-center gap-2 p-3 bg-red-500/10 border border-red-500/20 rounded-xl">
              <AlertCircle size={16} aria-hidden="true" className="text-red-400 flex-shrink-0" />
              <p className="text-sm text-red-400">{errorMessage}</p>
            </div>
          )}

          <button
            onClick={handleCardPayment}
            disabled={loading || !user || widgetFailed}
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
                Pagar con tarjeta: {formatCop(copPriceCents)} COP
              </>
            )}
          </button>

          <div className="space-y-2">
            <div className="flex items-start justify-center gap-1.5 text-[11px] text-emerald-300">
              <ShieldCheck size={13} aria-hidden="true" className="shrink-0 mt-0.5" />
              <span>Garantía de 7 días. Si no es para ti, te devolvemos tu dinero.</span>
            </div>
            <p className="text-[11px] text-navy-400 text-center">
              Pagos procesados de forma segura por Wompi.
            </p>
            <p className="text-[11px] text-navy-400 text-center">
              ¿Dudas antes de pagar? Escríbenos a{' '}
              <a href="mailto:hablemoscripto@gmail.com" className="text-brand-400 hover:text-brand-300 underline">
                hablemoscripto@gmail.com
              </a>
            </p>
          </div>

          {!isHighTier && onSwitchPlan && (
            <div className="pt-4 border-t border-navy-700">
              <p className="text-xs text-navy-400 text-center mb-2">
                ¿Quieres también la comunidad privada y las charlas en vivo?
              </p>
              <button
                onClick={() => onSwitchPlan('experto')}
                className="w-full text-sm min-h-11 py-2.5 rounded-xl border border-brand-500/40 text-brand-400 hover:bg-brand-500/5 font-medium transition-colors"
              >
                Ver plan Cripto Experto ({formatCop(PRICING_PLANS.experto.priceCopCents)} COP)
              </button>
            </div>
          )}

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
    </Modal>
  );
}
