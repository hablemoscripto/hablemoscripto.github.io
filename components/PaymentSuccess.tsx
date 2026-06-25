import React, { useEffect, useState, useRef } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { CheckCircle, XCircle, Clock, Loader2, Home } from 'lucide-react';
import { getPaymentByReference } from '../services/paymentService';
import { useEntitlements } from '../contexts/EntitlementsContext';
import { reportError } from '../utils/errorReporting';
import { trackPremiumPurchase } from '../utils/analytics';

type PaymentStatus = 'loading' | 'APPROVED' | 'PENDING' | 'DECLINED' | 'VOIDED' | 'ERROR';

export default function PaymentSuccess() {
  const [searchParams] = useSearchParams();
  const [status, setStatus] = useState<PaymentStatus>('loading');
  const [productName, setProductName] = useState('');
  const [pollExhausted, setPollExhausted] = useState(false);
  const statusRef = useRef(status);
  const attemptsRef = useRef(0);

  // When the payment is confirmed APPROVED, the webhook has already granted
  // premium server-side. Refresh the cached entitlements (once) so navigating
  // to /education shows the unlocked content without a re-login.
  const { refresh: refreshEntitlements } = useEntitlements();
  const refreshRef = useRef(refreshEntitlements);
  const refreshedRef = useRef(false);
  const purchaseTrackedRef = useRef(false);
  useEffect(() => {
    refreshRef.current = refreshEntitlements;
  }, [refreshEntitlements]);

  // Keep the ref in sync with state — read inside the polling interval below.
  // Must be in an effect, not in render: refs should not be mutated during
  // render because it breaks concurrent-safe rendering assumptions.
  useEffect(() => {
    statusRef.current = status;
  }, [status]);

  const reference = searchParams.get('ref');

  useEffect(() => {
    if (!reference) {
      // Transition to terminal ERROR state when query param is missing.
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setStatus('ERROR');
      return;
    }

    async function checkPayment() {
      try {
        const payment = await getPaymentByReference(reference!);
        setStatus(payment.status as PaymentStatus);
        setProductName(payment.product_name || 'Premium');
        if (payment.status === 'APPROVED' && !refreshedRef.current) {
          refreshedRef.current = true;
          void refreshRef.current();
        }
        if (payment.status === 'APPROVED' && !purchaseTrackedRef.current) {
          purchaseTrackedRef.current = true;
          trackPremiumPurchase(
            (payment.amount_in_cents ?? 0) / 100,
            payment.currency ?? 'COP',
          );
        }
      } catch (error) {
        reportError(error, { component: 'PaymentSuccess', action: 'checkPayment' });
        setStatus('ERROR');
      }
    }

    checkPayment();

    // Poll for status updates only while pending, capped so we never loop
    // forever if the webhook never lands (e.g. not yet registered in Wompi).
    const MAX_POLL_ATTEMPTS = 24; // ~2 minutes at 5s
    const interval = setInterval(() => {
      if (statusRef.current !== 'PENDING' && statusRef.current !== 'loading') {
        clearInterval(interval);
        return;
      }
      attemptsRef.current += 1;
      if (attemptsRef.current >= MAX_POLL_ATTEMPTS) {
        clearInterval(interval);
        setPollExhausted(true);
        return;
      }
      checkPayment();
    }, 5000);

    return () => clearInterval(interval);
  }, [reference]);

  const renderContent = () => {
    switch (status) {
      case 'loading':
        return (
          <>
            <div className="w-20 h-20 bg-navy-700 rounded-full flex items-center justify-center mx-auto mb-6">
              <Loader2 size={40} className="text-brand-400 animate-spin" />
            </div>
            <h1 className="text-2xl font-bold text-white mb-4">Verificando pago...</h1>
            <p className="text-navy-400">Estamos confirmando tu transacción</p>
          </>
        );

      case 'APPROVED':
        return (
          <>
            <div className="w-20 h-20 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle size={40} className="text-green-400" />
            </div>
            <h1 className="text-2xl font-bold text-white mb-4">Pago Exitoso</h1>
            <p className="text-navy-400 mb-2">Tu compra de <span className="text-brand-400 font-medium">{productName}</span> ha sido confirmada.</p>
            <p className="text-green-400 text-sm font-medium mb-2">Tu acceso ya está activo. Toda la plataforma está desbloqueada.</p>
            <p className="text-navy-400 text-sm mb-8">Referencia: {reference}</p>
            <Link
              to="/education"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-brand-500 to-brand-600 hover:from-brand-400 hover:to-brand-500 text-navy-950 font-bold py-3 px-6 rounded-lg transition-all duration-300 shadow-glow-brand"
            >
              <Home size={20} />
              Ir al contenido Premium
            </Link>
          </>
        );

      case 'PENDING':
        return (
          <>
            <div className="w-20 h-20 bg-yellow-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
              <Clock size={40} className="text-yellow-400" />
            </div>
            <h1 className="text-2xl font-bold text-white mb-4">Pago Pendiente</h1>
            <p className="text-navy-400 mb-2">Tu pago está siendo procesado.</p>
            <p className="text-navy-400 text-sm mb-4">Referencia: {reference}</p>
            <p className="text-navy-400 text-sm mb-8">
              Te notificaremos cuando el pago sea confirmado. Esto puede tomar unos minutos.
            </p>
            {pollExhausted && (
              <p className="text-navy-300 text-sm mb-8">
                Está tardando más de lo normal. Si ya completaste el pago, no te
                preocupes: tu acceso se activará automáticamente en cuanto se
                confirme. Guarda tu número de referencia.
              </p>
            )}
            <Link
              to="/"
              className="inline-flex items-center gap-2 bg-navy-700 hover:bg-navy-600 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300"
            >
              <Home size={20} />
              Volver al inicio
            </Link>
          </>
        );

      case 'DECLINED':
        return (
          <>
            <div className="w-20 h-20 bg-red-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
              <XCircle size={40} className="text-red-400" />
            </div>
            <h1 className="text-2xl font-bold text-white mb-4">Pago Rechazado</h1>
            <p className="text-navy-400 mb-2">Tu pago no pudo ser procesado.</p>
            <p className="text-navy-400 text-sm mb-8">
              Por favor intenta de nuevo con otro método de pago.
            </p>
            <Link
              to="/"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-brand-500 to-brand-600 hover:from-brand-400 hover:to-brand-500 text-navy-950 font-bold py-3 px-6 rounded-lg transition-all duration-300 shadow-glow-brand"
            >
              Intentar de nuevo
            </Link>
          </>
        );

      case 'VOIDED':
      case 'ERROR':
      default:
        return (
          <>
            <div className="w-20 h-20 bg-red-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
              <XCircle size={40} className="text-red-400" />
            </div>
            <h1 className="text-2xl font-bold text-white mb-4">Error en el pago</h1>
            <p className="text-navy-400 mb-8">
              Hubo un problema con tu transacción. Por favor intenta de nuevo.
            </p>
            <Link
              to="/"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-brand-500 to-brand-600 hover:from-brand-400 hover:to-brand-500 text-navy-950 font-bold py-3 px-6 rounded-lg transition-all duration-300 shadow-glow-brand"
            >
              <Home size={20} />
              Volver al inicio
            </Link>
          </>
        );
    }
  };

  return (
    <div className="min-h-screen bg-navy-950 flex items-center justify-center px-4">
      <Helmet>
        <title>Estado del pago | Hablemos Cripto</title>
        <meta name="robots" content="noindex" />
      </Helmet>
      <div
        role="status"
        aria-live="polite"
        className="bg-navy-900 border border-navy-700 rounded-2xl p-8 max-w-md w-full text-center"
      >
        {renderContent()}
      </div>
    </div>
  );
}
