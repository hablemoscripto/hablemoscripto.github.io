import React, { useState, useEffect } from 'react';
import { Menu, X, ExternalLink, User, LogOut } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';
import AuthModal from './AuthModal';
import { Link, useLocation, useNavigate } from 'react-router-dom';

interface NavbarProps {
  onNavigateEducation?: () => void;
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
    { name: 'Por Que HC', action: () => handleScrollToSection('about') },
    { name: 'Cursos', path: '/education' },
    { name: 'Recursos', action: () => handleScrollToSection('resources') },
  ];

  return (
    <>
      <nav
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled || isMobileMenuOpen
          ? 'bg-surface-base/90 backdrop-blur-md border-b border-surface-border shadow-lg py-3'
          : 'bg-transparent py-5'
          }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="group flex items-center gap-2.5 z-50">
            <div className="w-9 h-9 rounded-lg bg-brand-500 flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
              <span className="text-white font-heading font-extrabold text-sm">HC</span>
            </div>
            <span className="text-xl font-heading font-bold text-white tracking-tight">
              Hablemos<span className="text-brand-500">Cripto</span>
            </span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            <ul className="flex gap-8">
              {navLinks.map((link) => (
                <li key={link.name}>
                  {link.path ? (
                    <Link
                      to={link.path}
                      className="text-sm font-medium text-slate-400 hover:text-white transition-colors relative group"
                    >
                      {link.name}
                      <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-brand-500 transition-all group-hover:w-full"></span>
                    </Link>
                  ) : (
                    <button
                      onClick={link.action}
                      className="text-sm font-medium text-slate-400 hover:text-white transition-colors relative group"
                    >
                      {link.name}
                      <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-brand-500 transition-all group-hover:w-full"></span>
                    </button>
                  )}
                </li>
              ))}
            </ul>

            <a
              href="https://discord.gg/W8haa7dDV3"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-indigo-600 hover:bg-indigo-500 text-white px-5 py-2 rounded-full font-medium text-sm transition-all"
            >
              <ExternalLink size={16} />
              Discord
            </a>

            {/* Auth Button */}
            {user ? (
              <div className="flex items-center gap-3">
                <span className="text-sm text-slate-400 hidden lg:block">
                  {user.email?.split('@')[0]}
                </span>
                <button
                  onClick={() => signOut()}
                  className="flex items-center gap-2 bg-surface-3 hover:bg-surface-border-hover text-white px-4 py-2 rounded-full font-medium text-sm transition-all"
                >
                  <LogOut size={16} />
                  Salir
                </button>
              </div>
            ) : (
              <button
                onClick={() => setIsAuthModalOpen(true)}
                className="flex items-center gap-2 bg-brand-500 hover:bg-brand-400 text-white px-5 py-2 rounded-full font-medium text-sm transition-all"
              >
                <User size={16} />
                Iniciar Sesion
              </button>
            )}
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-slate-400 hover:text-white z-50"
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <>
          <div
            className="fixed inset-0 bg-black md:hidden"
            style={{ zIndex: 99998 }}
            onClick={() => setIsMobileMenuOpen(false)}
          />

          <div
            className="fixed inset-0 md:hidden overflow-y-auto"
            style={{
              zIndex: 99999,
              backgroundColor: '#0E1219'
            }}
          >
            <div className="flex items-center justify-between px-6 py-4 border-b border-surface-border">
              <Link
                to="/"
                className="flex items-center gap-2.5"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <div className="w-8 h-8 rounded-lg bg-brand-500 flex items-center justify-center">
                  <span className="text-white font-heading font-extrabold text-xs">HC</span>
                </div>
                <span className="text-lg font-heading font-bold text-white">
                  Hablemos<span className="text-brand-500">Cripto</span>
                </span>
              </Link>
              <button
                onClick={() => setIsMobileMenuOpen(false)}
                className="p-2 text-slate-400 hover:text-white"
              >
                <X size={24} />
              </button>
            </div>

            <nav className="px-6 py-8">
              <ul className="space-y-2">
                {navLinks.map((link) => (
                  <li key={link.name}>
                    {link.path ? (
                      <Link
                        to={link.path}
                        onClick={() => setIsMobileMenuOpen(false)}
                        className="block py-3 px-4 text-lg font-medium text-slate-300 hover:text-white hover:bg-surface-3 rounded-lg transition-colors"
                      >
                        {link.name}
                      </Link>
                    ) : (
                      <button
                        onClick={link.action}
                        className="block w-full text-left py-3 px-4 text-lg font-medium text-slate-300 hover:text-white hover:bg-surface-3 rounded-lg transition-colors"
                      >
                        {link.name}
                      </button>
                    )}
                  </li>
                ))}
              </ul>

              <div className="mt-8 space-y-3">
                <a
                  href="https://discord.gg/W8haa7dDV3"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="flex items-center justify-center gap-2 w-full bg-indigo-600 hover:bg-indigo-500 text-white font-semibold py-3 px-4 rounded-xl transition-colors"
                >
                  <ExternalLink size={18} />
                  Unirse a Discord
                </a>

                {user ? (
                  <button
                    onClick={() => {
                      signOut();
                      setIsMobileMenuOpen(false);
                    }}
                    className="flex items-center justify-center gap-2 w-full bg-surface-3 hover:bg-surface-border-hover text-white font-semibold py-3 px-4 rounded-xl border border-surface-border transition-colors"
                  >
                    <LogOut size={18} />
                    Cerrar Sesion ({user.email?.split('@')[0]})
                  </button>
                ) : (
                  <button
                    onClick={() => {
                      setIsAuthModalOpen(true);
                      setIsMobileMenuOpen(false);
                    }}
                    className="flex items-center justify-center gap-2 w-full bg-brand-500 hover:bg-brand-400 text-white font-semibold py-3 px-4 rounded-xl transition-colors"
                  >
                    <User size={18} />
                    Iniciar Sesion
                  </button>
                )}
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
