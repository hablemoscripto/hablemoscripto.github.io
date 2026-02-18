import React, { useState } from 'react';
import { X, Mail, Lock, User, Loader2, ArrowLeft } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
  onLoginSuccess?: () => void;
}

type ModalView = 'login' | 'signup' | 'forgot-password' | 'verify-email';

export default function AuthModal({ isOpen, onClose, onLoginSuccess }: AuthModalProps) {
  const [view, setView] = useState<ModalView>('login');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [loading, setLoading] = useState(false);

  const { signIn, signUp, signInWithGoogle, resetPassword, resendVerification } = useAuth();

  const handleGoogleSignIn = async () => {
    setError('');
    setLoading(true);
    const { error } = await signInWithGoogle();
    if (error) {
      setError('Error al iniciar sesion con Google');
      setLoading(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setSuccess('');
    setLoading(true);

    if (view === 'signup' && password !== confirmPassword) {
      setError('Las contrasenas no coinciden');
      setLoading(false);
      return;
    }

    if ((view === 'login' || view === 'signup') && password.length < 6) {
      setError('La contrasena debe tener al menos 6 caracteres');
      setLoading(false);
      return;
    }

    try {
      if (view === 'login') {
        const { error } = await signIn(email, password);
        if (error) {
          if (error.message.includes('Invalid login credentials')) {
            setError('Email o contrasena incorrectos');
          } else if (error.message.includes('Email not confirmed')) {
            setView('verify-email');
          } else {
            setError(error.message);
          }
        } else {
          onClose();
          if (onLoginSuccess) {
            onLoginSuccess();
          }
        }
      } else if (view === 'signup') {
        const { error } = await signUp(email, password);
        if (error) {
          if (error.message.includes('already registered')) {
            setError('Este email ya esta registrado');
          } else {
            setError(error.message);
          }
        } else {
          setView('verify-email');
        }
      }
    } catch (err) {
      setError('Ocurrio un error. Intenta de nuevo.');
    } finally {
      setLoading(false);
    }
  };

  const handleForgotPassword = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setSuccess('');
    setLoading(true);

    if (!email) {
      setError('Ingresa tu email');
      setLoading(false);
      return;
    }

    try {
      const { error } = await resetPassword(email);
      if (error) {
        setError(error.message);
      } else {
        setSuccess('Te enviamos un enlace para restablecer tu contrasena. Revisa tu email (y la carpeta de spam).');
      }
    } catch (err) {
      setError('Ocurrio un error. Intenta de nuevo.');
    } finally {
      setLoading(false);
    }
  };

  const handleResendVerification = async () => {
    setError('');
    setSuccess('');
    setLoading(true);

    try {
      const { error } = await resendVerification(email);
      if (error) {
        setError(error.message);
      } else {
        setSuccess('Email de verificacion reenviado. Revisa tu bandeja de entrada.');
      }
    } catch (err) {
      setError('Ocurrio un error. Intenta de nuevo.');
    } finally {
      setLoading(false);
    }
  };

  const resetForm = () => {
    setPassword('');
    setConfirmPassword('');
    setError('');
    setSuccess('');
  };

  const switchTo = (newView: ModalView) => {
    resetForm();
    setView(newView);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/70 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="relative bg-slate-900 border border-slate-700 rounded-2xl p-8 w-full max-w-md mx-4 shadow-2xl">
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-slate-400 hover:text-white transition-colors"
        >
          <X size={24} />
        </button>

        {/* Verify Email View */}
        {view === 'verify-email' && (
          <>
            <div className="text-center mb-8">
              <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Mail size={32} className="text-white" />
              </div>
              <h2 className="text-2xl font-bold text-white">Verifica tu email</h2>
              <p className="text-slate-400 mt-2">
                Te enviamos un enlace de verificacion a <span className="text-white font-medium">{email}</span>
              </p>
            </div>

            <div className="space-y-4">
              <div className="bg-slate-800 border border-slate-600 rounded-lg p-4 text-slate-300 text-sm space-y-2">
                <p>1. Revisa tu bandeja de entrada (y spam)</p>
                <p>2. Haz clic en el enlace de verificacion</p>
                <p>3. Vuelve aqui e inicia sesion</p>
              </div>

              {error && (
                <div className="bg-red-500/10 border border-red-500/50 rounded-lg p-3 text-red-400 text-sm">
                  {error}
                </div>
              )}

              {success && (
                <div className="bg-green-500/10 border border-green-500/50 rounded-lg p-3 text-green-400 text-sm">
                  {success}
                </div>
              )}

              <button
                onClick={handleResendVerification}
                disabled={loading}
                className="w-full bg-slate-800 hover:bg-slate-700 text-white font-semibold py-3 rounded-lg border border-slate-600 transition-all flex items-center justify-center gap-2 disabled:opacity-50"
              >
                {loading ? <Loader2 size={20} className="animate-spin" /> : <Mail size={20} />}
                Reenviar email de verificacion
              </button>

              <button
                onClick={() => switchTo('login')}
                className="w-full text-orange-400 hover:text-orange-300 font-medium transition-colors flex items-center justify-center gap-2"
              >
                <ArrowLeft size={16} />
                Volver a iniciar sesion
              </button>
            </div>
          </>
        )}

        {/* Forgot Password View */}
        {view === 'forgot-password' && (
          <>
            <div className="text-center mb-8">
              <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-amber-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Lock size={32} className="text-white" />
              </div>
              <h2 className="text-2xl font-bold text-white">Restablecer contrasena</h2>
              <p className="text-slate-400 mt-2">
                Te enviaremos un enlace para crear una nueva contrasena
              </p>
            </div>

            <form onSubmit={handleForgotPassword} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-slate-300 mb-2">Email</label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={20} />
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="tu@email.com"
                    required
                    className="w-full bg-slate-800 border border-slate-600 rounded-lg py-3 pl-10 pr-4 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all"
                  />
                </div>
              </div>

              {error && (
                <div className="bg-red-500/10 border border-red-500/50 rounded-lg p-3 text-red-400 text-sm">
                  {error}
                </div>
              )}

              {success && (
                <div className="bg-green-500/10 border border-green-500/50 rounded-lg p-3 text-green-400 text-sm">
                  {success}
                </div>
              )}

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white font-semibold py-3 rounded-lg transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {loading ? (
                  <><Loader2 size={20} className="animate-spin" /> Enviando...</>
                ) : (
                  'Enviar enlace de restablecimiento'
                )}
              </button>
            </form>

            <div className="mt-6 text-center">
              <button
                onClick={() => switchTo('login')}
                className="text-orange-400 hover:text-orange-300 font-medium transition-colors flex items-center justify-center gap-2 mx-auto"
              >
                <ArrowLeft size={16} />
                Volver a iniciar sesion
              </button>
            </div>
          </>
        )}

        {/* Login / Signup View */}
        {(view === 'login' || view === 'signup') && (
          <>
            <div className="text-center mb-8">
              <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-amber-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <User size={32} className="text-white" />
              </div>
              <h2 className="text-2xl font-bold text-white">
                {view === 'login' ? 'Iniciar Sesion' : 'Crear Cuenta'}
              </h2>
              <p className="text-slate-400 mt-2">
                {view === 'login'
                  ? 'Accede a tu cuenta para continuar'
                  : 'Registrate para guardar tu progreso'
                }
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-slate-300 mb-2">Email</label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={20} />
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="tu@email.com"
                    required
                    className="w-full bg-slate-800 border border-slate-600 rounded-lg py-3 pl-10 pr-4 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-300 mb-2">Contrasena</label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={20} />
                  <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="••••••••"
                    required
                    className="w-full bg-slate-800 border border-slate-600 rounded-lg py-3 pl-10 pr-4 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all"
                  />
                </div>
              </div>

              {view === 'signup' && (
                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-2">Confirmar Contrasena</label>
                  <div className="relative">
                    <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={20} />
                    <input
                      type="password"
                      value={confirmPassword}
                      onChange={(e) => setConfirmPassword(e.target.value)}
                      placeholder="••••••••"
                      required
                      className="w-full bg-slate-800 border border-slate-600 rounded-lg py-3 pl-10 pr-4 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all"
                    />
                  </div>
                </div>
              )}

              {view === 'login' && (
                <div className="text-right">
                  <button
                    type="button"
                    onClick={() => switchTo('forgot-password')}
                    className="text-sm text-slate-400 hover:text-orange-400 transition-colors"
                  >
                    Olvidaste tu contrasena?
                  </button>
                </div>
              )}

              {error && (
                <div className="bg-red-500/10 border border-red-500/50 rounded-lg p-3 text-red-400 text-sm">
                  {error}
                </div>
              )}

              {success && (
                <div className="bg-green-500/10 border border-green-500/50 rounded-lg p-3 text-green-400 text-sm">
                  {success}
                </div>
              )}

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white font-semibold py-3 rounded-lg transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {loading ? (
                  <><Loader2 size={20} className="animate-spin" /> Procesando...</>
                ) : (
                  view === 'login' ? 'Iniciar Sesion' : 'Crear Cuenta'
                )}
              </button>
            </form>

            <div className="flex items-center gap-4 my-6">
              <div className="flex-1 h-px bg-slate-700"></div>
              <span className="text-slate-500 text-sm">o</span>
              <div className="flex-1 h-px bg-slate-700"></div>
            </div>

            <button
              onClick={handleGoogleSignIn}
              disabled={loading}
              className="w-full bg-white hover:bg-gray-100 text-gray-800 font-semibold py-3 rounded-lg transition-all duration-300 flex items-center justify-center gap-3 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24">
                <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
                <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
              </svg>
              Continuar con Google
            </button>

            <div className="mt-6 text-center">
              <p className="text-slate-400">
                {view === 'login' ? 'No tienes cuenta?' : 'Ya tienes cuenta?'}
                <button
                  onClick={() => switchTo(view === 'login' ? 'signup' : 'login')}
                  className="ml-2 text-orange-400 hover:text-orange-300 font-medium transition-colors"
                >
                  {view === 'login' ? 'Registrate' : 'Inicia Sesion'}
                </button>
              </p>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
