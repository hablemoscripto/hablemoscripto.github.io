
import React, { useState, useEffect } from 'react';
import { Menu, X, Bitcoin, ExternalLink, User, LogOut } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';
import AuthModal from './AuthModal';

interface NavbarProps {
  onNavigateEducation: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ onNavigateEducation }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const { user, signOut } = useAuth();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleEducationClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    onNavigateEducation();
  };

  const navLinks = [
    { name: 'Inicio', href: '#home', action: null },
    { name: 'Por Qué HC', href: '#about', action: null },
    { name: 'Cursos', href: '#education', action: handleEducationClick },
    { name: 'Recursos', href: '#resources', action: null },
  ];

  return (
    <nav 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled || isMobileMenuOpen 
          ? 'bg-slate-950/90 backdrop-blur-md border-b border-white/10 shadow-lg py-3' 
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <a href="#home" className="group flex items-center gap-2 z-50">
          <div className="bg-gradient-to-br from-brand-400 to-brand-600 p-2 rounded-lg group-hover:rotate-12 transition-transform duration-300">
            <Bitcoin className="text-white h-6 w-6" />
          </div>
          <div className="flex flex-col leading-none">
            <span className="text-xl font-heading font-bold text-white tracking-tight">
              Hablemos<span className="text-brand-500">Cripto</span>
            </span>
          </div>
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          <ul className="flex gap-8">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a 
                  href={link.href}
                  onClick={link.action ? link.action : undefined}
                  className="text-sm font-medium text-slate-300 hover:text-brand-400 transition-colors relative group"
                >
                  {link.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-brand-500 transition-all group-hover:w-full"></span>
                </a>
              </li>
            ))}
          </ul>
          
          <a
            href="https://discord.gg/W8haa7dDV3"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white px-5 py-2 rounded-full font-medium text-sm transition-all transform hover:scale-105 shadow-lg shadow-indigo-500/25"
          >
            <ExternalLink size={16} />
            Unirse a Discord
          </a>

          {/* Auth Button */}
          {user ? (
            <div className="flex items-center gap-3">
              <span className="text-sm text-slate-300 hidden lg:block">
                {user.email?.split('@')[0]}
              </span>
              <button
                onClick={() => signOut()}
                className="flex items-center gap-2 bg-slate-700 hover:bg-slate-600 text-white px-4 py-2 rounded-full font-medium text-sm transition-all"
              >
                <LogOut size={16} />
                Salir
              </button>
            </div>
          ) : (
            <button
              onClick={() => setIsAuthModalOpen(true)}
              className="flex items-center gap-2 bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white px-5 py-2 rounded-full font-medium text-sm transition-all transform hover:scale-105 shadow-lg shadow-orange-500/25"
            >
              <User size={16} />
              Iniciar Sesion
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
              backgroundColor: '#0f172a'
            }}
          >
            {/* Header with logo and close */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-slate-800">
              <a
                href="#home"
                className="flex items-center gap-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <div className="bg-gradient-to-br from-brand-400 to-brand-600 p-2 rounded-lg">
                  <Bitcoin className="text-white h-5 w-5" />
                </div>
                <span className="text-lg font-heading font-bold text-white">
                  Hablemos<span className="text-brand-500">Cripto</span>
                </span>
              </a>
              <button
                onClick={() => setIsMobileMenuOpen(false)}
                className="p-2 text-slate-400 hover:text-white"
              >
                <X size={24} />
              </button>
            </div>

            {/* Navigation links */}
            <nav className="px-6 py-8">
              <ul className="space-y-2">
                {navLinks.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      onClick={(e) => {
                        if (link.action) link.action(e);
                        else setIsMobileMenuOpen(false);
                      }}
                      className="block py-3 px-4 text-lg font-medium text-slate-300 hover:text-white hover:bg-slate-800 rounded-lg transition-colors"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>

              {/* Action buttons */}
              <div className="mt-8 space-y-3">
                <a
                  href="https://discord.gg/W8haa7dDV3"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="flex items-center justify-center gap-2 w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 px-4 rounded-xl transition-colors"
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
                    className="flex items-center justify-center gap-2 w-full bg-slate-800 hover:bg-slate-700 text-white font-semibold py-3 px-4 rounded-xl border border-slate-700 transition-colors"
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
                    className="flex items-center justify-center gap-2 w-full bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white font-semibold py-3 px-4 rounded-xl transition-colors"
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
      <AuthModal isOpen={isAuthModalOpen} onClose={() => setIsAuthModalOpen(false)} />
    </nav>
  );
};

export default Navbar;
