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

interface LandingPageProps {
  onNavigate?: () => void; // Optional for backward compat
}

const LandingPage: React.FC<LandingPageProps> = () => {
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
        <Hero onStartLearning={handleNavigateToEducation} />
        <Features />
        <Courses />
        {/* Resources / Newsletter Section */}
        <section id="resources" className="py-24 relative scroll-mt-28">
          <div className="absolute inset-0 bg-brand-600/5"></div>
          <div className="container max-w-4xl mx-auto px-6 text-center relative z-10">
            <h2 className="text-3xl font-bold text-white mb-4">Recursos & Newsletter</h2>
            <p className="text-slate-400 mb-8">Recibe análisis de mercado, guías gratuitas y oportunidades directamente en tu bandeja de entrada.</p>
            <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto" onSubmit={handleNewsletterSubmit}>
              <input
                type="email"
                placeholder="tu@email.com"
                value={newsletterEmail}
                onChange={(e) => setNewsletterEmail(e.target.value)}
                disabled={newsletterStatus === 'loading'}
                className="flex-1 px-6 py-3 rounded-xl bg-slate-900 border border-slate-700 text-white focus:border-brand-500 focus:outline-none transition-colors disabled:opacity-50"
                required
              />
              <button
                type="submit"
                disabled={newsletterStatus === 'loading'}
                className="px-8 py-3 bg-brand-500 hover:bg-brand-400 text-slate-900 font-bold rounded-xl transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {newsletterStatus === 'loading' ? 'Enviando...' : 'Suscribirse'}
              </button>
            </form>

            {/* Status Messages */}
            {newsletterMessage && (
              <p className={`text-sm mt-4 font-medium ${
                newsletterStatus === 'success' ? 'text-green-400' : 'text-red-400'
              }`}>
                {newsletterMessage}
              </p>
            )}

            <p className="text-xs text-slate-500 mt-4">Únete a más de 500 estudiantes activos.</p>
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
