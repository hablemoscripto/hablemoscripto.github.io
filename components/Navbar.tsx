import React, { useState, useEffect } from 'react';
import { Menu, X, Bitcoin, ExternalLink, User, LogOut } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';
import AuthModal from './AuthModal';
import { Link, useLocation, useNavigate } from 'react-router-dom';

interface NavbarProps {
  onNavigateEducation?: () => void; // Optional now, kept for backward compat if needed
}

const Navbar: React.FC<NavbarProps> = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const { user, signOut } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleScrollToSection = (sectionId: string) => {
    setIsMobileMenuOpen(false);
    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) element.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      const element = document.getElementById(sectionId);
      if (element) element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const navLinks = [
    { name: 'Inicio', action: () => handleScrollToSection('home') },
    { name: 'Por Qué HC', action: () => handleScrollToSection('about') }, // Assuming 'about' section exists or will exist
    { name: 'Cursos', path: '/education' },
    { name: 'Recursos', action: () => handleScrollToSection('resources') },
  ];

  return (
    <>
      <nav
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${isScrolled || isMobileMenuOpen
          ? 'bg-navy-950/80 backdrop-blur-xl border-b border-white/5 shadow-glass py-3'
          : 'bg-transparent py-6'
          }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="group flex items-center gap-3 z-50">
            <div className="relative">
              <div className="absolute inset-0 bg-brand-500 blur-lg opacity-20 group-hover:opacity-40 transition-opacity"></div>
              <div className="relative bg-gradient-to-br from-brand-400 to-brand-600 p-2.5 rounded-xl shadow-glow-brand group-hover:rotate-6 transition-transform duration-500">
                <Bitcoin className="text-navy-950 h-6 w-6" />
              </div>
            </div>
            <div className="flex flex-col leading-tight">
              <span className="text-xl font-heading font-extrabold text-white tracking-tighter">
                Hablemos<span className="text-brand-500">Cripto</span>
              </span>
            </div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-10">
            <ul className="flex gap-10">
              {navLinks.map((link) => (
                <li key={link.name}>
                  {link.path ? (
                    <Link
                      to={link.path}
                      className="text-[13px] font-bold uppercase tracking-widest text-navy-300 hover:text-white transition-colors relative group"
                    >
                      {link.name}
                      <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-0 h-1 bg-brand-500 transition-all group-hover:w-full opacity-0 group-hover:opacity-100 rounded-full"></span>
                    </Link>
                  ) : (
                    <button
                      onClick={link.action}
                      className="text-[13px] font-bold uppercase tracking-widest text-navy-300 hover:text-white transition-colors relative group"
                    >
                      {link.name}
                      <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-0 h-1 bg-brand-500 transition-all group-hover:w-full opacity-0 group-hover:opacity-100 rounded-full"></span>
                    </button>
                  )}
                </li>
              ))}
            </ul>

            <div className="h-6 w-px bg-white/10 mx-2"></div>

            {/* Auth Button */}
            {user ? (
              <div className="flex items-center gap-4">
                <div className="hidden lg:flex flex-col items-end leading-none">
                   <span className="text-[10px] uppercase tracking-tighter text-navy-400 font-bold">Estudiante</span>
                   <span className="text-sm text-navy-100 font-medium">
                    {user.email?.split('@')[0]}
                  </span>
                </div>
                <button
                  onClick={() => signOut()}
                  className="p-2.5 bg-navy-800 hover:bg-navy-700 text-white rounded-xl transition-all border border-white/5 hover:border-white/10"
                  title="Cerrar Sesión"
                >
                  <LogOut size={18} />
                </button>
              </div>
            ) : (
              <button
                onClick={() => setIsAuthModalOpen(true)}
                className="group relative px-6 py-2.5 bg-white text-navy-950 rounded-xl font-bold text-sm transition-all hover:scale-[1.02] active:scale-[0.98] overflow-hidden"
              >
                <div className="absolute inset-0 bg-brand-500 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
                <span className="relative z-10 flex items-center gap-2 group-hover:text-white transition-colors">
                  <User size={16} />
                  Ingresar
                </span>
              </button>
            )}
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-slate-300 hover:text-white z-50"
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <>
          {/* Dark overlay background */}
          <div
            className="fixed inset-0 bg-black md:hidden"
            style={{ zIndex: 99998 }}
            onClick={() => setIsMobileMenuOpen(false)}
          />

          {/* Menu panel */}
          <div
            className="fixed inset-0 md:hidden overflow-y-auto"
            style={{
              zIndex: 99999,
              backgroundColor: '#020617'
            }}
          >
            {/* Header with logo and close */}
            <div className="flex items-center justify-between px-6 py-6 border-b border-white/5">
              <Link
                to="/"
                className="flex items-center gap-3"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <div className="bg-gradient-to-br from-brand-400 to-brand-600 p-2 rounded-lg">
                  <Bitcoin className="text-navy-950 h-5 w-5" />
                </div>
                <span className="text-lg font-heading font-extrabold text-white tracking-tighter">
                  Hablemos<span className="text-brand-500">Cripto</span>
                </span>
              </Link>
              <button
                onClick={() => setIsMobileMenuOpen(false)}
                className="p-2.5 bg-navy-900 text-navy-400 hover:text-white rounded-xl border border-white/5"
              >
                <X size={20} />
              </button>
            </div>

            {/* Navigation links */}
            <nav className="px-6 py-10">
              <ul className="space-y-4">
                {navLinks.map((link) => (
                  <li key={link.name}>
                    {link.path ? (
                      <Link
                        to={link.path}
                        onClick={() => setIsMobileMenuOpen(false)}
                        className="block py-4 px-6 text-sm font-bold uppercase tracking-[0.2em] text-navy-300 hover:text-white hover:bg-navy-900 rounded-2xl border border-transparent hover:border-white/5 transition-all"
                      >
                        {link.name}
                      </Link>
                    ) : (
                      <button
                        onClick={link.action}
                        className="block w-full text-left py-4 px-6 text-sm font-bold uppercase tracking-[0.2em] text-navy-300 hover:text-white hover:bg-navy-900 rounded-2xl border border-transparent hover:border-white/5 transition-all"
                      >
                        {link.name}
                      </button>
                    )}
                  </li>
                ))}
              </ul>

              {/* Action buttons */}
              <div className="mt-12 space-y-4">
                {user ? (
                  <button
                    onClick={() => {
                      signOut();
                      setIsMobileMenuOpen(false);
                    }}
                    className="flex items-center justify-center gap-3 w-full bg-navy-900 hover:bg-red-500/10 text-white hover:text-red-500 font-bold py-4 px-6 rounded-2xl border border-white/5 transition-all"
                  >
                    <LogOut size={18} />
                    Cerrar Sesión ({user.email?.split('@')[0]})
                  </button>
                ) : (
                  <button
                    onClick={() => {
                      setIsAuthModalOpen(true);
                      setIsMobileMenuOpen(false);
                    }}
                    className="flex items-center justify-center gap-3 w-full bg-white text-navy-950 font-bold py-4 px-6 rounded-2xl transition-all shadow-glow-brand"
                  >
                    <User size={18} />
                    Iniciar Sesión
                  </button>
                )}
                
                <a
                  href="https://discord.gg/W8haa7dDV3"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="flex items-center justify-center gap-3 w-full bg-[#5865F2] hover:bg-[#4752C4] text-white font-bold py-4 px-6 rounded-2xl transition-all"
                >
                  <ExternalLink size={18} />
                  Comunidad Discord
                </a>
              </div>
            </nav>
          </div>
        </>
      )}

      {/* Auth Modal */}
      <AuthModal
        isOpen={isAuthModalOpen}
        onClose={() => setIsAuthModalOpen(false)}
        onLoginSuccess={() => {
          // Check if there's a redirect URL stored
          const redirectPath = sessionStorage.getItem('redirectAfterLogin');
          if (redirectPath) {
            sessionStorage.removeItem('redirectAfterLogin');
            navigate(redirectPath);
          }
          setIsAuthModalOpen(false);
        }}
      />
    </>
  );
};

export default Navbar;
