
import React, { useState } from 'react';
import Navbar from './Navbar';
import Hero from './Hero';
import Features from './Features';
import Courses from './Courses';
import Footer from './Footer';
import AuthModal from './AuthModal';
import { useAuth } from '../contexts/AuthContext';

interface LandingPageProps {
  onNavigate: () => void;
}

const LandingPage: React.FC<LandingPageProps> = ({ onNavigate }) => {
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const { user } = useAuth();

  const handleNavigateToEducation = () => {
    if (user) {
      onNavigate();
    } else {
      setIsAuthModalOpen(true);
    }
  };

  return (
    <>
      <Navbar onNavigateEducation={handleNavigateToEducation} />
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
             <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto" onSubmit={(e) => e.preventDefault()}>
               <input 
                 type="email" 
                 placeholder="tu@email.com" 
                 className="flex-1 px-6 py-3 rounded-xl bg-slate-900 border border-slate-700 text-white focus:border-brand-500 focus:outline-none transition-colors"
               />
               <button className="px-8 py-3 bg-brand-500 hover:bg-brand-400 text-slate-900 font-bold rounded-xl transition-colors">
                 Suscribirse
               </button>
             </form>
             <p className="text-xs text-slate-500 mt-4">Únete a más de 500 estudiantes activos.</p>
          </div>
        </section>
      </main>
      <Footer onNavigateEducation={handleNavigateToEducation} />

      {/* Auth Modal for protected navigation */}
      <AuthModal
        isOpen={isAuthModalOpen}
        onClose={() => setIsAuthModalOpen(false)}
        onLoginSuccess={onNavigate}
      />
    </>
  );
};

export default LandingPage;
