import React, { useEffect, useState, useRef } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { CheckCircle, XCircle, Clock, Loader2, Home } from 'lucide-react';
import { courseTierRank, getPaymentByReference, skuRank } from '../services/paymentService';
import { useEntitlements } from '../contexts/EntitlementsContext';
import { reportError } from '../utils/errorReporting';
import { trackPremiumPurchase } from '../utils/analytics';

type PaymentStatus =
  | 'loading'
  | 'APPROVED'
  | 'PENDING'
  | 'DECLINED'
  | 'VOIDED'
  | 'ERROR'
  | 'MISSING';

function SupportLine() {
  return (
    <p className="text-navy-300 text-sm mb-8">
      Si necesitas ayuda, escribe a{' '}
      <a href="mailto:soporte@hablemoscripto.io" className="text-brand-400 underline">
        soporte@hablemoscripto.io
      </a>
    </p>
  );
}

export default function PaymentSuccess() {
  const [searchParams] = useSearchParams();
  const [status, setStatus] = useState<PaymentStatus>('loading');
  const [productName, setProductName] = useState('');
  const [productType, setProductType] = useState('');
  const [pollExhausted, setPollExhausted] = useState(false);
  const statusRef = useRef(status);
  const attemptsRef = useRef(0);

  // Green only when the profile rank covers the SKU. payments.status is written
  // before the upgrade RPC, so APPROVED alone is not access.
  const {
    entitlements,
    status: entitlementsStatus,
    refresh: refreshEntitlements,
  } = useEntitlements();
  const refreshRef = useRef(refreshEntitlements);
  const purchaseTrackedRef = useRef(false);
  const granted =
    entitlementsStatus === 'ready' &&
    skuRank(productType) > 0 &&
    courseTierRank(entitlements.courseTier) >= skuRank(productType);
  const grantedRef = useRef(granted);
  useEffect(() => {
    refreshRef.current = refreshEntitlements;
  }, [refreshEntitlements]);
  useEffect(() => {
    grantedRef.current = granted;
  }, [granted]);

  // Keep the ref in sync with state — read inside the polling interval below.
  // Must be in an effect, not in render: refs should not be mutated during
  // render because it breaks concurrent-safe rendering assumptions.
  useEffect(() => {
    statusRef.current = status;
  }, [status]);

  const reference = searchParams.get('ref');

  useEffect(() => {
    if (!reference) {
      // A bare /pago-completado is not a failed charge.
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setStatus('MISSING');
      return;
    }

    async function checkPayment() {
      try {
        const payment = await getPaymentByReference(reference!);
        setStatus(payment.status as PaymentStatus);
        setProductName(payment.product_name || 'Premium');
        setProductType(payment.product_type || '');
        if (payment.status === 'APPROVED') {
          void refreshRef.current();
        }
        if (payment.status === 'APPROVED' && !purchaseTrackedRef.current) {
          purchaseTrackedRef.current = true;
          trackPremiumPurchase((payment.amount_in_cents ?? 0) / 100, payment.currency ?? 'COP');
        }
      } catch (error) {
        reportError(error, { component: 'PaymentSuccess', action: 'checkPayment' });
        setStatus('ERROR');
      }
    }

    checkPayment();

    // Poll while the charge is pending, and keep polling entitlements after
    // APPROVED until the tier is on the account or the cap is hit.
    const MAX_POLL_ATTEMPTS = 24; // ~2 minutes at 5s
    const interval = setInterval(() => {
      const waitingForPayment = statusRef.current === 'PENDING' || statusRef.current === 'loading';
      const waitingForGrant = statusRef.current === 'APPROVED' && !grantedRef.current;
      if (!waitingForPayment && !waitingForGrant) {
        clearInterval(interval);
        return;
      }
      attemptsRef.current += 1;
      if (attemptsRef.current >= MAX_POLL_ATTEMPTS) {
        clearInterval(interval);
        setPollExhausted(true);
        return;
      }
      if (waitingForPayment) checkPayment();
      if (waitingForGrant) void refreshRef.current();
    }, 5000);

    return () => clearInterval(interval);
  }, [reference]);

  const renderContent = () => {
    if (status === 'loading') {
      return (
        <>
          <div className="w-20 h-20 bg-navy-700 rounded-full flex items-center justify-center mx-auto mb-6">
            <Loader2 size={40} className="text-brand-400 animate-spin" />
          </div>
          <h1 className="text-2xl font-bold text-white mb-4">Verificando pago...</h1>
          <p className="text-navy-400">Estamos confirmando tu transacción</p>
        </>
      );
    }

    if (status === 'MISSING') {
      return (
        <>
          <div className="w-20 h-20 bg-navy-700 rounded-full flex items-center justify-center mx-auto mb-6">
            <Clock size={40} className="text-navy-300" />
          </div>
          <h1 className="text-2xl font-bold text-white mb-4">No hay un pago para mostrar</h1>
          <p className="text-navy-300 mb-4">
            Esta página necesita la referencia del cobro. Si acabas de pagar, vuelve desde el aula o
            escribe con el comprobante.
          </p>
          <SupportLine />
          <Link
            to="/education"
            className="inline-flex items-center gap-2 bg-navy-700 hover:bg-navy-600 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300"
          >
            <Home size={20} />
            Ir al aula
          </Link>
        </>
      );
    }

    if (status === 'APPROVED' && granted) {
      return (
        <>
          <div className="w-20 h-20 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle size={40} className="text-green-400" />
          </div>
          <h1 className="text-2xl font-bold text-white mb-4">Pago exitoso</h1>
          <p className="text-navy-400 mb-2">
            Tu compra de <span className="text-brand-400 font-medium">{productName}</span> ha sido
            confirmada.
          </p>
          <p className="text-green-400 text-sm font-medium mb-2">
            Tu acceso ya está activo. Toda la plataforma está desbloqueada.
          </p>
          <p className="text-navy-400 text-sm mb-4">Referencia: {reference}</p>
          <SupportLine />
          <Link
            to="/education"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-brand-500 to-brand-600 hover:from-brand-400 hover:to-brand-500 text-navy-950 font-bold py-3 px-6 rounded-lg transition-all duration-300 shadow-glow-brand"
          >
            <Home size={20} />
            Ir al contenido Premium
          </Link>
        </>
      );
    }

    if (status === 'APPROVED') {
      return (
        <>
          <div className="w-20 h-20 bg-yellow-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
            <Clock size={40} className="text-yellow-400" />
          </div>
          <h1 className="text-2xl font-bold text-white mb-4">Pago recibido</h1>
          <p className="text-navy-300 mb-2">
            El cobro de <span className="text-brand-400 font-medium">{productName}</span> figura
            aprobado, pero tu acceso todavía no aparece en la cuenta.
          </p>
          <p className="text-navy-400 text-sm mb-4">Referencia: {reference}</p>
          {pollExhausted && (
            <p className="text-navy-300 text-sm mb-4">
              Sigue sin aparecer. Guarda la referencia y escríbenos. No hagas otro cobro.
            </p>
          )}
          <SupportLine />
          <Link
            to="/education"
            className="inline-flex items-center gap-2 bg-navy-700 hover:bg-navy-600 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300"
          >
            <Home size={20} />
            Ir al aula
          </Link>
        </>
      );
    }

    if (status === 'PENDING') {
      return (
        <>
          <div className="w-20 h-20 bg-yellow-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
            <Clock size={40} className="text-yellow-400" />
          </div>
          <h1 className="text-2xl font-bold text-white mb-4">Pago pendiente</h1>
          <p className="text-navy-400 mb-2">Tu pago está siendo procesado.</p>
          <p className="text-navy-400 text-sm mb-4">Referencia: {reference}</p>
          {pollExhausted && (
            <p className="text-navy-300 text-sm mb-4">
              Está tardando más de lo normal. Guarda tu referencia y escríbenos si tu acceso no
              aparece.
            </p>
          )}
          <SupportLine />
          <Link
            to="/"
            className="inline-flex items-center gap-2 bg-navy-700 hover:bg-navy-600 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300"
          >
            <Home size={20} />
            Volver al inicio
          </Link>
        </>
      );
    }

    if (status === 'DECLINED') {
      return (
        <>
          <div className="w-20 h-20 bg-red-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
            <XCircle size={40} className="text-red-400" />
          </div>
          <h1 className="text-2xl font-bold text-white mb-4">Pago rechazado</h1>
          <p className="text-navy-400 mb-2">Tu pago no pudo ser procesado.</p>
          <p className="text-navy-400 text-sm mb-4">
            Por favor intenta de nuevo con otro método de pago.
          </p>
          {reference && <p className="text-navy-400 text-sm mb-4">Referencia: {reference}</p>}
          <SupportLine />
          <Link
            to="/"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-brand-500 to-brand-600 hover:from-brand-400 hover:to-brand-500 text-navy-950 font-bold py-3 px-6 rounded-lg transition-all duration-300 shadow-glow-brand"
          >
            Intentar de nuevo
          </Link>
        </>
      );
    }

    return (
      <>
        <div className="w-20 h-20 bg-red-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
          <XCircle size={40} className="text-red-400" />
        </div>
        <h1 className="text-2xl font-bold text-white mb-4">Error en el pago</h1>
        <p className="text-navy-400 mb-4">
          Hubo un problema con tu transacción. Por favor intenta de nuevo.
        </p>
        {reference && <p className="text-navy-400 text-sm mb-4">Referencia: {reference}</p>}
        <SupportLine />
        <Link
          to="/"
          className="inline-flex items-center gap-2 bg-gradient-to-r from-brand-500 to-brand-600 hover:from-brand-400 hover:to-brand-500 text-navy-950 font-bold py-3 px-6 rounded-lg transition-all duration-300 shadow-glow-brand"
        >
          <Home size={20} />
          Volver al inicio
        </Link>
      </>
    );
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
