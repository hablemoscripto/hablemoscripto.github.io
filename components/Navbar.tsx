import React, { useState, useEffect, useCallback, useRef } from 'react';
import { Menu, X, User, LogOut } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';
import AuthModal from './AuthModal';
import Logo from './ui/Logo';
import { useLocation, useNavigate } from 'react-router-dom';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const { user, signOut } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();
  const mobileToggleRef = useRef<HTMLButtonElement>(null);
  const mobileMenuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [isMobileMenuOpen]);

  // Close mobile menu on route change — idiomatic React pattern for resetting
  // local UI state in response to external navigation.
  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  // Escape to close + focus management: move focus into the menu when it opens
  // and restore it to the toggle on close.
  useEffect(() => {
    if (!isMobileMenuOpen) return;
    const toggle = mobileToggleRef.current;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsMobileMenuOpen(false);
        return;
      }
      if (e.key !== 'Tab' || !mobileMenuRef.current) return;

      const focusable = Array.from(
        mobileMenuRef.current.querySelectorAll<HTMLElement>(
          'a[href], button:not([disabled]), input:not([disabled]), [tabindex]:not([tabindex="-1"])',
        ),
      );
      if (focusable.length === 0) return;

      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    requestAnimationFrame(() => mobileMenuRef.current?.focus());
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      toggle?.focus();
    };
  }, [isMobileMenuOpen]);

  const handleScrollToSection = useCallback((sectionId: string) => {
    setIsMobileMenuOpen(false);
    if (location.pathname !== '/') {
      navigate('/');
      // Use requestAnimationFrame to wait for DOM update after navigation
      const waitForElement = (attempts = 0) => {
        requestAnimationFrame(() => {
          const element = document.getElementById(sectionId);
          if (element) {
            element.scrollIntoView({ behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth' });
          } else if (attempts < 10) {
            waitForElement(attempts + 1);
          }
        });
      };
      waitForElement();
    } else {
      const element = document.getElementById(sectionId);
      if (element) element.scrollIntoView({ behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth' });
    }
  }, [location.pathname, navigate]);

  // Give OAuth a return target before opening the modal: signInWithGoogle does a
  // full-page redirect, so onLoginSuccess never fires on the way back — the
  // LandingPage consumer effect reads this key instead. Don't clobber a more
  // specific redirect a ProtectedRoute may have stored.
  const handleOpenAuth = useCallback(() => {
    if (!sessionStorage.getItem('redirectAfterLogin')) {
      sessionStorage.setItem('redirectAfterLogin', '/education');
    }
    setIsAuthModalOpen(true);
  }, []);

  const navLinks: { name: string; action: () => void }[] = [
    { name: 'La ruta', action: () => handleScrollToSection('plataforma') },
    { name: 'Sobre CBas', action: () => handleScrollToSection('about') },
    { name: 'Precios', action: () => handleScrollToSection('pricing') },
    { name: 'Análisis semanal', action: () => handleScrollToSection('resources') },
    { name: 'FAQ', action: () => handleScrollToSection('faq') },
  ];

  return (
    <>
      <nav
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${isScrolled || isMobileMenuOpen
          ? 'bg-navy-950/90 backdrop-blur-xl border-b border-white/5 shadow-glass py-3'
          : 'bg-transparent py-6'
          }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          {/* Logo */}
          <Logo size="md" className="z-50" />

          {/* Desktop Menu */}
          <div className="hidden xl:flex items-center gap-8">
            <ul className="flex gap-7">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <button
                    type="button"
                    onClick={link.action}
                    className="relative text-sm font-semibold text-navy-300 transition-colors hover:text-white group"
                  >
                    {link.name}
                    <span className="absolute -bottom-2 left-1/2 h-0.5 w-0 -translate-x-1/2 rounded-full bg-brand-500 opacity-0 transition-all group-hover:w-full group-hover:opacity-100" />
                  </button>
                </li>
              ))}
            </ul>

            <div className="mx-2 h-6 w-px bg-white/10" />

            {/* Auth Button */}
            {user ? (
              <div className="flex items-center gap-4">
                <div className="hidden xl:flex flex-col items-end leading-none">
                  <span className="text-[10px] font-bold uppercase tracking-tighter text-navy-400">
                    Estudiante
                  </span>
                  <span className="text-sm font-medium text-navy-100">
                    {user.email?.split('@')[0]}
                  </span>
                </div>
                <button
                  onClick={() => signOut()}
                  className="rounded-xl border border-white/5 bg-navy-800 p-2.5 text-white transition-all hover:border-white/10 hover:bg-navy-700"
                  title="Cerrar Sesión"
                >
                  <LogOut size={18} aria-hidden="true" />
                </button>
              </div>
            ) : (
              <button
                onClick={handleOpenAuth}
                className="inline-flex items-center gap-2 rounded-xl bg-brand-500 px-6 py-2.5 text-sm font-bold text-navy-950 transition-colors hover:bg-brand-400 active:bg-brand-600"
              >
                <User size={16} aria-hidden="true" />
                Ingresar
              </button>
            )}
          </div>

          {/* Mobile Toggle */}
          <button
            ref={mobileToggleRef}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="z-50 p-2 text-navy-300 hover:text-white xl:hidden"
            aria-label={isMobileMenuOpen ? 'Cerrar menú' : 'Abrir menú'}
            aria-expanded={isMobileMenuOpen}
            aria-controls="mobile-menu"
          >
            {isMobileMenuOpen ? (
              <X size={28} aria-hidden="true" />
            ) : (
              <Menu size={28} aria-hidden="true" />
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <>
          {/* Dark overlay background */}
          <div
            className="fixed inset-0 z-[60] bg-black xl:hidden"
            onClick={() => setIsMobileMenuOpen(false)}
          />

          {/* Menu panel */}
          <div
            id="mobile-menu"
            ref={mobileMenuRef}
            role="dialog"
            aria-modal="true"
            aria-label="Menú de navegación"
            tabIndex={-1}
            className="fixed inset-0 z-[61] overflow-y-auto bg-navy-950 outline-none xl:hidden"
          >
            {/* Header with logo and close */}
            <div className="flex items-center justify-between px-6 py-6 border-b border-white/5">
              <Logo size="sm" onClick={() => setIsMobileMenuOpen(false)} />
              <button
                onClick={() => setIsMobileMenuOpen(false)}
                className="p-2.5 bg-navy-900 text-navy-400 hover:text-white rounded-xl border border-white/5"
                aria-label="Cerrar menú"
              >
                <X size={20} aria-hidden="true" />
              </button>
            </div>

            {/* Navigation links */}
            <nav className="px-6 py-10">
              <ul className="space-y-4">
                {navLinks.map((link) => (
                  <li key={link.name}>
                    <button
                      type="button"
                      onClick={link.action}
                      className="block w-full rounded-2xl border border-transparent px-6 py-4 text-left text-base font-semibold text-navy-300 transition-all hover:border-white/5 hover:bg-navy-900 hover:text-white"
                    >
                      {link.name}
                    </button>
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
                    className="flex w-full items-center justify-center gap-3 rounded-2xl border border-white/5 bg-navy-900 px-6 py-4 font-bold text-white transition-all hover:bg-red-500/10 hover:text-red-500"
                  >
                    <LogOut size={18} aria-hidden="true" />
                    Cerrar Sesión ({user.email?.split('@')[0]})
                  </button>
                ) : (
                  <button
                    onClick={() => {
                      handleOpenAuth();
                      setIsMobileMenuOpen(false);
                    }}
                    className="flex w-full items-center justify-center gap-3 rounded-2xl bg-brand-500 px-6 py-4 font-bold text-navy-950 transition-colors hover:bg-brand-400"
                  >
                    <User size={18} aria-hidden="true" />
                    Ingresar
                  </button>
                )}

                <button
                  type="button"
                  onClick={() => handleScrollToSection('pricing')}
                  className="flex w-full items-center justify-center gap-3 rounded-2xl border border-white/10 bg-navy-900 px-6 py-4 font-bold text-white transition-all hover:border-brand-500/40 hover:bg-navy-800"
                >
                  Ver planes y precios
                </button>
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
