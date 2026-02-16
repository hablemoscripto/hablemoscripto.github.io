import React, { useEffect, useState } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { CheckCircle, XCircle, Clock, Loader2, Home } from 'lucide-react';
import { getPaymentByReference } from '../services/paymentService';

type PaymentStatus = 'loading' | 'APPROVED' | 'PENDING' | 'DECLINED' | 'VOIDED' | 'ERROR';

export default function PaymentSuccess() {
  const [searchParams] = useSearchParams();
  const [status, setStatus] = useState<PaymentStatus>('loading');
  const [productName, setProductName] = useState('');

  const reference = searchParams.get('ref');

  useEffect(() => {
    async function checkPayment() {
      if (!reference) {
        setStatus('ERROR');
        return;
      }

      try {
        const payment = await getPaymentByReference(reference);
        setStatus(payment.status as PaymentStatus);
        setProductName(payment.product_name || 'Premium');
      } catch (error) {
        console.error('Error checking payment:', error);
        setStatus('ERROR');
      }
    }

    checkPayment();

    // Poll for status updates if pending
    const interval = setInterval(() => {
      if (status === 'PENDING') {
        checkPayment();
      }
    }, 5000);

    return () => clearInterval(interval);
  }, [reference, status]);

  const renderContent = () => {
    switch (status) {
      case 'loading':
        return (
          <>
            <div className="w-20 h-20 bg-slate-700 rounded-full flex items-center justify-center mx-auto mb-6">
              <Loader2 size={40} className="text-orange-400 animate-spin" />
            </div>
            <h1 className="text-2xl font-bold text-white mb-4">Verificando pago...</h1>
            <p className="text-slate-400">Estamos confirmando tu transaccion</p>
          </>
        );

      case 'APPROVED':
        return (
          <>
            <div className="w-20 h-20 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle size={40} className="text-green-400" />
            </div>
            <h1 className="text-2xl font-bold text-white mb-4">Pago Exitoso</h1>
            <p className="text-slate-400 mb-2">Tu compra de <span className="text-orange-400 font-medium">{productName}</span> ha sido confirmada.</p>
            <p className="text-slate-500 text-sm mb-8">Referencia: {reference}</p>
            <Link
              to="/education"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300"
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
            <p className="text-slate-400 mb-2">Tu pago esta siendo procesado.</p>
            <p className="text-slate-500 text-sm mb-4">Referencia: {reference}</p>
            <p className="text-slate-400 text-sm mb-8">
              Te notificaremos cuando el pago sea confirmado. Esto puede tomar unos minutos.
            </p>
            <Link
              to="/"
              className="inline-flex items-center gap-2 bg-slate-700 hover:bg-slate-600 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300"
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
            <p className="text-slate-400 mb-2">Tu pago no pudo ser procesado.</p>
            <p className="text-slate-500 text-sm mb-8">
              Por favor intenta de nuevo con otro metodo de pago.
            </p>
            <Link
              to="/"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300"
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
            <p className="text-slate-400 mb-8">
              Hubo un problema con tu transaccion. Por favor intenta de nuevo.
            </p>
            <Link
              to="/"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300"
            >
              <Home size={20} />
              Volver al inicio
            </Link>
          </>
        );
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 flex items-center justify-center px-4">
      <div className="bg-slate-900 border border-slate-700 rounded-2xl p-8 max-w-md w-full text-center">
        {renderContent()}
      </div>
    </div>
  );
}
