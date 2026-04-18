import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import Navbar from './Navbar';
import Hero from './Hero';
import Features from './Features';
import Courses from './Courses';
import Footer from './Footer';
import AuthModal from './AuthModal';
import { useAuth } from '../contexts/AuthContext';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ChevronDown, Loader2 } from 'lucide-react';

const LandingPage: React.FC = () => {
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [newsletterStatus, setNewsletterStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [newsletterMessage, setNewsletterMessage] = useState('');
  const { user } = useAuth();
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();

  // Check if redirected from protected route
  useEffect(() => {
    if (searchParams.get('showAuth') === 'true') {
      setIsAuthModalOpen(true);
      // Clean up the URL parameter
      searchParams.delete('showAuth');
      setSearchParams(searchParams, { replace: true });
    }
  }, [searchParams, setSearchParams]);

  const handleNavigateToEducation = () => {
    if (user) {
      navigate('/education');
    } else {
      setIsAuthModalOpen(true);
    }
  };

  const handleLoginSuccess = () => {
    // Check if there's a redirect URL stored
    const redirectPath = sessionStorage.getItem('redirectAfterLogin');
    if (redirectPath) {
      sessionStorage.removeItem('redirectAfterLogin');
      navigate(redirectPath);
    } else {
      navigate('/education');
    }
  };

  const handleNewsletterSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(newsletterEmail)) {
      setNewsletterStatus('error');
      setNewsletterMessage('Por favor ingresa un email válido');
      return;
    }

    setNewsletterStatus('loading');
    setNewsletterMessage('');

    try {
      const { supabase } = await import('../lib/supabase');
      const { error } = await supabase
        .from('newsletter_subscribers')
        .insert([{ email: newsletterEmail.toLowerCase().trim() }]);

      if (error) {
        // Check if it's a duplicate email error
        if (error.code === '23505') {
          setNewsletterStatus('error');
          setNewsletterMessage('Este email ya está suscrito');
        } else {
          throw error;
        }
      } else {
        setNewsletterStatus('success');
        setNewsletterMessage('¡Suscripción exitosa! Revisa tu email.');
        setNewsletterEmail('');

        // Reset success message after 5 seconds
        setTimeout(() => {
          setNewsletterStatus('idle');
          setNewsletterMessage('');
        }, 5000);
      }
    } catch {
      setNewsletterStatus('error');
      setNewsletterMessage('Error al suscribirse. Intenta de nuevo.');
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Helmet>
        <title>Hablemos Cripto — Aprende Bitcoin y Criptomonedas desde Cero</title>
        <meta name="description" content="Plataforma educativa de criptomonedas en español para Latinoamérica. Aprende Bitcoin, blockchain, DeFi y trading con cursos estructurados, quizzes y asistente IA." />
        <meta property="og:title" content="Hablemos Cripto — Aprende Bitcoin y Criptomonedas desde Cero" />
        <meta property="og:description" content="Plataforma educativa de criptomonedas en español para Latinoamérica. Aprende Bitcoin, blockchain, DeFi y trading con cursos estructurados." />
        <meta property="og:image" content="https://hablemoscripto.io/images/og-cover.png" />
        <meta property="og:url" content="https://hablemoscripto.io" />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="es_LA" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Hablemos Cripto — Aprende Bitcoin y Criptomonedas desde Cero" />
        <meta name="twitter:description" content="Plataforma educativa de criptomonedas en español para Latinoamérica." />
        <meta name="twitter:image" content="https://hablemoscripto.io/images/og-cover.png" />
        <link rel="canonical" href="https://hablemoscripto.io" />
      </Helmet>
      <Navbar />
      <main>
        <Hero onStartLearning={handleNavigateToEducation} />
        <Features />
        <Courses />
        {/* FAQ Section */}
        <section className="py-24 bg-navy-950 relative">
            <div className="container max-w-4xl mx-auto px-6">
                <div className="text-center mb-16">
                    <span className="text-brand-500 font-bold tracking-wider text-sm uppercase mb-2 block">Preguntas Frecuentes</span>
                    <h2 className="text-4xl md:text-5xl font-heading font-bold text-white">
                        Todo lo que necesitas saber
                    </h2>
                </div>
                <div className="space-y-4">
                    {[
                        { q: '¿Es gratis?', a: 'El Nivel Principiante con 19 lecciones es 100% gratuito. Los niveles Intermedio y Avanzado requieren completar el nivel anterior para desbloquearse.' },
                        { q: '¿Necesito experiencia previa en criptomonedas?', a: 'No. Empezamos desde cero, explicando qué es el dinero y por qué importa. No asumimos ningún conocimiento previo.' },
                        { q: '¿Cuánto tiempo toma completar un nivel?', a: 'El Nivel Principiante toma aproximadamente 8 horas. El Intermedio unas 8 horas y el Avanzado unas 11 horas. Puedes avanzar a tu propio ritmo.' },
                        { q: '¿Es seguro invertir en criptomonedas?', a: 'Las criptomonedas son activos de alto riesgo. Por eso enseñamos seguridad primero: cómo proteger tu wallet, evitar estafas, y gestionar el riesgo antes de invertir un solo peso.' },
                        { q: '¿Quién es CBas?', a: 'CBas tiene 7+ años navegando mercados de criptomonedas, incluyendo ciclos alcistas y bajistas completos. Creó Hablemos Cripto para dar a la comunidad LATAM las herramientas que él hubiera querido tener cuando empezó.' },
                    ].map((item, i) => (
                        <details key={i} className="group bg-navy-900 border border-white/5 hover:border-white/10 rounded-2xl overflow-hidden transition-colors">
                            <summary className="flex items-center justify-between gap-4 px-6 py-5 cursor-pointer text-white font-bold hover:text-brand-500 transition-colors list-none">
                                <span>{item.q}</span>
                                <ChevronDown size={20} className="shrink-0 text-navy-400 group-open:rotate-180 group-open:text-brand-500 transition-transform" />
                            </summary>
                            <div className="px-6 pb-5 pt-1 text-navy-300 leading-relaxed border-t border-white/5">
                                <p className="pt-4">{item.a}</p>
                            </div>
                        </details>
                    ))}
                </div>
            </div>
        </section>

        {/* Resources / Newsletter Section */}
        <section id="resources" className="py-24 relative scroll-mt-28">
          <div className="absolute inset-0 bg-brand-600/5"></div>
          <div className="container max-w-4xl mx-auto px-6 text-center relative z-10">
            <h2 className="text-3xl font-bold text-white mb-4">Recursos & Newsletter</h2>
            <p className="text-navy-400 mb-8">Recibe análisis de mercado, guías gratuitas y oportunidades directamente en tu bandeja de entrada.</p>
            <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto" onSubmit={handleNewsletterSubmit}>
              <input
                type="email"
                placeholder="tu@email.com"
                aria-label="Email para newsletter"
                value={newsletterEmail}
                onChange={(e) => setNewsletterEmail(e.target.value)}
                disabled={newsletterStatus === 'loading'}
                className="flex-1 px-6 py-3 rounded-xl bg-navy-900 border border-navy-700 text-white focus:border-brand-500 focus:outline-none transition-colors disabled:opacity-50"
                required
              />
              <button
                type="submit"
                disabled={newsletterStatus === 'loading'}
                aria-busy={newsletterStatus === 'loading'}
                className="px-8 py-3 bg-brand-500 hover:bg-brand-400 text-navy-900 font-bold rounded-xl transition-colors disabled:opacity-50 disabled:cursor-not-allowed inline-flex items-center justify-center gap-2"
              >
                {newsletterStatus === 'loading' ? (
                  <>
                    <Loader2 size={18} className="animate-spin" aria-hidden="true" />
                    Enviando...
                  </>
                ) : (
                  'Suscribirse'
                )}
              </button>
            </form>

            {/* Status Messages */}
            <div aria-live="polite" aria-atomic="true">
              {newsletterMessage && (
                <p className={`text-sm mt-4 font-medium ${
                  newsletterStatus === 'success' ? 'text-green-400' : 'text-red-400'
                }`}>
                  {newsletterMessage}
                </p>
              )}
            </div>

            <p className="text-xs text-navy-500 mt-4">Únete a más de 500 estudiantes activos.</p>
          </div>
        </section>
      </main>
      <Footer onNavigateEducation={handleNavigateToEducation} />

      {/* Auth Modal for protected navigation */}
      <AuthModal
        isOpen={isAuthModalOpen}
        onClose={() => setIsAuthModalOpen(false)}
        onLoginSuccess={handleLoginSuccess}
      />
    </motion.div>
  );
};

export default LandingPage;
