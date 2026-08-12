import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import Navbar from './Navbar';
import Hero from './Hero';
import Features from './Features';
import Courses from './Courses';
import ProblemSection from './ProblemSection';
import PricingSection from './PricingSection';
import Footer from './Footer';
import AuthModal from './AuthModal';
import MentoriaModal from './MentoriaModal';
import { useAuth } from '../contexts/AuthContext';
import type { CourseTier } from '../services/paymentService';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { Loader2 } from 'lucide-react';
import PlatformPreview from './landing/PlatformPreview';
import FaqSection from './landing/FaqSection';
import MentoriaSection from './landing/MentoriaSection';

const LandingPage: React.FC = () => {
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const [isMentoriaModalOpen, setIsMentoriaModalOpen] = useState(false);
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [newsletterStatus, setNewsletterStatus] = useState<
    'idle' | 'loading' | 'success' | 'error'
  >('idle');
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

    // Basic email validation
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
        // Check if it's a duplicate email error
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

        // Reset success message after 5 seconds
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
    <div>
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
        <PlatformPreview />
        <ProblemSection />
        <Courses />
        <Features />
        <MentoriaSection onRequestMentoria={() => setIsMentoriaModalOpen(true)} />

        {/* Public Pricing Section */}
        <section id="pricing" className="py-16 md:py-24 bg-navy-950 relative scroll-mt-28">
          <PricingSection variant="public" onPublicCta={handlePublicPlanCta} />
        </section>

        <FaqSection />

        <section
          id="resources"
          className="border-t border-white/5 bg-navy-900/50 py-16 scroll-mt-28 md:py-24"
        >
          <div className="container mx-auto max-w-4xl px-6 text-center">
            <h2 className="mb-4 text-3xl font-bold text-white">
              Análisis semanal. Sin recomendaciones pagadas.
            </h2>
            <p className="mb-8 text-navy-400">
              Lo que pasó esta semana en cripto, interpretado para LATAM. Mi lectura actual, los
              datos que importan y los riesgos que no conviene ignorar.
            </p>
            <form
              className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto"
              onSubmit={handleNewsletterSubmit}
            >
              <label htmlFor="newsletter-email" className="sr-only">
                Email para recibir el análisis semanal
              </label>
              <input
                id="newsletter-email"
                type="email"
                placeholder="tu@email.com"
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

            <p className="mt-5 text-sm text-navy-400">
              ¿Quieres conocer mi trabajo primero?{' '}
              <a
                href="https://twitter.com/Crypto_CBas"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-brand-400 underline underline-offset-4 hover:text-brand-300"
              >
                Revisa mi historial público en X
              </a>
              .
            </p>

            {/* Status Messages */}
            <div aria-live="polite" aria-atomic="true">
              {newsletterMessage && (
                <p
                  className={`text-sm mt-4 font-medium ${
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

      {/* Auth Modal for protected navigation — defaults to signup since landing CTAs are primarily for new visitors. */}
      <AuthModal
        isOpen={isAuthModalOpen}
        onClose={() => setIsAuthModalOpen(false)}
        onLoginSuccess={handleLoginSuccess}
        initialView="signup"
      />

      <MentoriaModal isOpen={isMentoriaModalOpen} onClose={() => setIsMentoriaModalOpen(false)} />
    </div>
  );
};

export default LandingPage;
