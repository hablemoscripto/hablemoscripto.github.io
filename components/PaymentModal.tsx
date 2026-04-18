import React, { useState, useEffect } from 'react';
import { Modal } from './ui/Modal';
import { CreditCard, Wallet, Copy, CheckCircle, Loader2, AlertCircle, ExternalLink } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';
import { createPaymentWithSignature, PRODUCTS } from '../services/paymentService';
import { reportError } from '../utils/errorReporting';
import { PRICING_PLANS } from './PricingSection';

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
  tier: 'premium' | 'vip';
  billingCycle: 'monthly' | 'yearly';
  onSuccess: () => void;
}

const USDC_WALLET_ADDRESS = import.meta.env.VITE_USDC_PAYMENT_ADDRESS || '5KUE3sm7pg2bicvGm8wtn1zyff4h57mmyxShhhiQjHc6';

export default function PaymentModal({ isOpen, onClose, tier, billingCycle, onSuccess }: PaymentModalProps) {
  const [activeTab, setActiveTab] = useState<'card' | 'crypto'>('card');
  const [loading, setLoading] = useState(false);
  const [widgetLoaded, setWidgetLoaded] = useState(false);
  const [copied, setCopied] = useState(false);
  const [txSignature, setTxSignature] = useState('');
  const [verifyStatus, setVerifyStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');
  const { user } = useAuth();

  const plan = PRICING_PLANS.find(p => p.tier === tier);
  const usdPrice = plan
    ? (billingCycle === 'monthly' ? plan.monthlyPrice : plan.yearlyPrice)
    : 0;
  const copPriceCents = plan
    ? (billingCycle === 'monthly' ? plan.monthlyPriceCOP : plan.yearlyPriceCOP)
    : 0;

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
      reportError('Failed to load Wompi widget', { component: 'PaymentModal', action: 'loadWidget' });
    };
    document.body.appendChild(script);
  }, []);

  // Reset state when modal opens
  useEffect(() => {
    if (isOpen) {
      setTxSignature('');
      setVerifyStatus('idle');
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

    setLoading(true);
    setErrorMessage('');

    try {
      // Use the first available product or create one dynamically
      const product = PRODUCTS['premium_lifetime'] || Object.values(PRODUCTS)[0];

      const paymentData = await createPaymentWithSignature(
        { ...product, priceInCents: copPriceCents },
        user.email || '',
        user.user_metadata?.full_name || user.user_metadata?.name
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

  const handleCopy = () => {
    navigator.clipboard.writeText(USDC_WALLET_ADDRESS);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleVerifyCrypto = async () => {
    if (!txSignature.trim()) {
      setErrorMessage('Ingresa la firma de la transacción');
      return;
    }

    setVerifyStatus('loading');
    setErrorMessage('');

    try {
      // TODO: Implement server-side verification via Edge Function
      // For now, simulate verification delay
      await new Promise(resolve => setTimeout(resolve, 2000));

      // Placeholder: in production, this would call an edge function to verify
      // the transaction on Solana and upgrade the user's plan
      setVerifyStatus('success');
      setTimeout(() => {
        onSuccess();
      }, 1500);
    } catch (error) {
      setVerifyStatus('error');
      setErrorMessage('No se pudo verificar la transacción. Verifica la firma e intenta de nuevo.');
      reportError(error, { component: 'PaymentModal', action: 'verifyCryptoPayment' });
    }
  };

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title={`Obtener ${plan?.name || 'Plan'}`}
      subtitle={billingCycle === 'monthly' ? 'Suscripción mensual' : 'Suscripción anual'}
      maxWidth="max-w-lg"
    >
      {/* Tabs */}
      <div className="flex border-b border-navy-700 -mx-6 px-6 -mt-2 mb-6">
        <button
          onClick={() => { setActiveTab('card'); setErrorMessage(''); }}
          className={`flex items-center gap-2 px-4 py-3 text-sm font-bold transition-all border-b-2 -mb-px ${
            activeTab === 'card'
              ? 'border-brand-500 text-brand-400'
              : 'border-transparent text-navy-400 hover:text-navy-200'
          }`}
        >
          <CreditCard size={16} />
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
          <Wallet size={16} />
          USDC en Solana
        </button>
      </div>

      {/* Card Tab */}
      {activeTab === 'card' && (
        <div className="space-y-6">
          {/* Price summary */}
          <div className="bg-navy-800/50 rounded-2xl p-5 border border-white/5">
            <div className="flex justify-between items-center mb-2">
              <span className="text-navy-300 text-sm font-medium">Plan {plan?.name}</span>
              <span className="text-white font-bold">{formatCOP(copPriceCents)}</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-navy-400 text-xs">
                {billingCycle === 'monthly' ? 'Facturación mensual' : 'Facturación anual'}
              </span>
              <span className="text-navy-400 text-xs">COP</span>
            </div>
          </div>

          {/* Error message */}
          {errorMessage && (
            <div className="flex items-center gap-2 p-3 bg-red-500/10 border border-red-500/20 rounded-xl">
              <AlertCircle size={16} className="text-red-400 flex-shrink-0" />
              <p className="text-sm text-red-400">{errorMessage}</p>
            </div>
          )}

          {/* Pay button */}
          <button
            onClick={handleCardPayment}
            disabled={loading || !user}
            className="w-full py-4 rounded-2xl text-sm font-bold bg-gradient-to-r from-brand-500 to-brand-600 hover:from-brand-400 hover:to-brand-500 text-navy-950 transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg shadow-brand-500/20"
          >
            {loading ? (
              <>
                <Loader2 size={18} className="animate-spin" />
                Procesando...
              </>
            ) : (
              <>
                <CreditCard size={18} />
                Pagar con tarjeta — {formatCOP(copPriceCents)}
              </>
            )}
          </button>

          <p className="text-[11px] text-navy-500 text-center">
            Pagos procesados de forma segura por Wompi. Puedes cancelar en cualquier momento.
          </p>
        </div>
      )}

      {/* Crypto Tab */}
      {activeTab === 'crypto' && (
        <div className="space-y-6">
          {/* Price in USDC */}
          <div className="bg-navy-800/50 rounded-2xl p-5 border border-white/5 text-center">
            <p className="text-navy-400 text-xs font-bold uppercase tracking-wider mb-1">Monto a enviar</p>
            <p className="text-3xl font-black text-white tracking-tight">
              ${usdPrice} <span className="text-lg text-navy-400 font-medium">USDC</span>
            </p>
            <p className="text-navy-500 text-xs mt-1">
              Red: Solana {billingCycle === 'yearly' ? '(suscripción anual)' : '(suscripción mensual)'}
            </p>
          </div>

          {/* Wallet address */}
          <div>
            <label className="block text-xs font-bold text-navy-400 uppercase tracking-wider mb-2">
              Dirección de pago
            </label>
            <div className="flex items-center gap-2 bg-navy-950 border border-navy-700 rounded-xl p-3">
              <code className="text-xs text-navy-200 font-mono flex-1 break-all select-all">
                {USDC_WALLET_ADDRESS}
              </code>
              <button
                onClick={handleCopy}
                className="flex-shrink-0 p-2 rounded-lg bg-navy-800 hover:bg-navy-700 transition-colors"
                aria-label="Copiar dirección"
              >
                {copied ? (
                  <CheckCircle size={16} className="text-green-400" />
                ) : (
                  <Copy size={16} className="text-navy-300" />
                )}
              </button>
            </div>
            {copied && (
              <p className="text-xs text-green-400 mt-1 font-medium">Dirección copiada</p>
            )}
          </div>

          {/* Instructions */}
          <div className="bg-navy-800/30 rounded-xl p-4 border border-white/5">
            <p className="text-xs font-bold text-navy-300 mb-3 uppercase tracking-wider">Instrucciones</p>
            <ol className="space-y-2 text-sm text-navy-300">
              <li className="flex items-start gap-2">
                <span className="flex-shrink-0 w-5 h-5 rounded-full bg-brand-500/20 text-brand-400 text-[10px] font-black flex items-center justify-center">1</span>
                <span>Abre Phantom u otra wallet de Solana</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="flex-shrink-0 w-5 h-5 rounded-full bg-brand-500/20 text-brand-400 text-[10px] font-black flex items-center justify-center">2</span>
                <span>Envía <strong className="text-white">${usdPrice} USDC</strong> a la dirección de arriba</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="flex-shrink-0 w-5 h-5 rounded-full bg-brand-500/20 text-brand-400 text-[10px] font-black flex items-center justify-center">3</span>
                <span>Pega la firma de la transacción aquí abajo</span>
              </li>
            </ol>
          </div>

          {/* Transaction signature input */}
          <div>
            <label className="block text-xs font-bold text-navy-400 uppercase tracking-wider mb-2">
              Firma de transacción
            </label>
            <input
              type="text"
              value={txSignature}
              onChange={(e) => setTxSignature(e.target.value)}
              placeholder="Ej: 5xG7k9... (signature de Solana)"
              className="w-full bg-navy-950 border border-navy-700 rounded-xl px-4 py-3 text-sm text-white placeholder-navy-600 focus:outline-none focus:border-brand-500/50 focus:ring-1 focus:ring-brand-500/20 font-mono transition-all"
              disabled={verifyStatus === 'loading' || verifyStatus === 'success'}
            />
          </div>

          {/* Error message */}
          {errorMessage && (
            <div className="flex items-center gap-2 p-3 bg-red-500/10 border border-red-500/20 rounded-xl">
              <AlertCircle size={16} className="text-red-400 flex-shrink-0" />
              <p className="text-sm text-red-400">{errorMessage}</p>
            </div>
          )}

          {/* Success message */}
          {verifyStatus === 'success' && (
            <div className="flex items-center gap-2 p-3 bg-green-500/10 border border-green-500/20 rounded-xl">
              <CheckCircle size={16} className="text-green-400 flex-shrink-0" />
              <p className="text-sm text-green-400">Pago verificado exitosamente. Activando tu plan...</p>
            </div>
          )}

          {/* Verify button */}
          <button
            onClick={handleVerifyCrypto}
            disabled={!txSignature.trim() || verifyStatus === 'loading' || verifyStatus === 'success'}
            className="w-full py-4 rounded-2xl text-sm font-bold bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-400 hover:to-emerald-500 text-navy-950 transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg shadow-emerald-500/20"
          >
            {verifyStatus === 'loading' ? (
              <>
                <Loader2 size={18} className="animate-spin" />
                Verificando en Solana...
              </>
            ) : verifyStatus === 'success' ? (
              <>
                <CheckCircle size={18} />
                Pago verificado
              </>
            ) : (
              <>
                <Wallet size={18} />
                Verificar Pago
              </>
            )}
          </button>

          <p className="text-[11px] text-navy-500 text-center flex items-center justify-center gap-1">
            <ExternalLink size={10} />
            Puedes verificar la transacción en{' '}
            <a
              href="https://solscan.io"
              target="_blank"
              rel="noopener noreferrer"
              className="text-brand-400 hover:underline"
            >
              Solscan
            </a>
          </p>
        </div>
      )}
    </Modal>
  );
}
