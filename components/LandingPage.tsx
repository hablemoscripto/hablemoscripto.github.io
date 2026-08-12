import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import Navbar from './Navbar';
import Hero from './Hero';
import Features from './Features';
import ProblemSection from './ProblemSection';
import PricingSection from './PricingSection';
import Footer from './Footer';
import AuthModal from './AuthModal';
import { useAuth } from '../contexts/AuthContext';
import type { CourseTier } from '../services/paymentService';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Loader2 } from 'lucide-react';
import PlatformPreview from './landing/PlatformPreview';
import FaqSection from './landing/FaqSection';

const LandingPage: React.FC = () => {
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [newsletterStatus, setNewsletterStatus] = useState<'idle' | 'loading' | 'success' | 'error'>(
    'idle'
  );
  const [newsletterMessage, setNewsletterMessage] = useState('');
  const { user } = useAuth();
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    if (searchParams.get('showAuth') === 'true') {
      setIsAuthModalOpen(true);
      searchParams.delete('showAuth');
      setSearchParams(searchParams, { replace: true });
    }
  }, [searchParams, setSearchParams]);

  // Consume post-auth redirect intent once the user becomes available. This is
  // the ONLY path that works for Google OAuth: signInWithGoogle does a full-page
  // redirect, so the in-component onLoginSuccess callback is gone by the time we
  // return — but sessionStorage survives. Guarded on a stored target so a
  // logged-in visitor deliberately viewing the landing page is never bounced.
  useEffect(() => {
    if (!user) return;
    const redirectPath = sessionStorage.getItem('redirectAfterLogin');
    if (redirectPath) {
      sessionStorage.removeItem('redirectAfterLogin');
      navigate(redirectPath);
    }
  }, [user, navigate]);

  const handleNavigateToEducation = () => {
    if (user) {
      navigate('/education');
    } else {
      sessionStorage.setItem('redirectAfterLogin', '/education');
      setIsAuthModalOpen(true);
    }
  };

  // Public pricing CTA: carry the chosen plan through signup so the buyer lands
  // back on that exact plan's payment modal (EducationPage reads ?upgrade=).
  const handlePublicPlanCta = (tier: CourseTier) => {
    const target = tier === 'free' ? '/education' : `/education?upgrade=${tier}`;
    if (user) {
      navigate(target);
    } else {
      sessionStorage.setItem('redirectAfterLogin', target);
      setIsAuthModalOpen(true);
    }
  };

  const handleLoginSuccess = () => {
    // Synchronous path for email/password login (fires before the user-state
    // effect, so it wins the race and the effect then no-ops). OAuth never
    // reaches here — the effect above handles it.
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

    const email = newsletterEmail.trim().toLowerCase();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setNewsletterStatus('error');
      setNewsletterMessage('Por favor ingresa un email válido');
      return;
    }

    setNewsletterStatus('loading');
    setNewsletterMessage('');

    try {
      const { supabase } = await import('../lib/supabase');
      const { error } = await supabase.from('newsletter_subscribers').insert([{ email }]);

      if (error) {
        if (error.code === '23505') {
          setNewsletterStatus('success');
          setNewsletterMessage('Este email ya recibe el análisis semanal.');
        } else {
          throw error;
        }
      } else {
        setNewsletterStatus('success');
        setNewsletterMessage('¡Listo! Quedaste suscrito. Tu próximo análisis te llegará pronto.');
        setNewsletterEmail('');

        setTimeout(() => {
          setNewsletterStatus('idle');
          setNewsletterMessage('');
        }, 5000);
      }
    } catch {
      setNewsletterStatus('error');
      setNewsletterMessage('No pudimos completar la suscripción. Intenta de nuevo.');
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
        <title>Hablemos Cripto: Aprende Cripto con Criterio desde Cero</title>
        <meta
          name="description"
          content="Educación cripto en español para Latinoamérica. Aprende Bitcoin, wallets, seguridad, análisis de mercado y DeFi con una ruta estructurada."
        />
        <meta
          property="og:title"
          content="Hablemos Cripto: Aprende Cripto con Criterio desde Cero"
        />
        <meta
          property="og:description"
          content="Una ruta estructurada para entender Bitcoin, wallets, seguridad, análisis de mercado y DeFi antes de arriesgar tu dinero."
        />
        <meta property="og:url" content="https://hablemoscripto.io" />
        <meta
          name="twitter:title"
          content="Hablemos Cripto: Aprende Cripto con Criterio desde Cero"
        />
        <meta
          name="twitter:description"
          content="Educación cripto para LATAM, con seguridad y gestión de riesgo primero."
        />
        <link rel="canonical" href="https://hablemoscripto.io" />
      </Helmet>
      <Navbar />
      <main id="contenido" tabIndex={-1} className="outline-none">
        <Hero onStartLearning={handleNavigateToEducation} />
        <ProblemSection />
        <PlatformPreview />
        <Features />

        <section id="pricing" className="relative scroll-mt-28 bg-navy-950 py-16 md:py-24">
          <PricingSection variant="public" onPublicCta={handlePublicPlanCta} />
        </section>

        <FaqSection />

        <section id="resources" className="relative scroll-mt-28 py-16 md:py-24">
          <div className="container relative z-10 mx-auto max-w-4xl px-6 text-center">
            <p className="mb-4 text-sm font-bold text-brand-400">Análisis semanal</p>
            <h2 className="mb-4 font-heading text-3xl font-bold text-white md:text-4xl">
              Sin recomendaciones pagadas
            </h2>
            <p className="mb-8 text-navy-400">
              Lo que pasó esta semana en cripto, interpretado para LATAM. Mi tesis actual, las
              señales que estoy mirando y lo que estoy ignorando.
            </p>
            <form
              className="mx-auto flex max-w-md flex-col gap-4 sm:flex-row"
              onSubmit={handleNewsletterSubmit}
            >
              <input
                type="email"
                placeholder="tu@email.com"
                aria-label="Email para newsletter"
                value={newsletterEmail}
                onChange={(e) => setNewsletterEmail(e.target.value)}
                disabled={newsletterStatus === 'loading'}
                className="flex-1 rounded-xl border border-navy-700 bg-navy-900 px-6 py-3 text-white transition-colors focus:border-brand-500 focus:outline-none disabled:opacity-50"
                required
              />
              <button
                type="submit"
                disabled={newsletterStatus === 'loading'}
                aria-busy={newsletterStatus === 'loading'}
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-brand-500 px-8 py-3 font-bold text-navy-900 transition-colors hover:bg-brand-400 disabled:cursor-not-allowed disabled:opacity-50"
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

            <div aria-live="polite" aria-atomic="true">
              {newsletterMessage && (
                <p
                  className={`mt-4 text-sm font-medium ${
                    newsletterStatus === 'success' ? 'text-green-400' : 'text-red-400'
                  }`}
                >
                  {newsletterMessage}
                </p>
              )}
            </div>

            <p className="mt-4 text-xs text-navy-400">Sin spam. Cancela cuando quieras.</p>
          </div>
        </section>
      </main>
      <Footer onNavigateEducation={handleNavigateToEducation} />

      <AuthModal
        isOpen={isAuthModalOpen}
        onClose={() => setIsAuthModalOpen(false)}
        onLoginSuccess={handleLoginSuccess}
        initialView="signup"
      />
    </motion.div>
  );
};

export default LandingPage;
