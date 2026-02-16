import React, { useState, useEffect } from 'react';
import Navbar from './Navbar';
import Hero from './Hero';
import Features from './Features';
import Courses from './Courses';
import Footer from './Footer';
import AuthModal from './AuthModal';
import { useAuth } from '../contexts/AuthContext';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Award, Twitter, Youtube, ExternalLink, Mail } from 'lucide-react';

interface LandingPageProps {
  onNavigate?: () => void;
}

const LandingPage: React.FC<LandingPageProps> = () => {
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [newsletterStatus, setNewsletterStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
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

  const handleNavigateToEducation = () => {
    if (user) {
      navigate('/education');
    } else {
      setIsAuthModalOpen(true);
    }
  };

  const handleLoginSuccess = () => {
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

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(newsletterEmail)) {
      setNewsletterStatus('error');
      setNewsletterMessage('Por favor ingresa un email valido');
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
        if (error.code === '23505') {
          setNewsletterStatus('error');
          setNewsletterMessage('Este email ya esta suscrito');
        } else {
          throw error;
        }
      } else {
        setNewsletterStatus('success');
        setNewsletterMessage('Suscripcion exitosa! Revisa tu email.');
        setNewsletterEmail('');

        setTimeout(() => {
          setNewsletterStatus('idle');
          setNewsletterMessage('');
        }, 5000);
      }
    } catch (error) {
      console.error('Newsletter subscription error:', error);
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
      <Navbar />
      <main>
        {/* 1. Hero */}
        <Hero onStartLearning={handleNavigateToEducation} />

        {/* 2. Social Proof Bar */}
        <div className="bg-surface-2 border-y border-surface-border py-6">
          <div className="container max-w-7xl mx-auto px-6 flex flex-wrap items-center justify-center gap-6 md:gap-12 text-sm text-slate-400">
            <span>500+ estudiantes en Colombia, Mexico y Argentina</span>
            <span className="hidden md:inline text-surface-border-hover">|</span>
            <span>7+ anos de experiencia en cripto</span>
            <span className="hidden md:inline text-surface-border-hover">|</span>
            <span>42 lecciones completas</span>
          </div>
        </div>

        {/* 3. Learning Path */}
        <Courses />

        {/* 4. Features / Why Us */}
        <Features />

        {/* 5. Founder Story */}
        <section className="py-28 lg:py-32 bg-surface-1 scroll-mt-28">
          <div className="container max-w-6xl mx-auto px-6">
            <div className="flex flex-col md:flex-row items-center gap-12 lg:gap-16">
              {/* Photo */}
              <div className="shrink-0">
                <div className="w-48 h-48 md:w-56 md:h-56 rounded-full overflow-hidden border-2 border-surface-border">
                  <img
                    src="/images/MadLad.jpg"
                    alt="CBas - Fundador"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Story */}
              <div>
                <span className="text-brand-500 font-bold tracking-wider text-sm uppercase mb-3 block">La Mision</span>
                <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-4">
                  Hola, soy CBas
                </h2>
                <p className="text-slate-400 leading-relaxed mb-4">
                  Llevo mas de 7 anos navegando el ecosistema cripto — ciclos alcistas, bajistas, DeFi summers y bear markets.
                  Cree Hablemos Cripto porque la mayoria de la informacion en espanol es ruido, estafas o demasiado tecnica.
                </p>
                <p className="text-slate-400 leading-relaxed mb-6">
                  Mi objetivo es simple: darte la educacion que me hubiera gustado tener cuando empece. Sin promesas falsas,
                  con estrategias probadas y una comunidad real.
                </p>
                <div className="flex items-center gap-2 text-sm text-slate-500">
                  <Award size={16} className="text-brand-500" />
                  <span>Por CBas — 7+ anos en el ecosistema cripto</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 6. Community / Newsletter */}
        <section id="resources" className="py-28 lg:py-32 relative scroll-mt-28">
          <div className="container max-w-4xl mx-auto px-6 text-center relative z-10">
            <span className="text-brand-500 font-bold tracking-wider text-sm uppercase mb-3 block">Mantente Actualizado</span>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-4">Unete a la comunidad</h2>
            <p className="text-slate-400 mb-8 max-w-xl mx-auto">
              Recibe analisis de mercado, guias gratuitas y oportunidades directamente en tu bandeja de entrada.
            </p>

            <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto mb-6" onSubmit={handleNewsletterSubmit}>
              <input
                type="email"
                placeholder="tu@email.com"
                value={newsletterEmail}
                onChange={(e) => setNewsletterEmail(e.target.value)}
                disabled={newsletterStatus === 'loading'}
                className="flex-1 px-5 py-3 rounded-xl bg-surface-2 border border-surface-border text-white placeholder-slate-500 focus:border-brand-500 focus:outline-none transition-colors disabled:opacity-50"
                required
              />
              <button
                type="submit"
                disabled={newsletterStatus === 'loading'}
                className="px-6 py-3 bg-brand-500 hover:bg-brand-400 text-white font-bold rounded-xl transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {newsletterStatus === 'loading' ? 'Enviando...' : 'Suscribirse'}
              </button>
            </form>

            {newsletterMessage && (
              <p className={`text-sm font-medium ${
                newsletterStatus === 'success' ? 'text-brand-400' : 'text-red-400'
              }`}>
                {newsletterMessage}
              </p>
            )}

            {/* Social Links */}
            <div className="flex items-center justify-center gap-4 mt-8">
              <a
                href="https://discord.gg/W8haa7dDV3"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-5 py-2.5 bg-indigo-600 hover:bg-indigo-500 text-white font-medium text-sm rounded-lg transition-colors"
              >
                <ExternalLink size={16} /> Discord
              </a>
              <a href="https://twitter.com/Crypto_CBas" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-lg bg-surface-2 flex items-center justify-center text-slate-400 hover:bg-surface-3 hover:text-white transition-all">
                <Twitter size={18} />
              </a>
              <a href="https://www.youtube.com/@hablemoscripto" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-lg bg-surface-2 flex items-center justify-center text-slate-400 hover:bg-surface-3 hover:text-white transition-all">
                <Youtube size={18} />
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer onNavigateEducation={handleNavigateToEducation} />

      <AuthModal
        isOpen={isAuthModalOpen}
        onClose={() => setIsAuthModalOpen(false)}
        onLoginSuccess={handleLoginSuccess}
      />
    </motion.div>
  );
};

export default LandingPage;
