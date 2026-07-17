import React, { useState, useEffect, useRef } from 'react';
import { Menu, X, BarChart3, LogOut, BookOpen, Zap, Trophy, Search } from 'lucide-react';
import { useNavigate, useLocation } from 'react-router-dom';
import Logo from './ui/Logo';
import { useGamification } from '../contexts/GamificationContext';
import { useAuth } from '../contexts/AuthContext';
import { useEntitlements } from '../contexts/EntitlementsContext';
import { hasCommunityAccess } from '../services/paymentService';

// Cripto Experto Discord invite. Keep in sync with the invite in the Experto
// welcome email (_shared/welcome-email.ts).
const COMMUNITY_INVITE_URL = 'https://discord.gg/CQYyvzQb65';

interface EducationNavbarProps {
  globalProgress: number;
  onOpenProgress: () => void;
  onOpenSearch?: () => void;
  currentView?: 'dashboard' | 'level-beginner' | 'level-intermediate' | 'level-advanced' | 'lesson';
}

const EducationNavbar: React.FC<EducationNavbarProps> = ({ globalProgress, onOpenProgress, onOpenSearch, currentView }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const mobileToggleRef = useRef<HTMLButtonElement>(null);
  const mobileMenuRef = useRef<HTMLDivElement>(null);

  // Close mobile menu on route change — idiomatic React pattern for resetting
  // local UI state in response to external navigation.
  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  // Lock body scroll while the mobile menu is open.
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [isMobileMenuOpen]);

  // Escape to close + focus the menu when it opens; restore focus to the
  // toggle on close.
  useEffect(() => {
    if (!isMobileMenuOpen) return;
    const toggle = mobileToggleRef.current;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsMobileMenuOpen(false);
    };
    window.addEventListener('keydown', handleKeyDown);
    requestAnimationFrame(() => mobileMenuRef.current?.focus());
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      toggle?.focus();
    };
  }, [isMobileMenuOpen]);

  const { xp, level, streak } = useGamification();
  const { signOut } = useAuth();
  const { entitlements } = useEntitlements();
  const showCommunity = hasCommunityAccess(entitlements);

  const handleLogout = async () => {
    await signOut();
    navigate('/');
  };

  return (
    <nav className="sticky top-0 z-40 bg-navy-950 border-b border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-16">

          {/* Logo Area */}
          <div className="flex items-center gap-8">
            <Logo size="sm" wordmarkClassName="hidden sm:inline" />

            {/* Mini Context Badge */}
            <div className="hidden md:flex items-center px-3 py-1 rounded-full bg-navy-900 border border-navy-800 text-xs font-medium text-navy-400">
              <BookOpen size={12} className="mr-2" />
              {currentView === 'lesson' ? 'Modo Aprendizaje' : 'Plataforma Educativa'}
            </div>
          </div>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-6">
            {/* Gamification Stats — streak in amber (flame), Nivel in white so the
                two don't read as one amber block. */}
            <div className="flex items-center gap-4 mr-4 border-r border-navy-800 pr-6">
              <div className="flex items-center gap-2 text-amber-400" title="Racha de días">
                <Zap size={18} className="fill-amber-400" />
                <span className="font-bold">{streak}</span>
              </div>
              <div className="flex items-center gap-2 text-navy-100" title="Nivel">
                <Trophy size={18} className="text-brand-500" />
                <span className="font-bold">Nivel {level}</span>
                <span className="text-xs text-navy-400">({xp} XP)</span>
              </div>
            </div>

            {onOpenSearch && (
              <button
                onClick={onOpenSearch}
                className="flex items-center gap-2 px-3 py-2 rounded-full bg-navy-900 border border-navy-800 hover:border-brand-500/30 transition-all text-sm text-navy-400 hover:text-white"
                aria-label="Buscar lecciones"
              >
                <Search size={16} aria-hidden="true" />
                <span className="hidden lg:inline">Buscar</span>
                <kbd className="hidden lg:inline-flex ml-1 px-1.5 py-0.5 text-[10px] bg-navy-700 rounded border border-navy-600 text-navy-200">
                  Ctrl K
                </kbd>
              </button>
            )}

            <button
              onClick={onOpenProgress}
              className="flex items-center gap-3 px-4 py-2 rounded-full bg-navy-900 border border-navy-800 hover:border-brand-500/30 transition-all group"
            >
              <div className="flex flex-col items-end leading-none">
                <span className="text-[10px] text-navy-400 uppercase tracking-wider">Progreso General</span>
                <span className="text-sm font-bold text-brand-500">{globalProgress}%</span>
              </div>
              <div className="w-8 h-8 rounded-full bg-navy-800 flex items-center justify-center group-hover:bg-brand-500/20 transition-colors">
                <BarChart3 size={16} className="text-navy-300 group-hover:text-brand-500" />
              </div>
            </button>

            <div className="h-6 w-px bg-navy-800"></div>

            {showCommunity && (
              <a
                href={COMMUNITY_INVITE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-medium text-navy-300 hover:text-white transition-colors"
              >
                Comunidad
              </a>
            )}

            <button
              onClick={handleLogout}
              className="flex items-center gap-2 text-sm font-medium text-navy-400 hover:text-white transition-colors"
            >
              <LogOut size={16} />
              Salir
            </button>
          </div>

          {/* Mobile: streak + level always visible — the habit signal can't live
              only inside the hamburger on the audience's primary device. */}
          <div className="flex lg:hidden items-center gap-2">
            <button
              onClick={onOpenProgress}
              className="flex items-center gap-3 min-h-11 px-3 rounded-full bg-navy-900 border border-navy-800 text-sm"
              aria-label={`Racha de ${streak} días, nivel ${level}. Ver mi progreso`}
            >
              <span className="flex items-center gap-1 text-amber-400">
                <Zap size={15} className="fill-amber-400" aria-hidden="true" />
                <span className="font-bold">{streak}</span>
              </span>
              <span className="flex items-center gap-1 text-navy-100">
                <Trophy size={15} className="text-brand-500" aria-hidden="true" />
                <span className="font-bold">Nv {level}</span>
              </span>
            </button>

            {/* Mobile Toggle */}
            <button
              ref={mobileToggleRef}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 min-h-11 min-w-11 flex items-center justify-center text-navy-400 hover:text-white"
              aria-label={isMobileMenuOpen ? 'Cerrar menú' : 'Abrir menú'}
              aria-expanded={isMobileMenuOpen}
              aria-controls="education-mobile-menu"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Global Progress Line */}
      <div className="h-0.5 bg-navy-900 w-full">
        <div
          className="h-full bg-gradient-to-r from-brand-500 to-brand-400 shadow-[0_0_10px_rgba(245,158,11,0.5)] transition-all duration-1000 ease-out"
          style={{ width: `${globalProgress}%` }}
        ></div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <>
          {/* Backdrop — click to dismiss */}
          <div
            className="fixed inset-0 top-16 bg-black/60 z-40 lg:hidden"
            onClick={() => setIsMobileMenuOpen(false)}
            aria-hidden="true"
          />
          <div
            id="education-mobile-menu"
            ref={mobileMenuRef}
            role="dialog"
            aria-modal="true"
            aria-label="Menú de navegación"
            tabIndex={-1}
            className="lg:hidden bg-navy-900 border-b border-white/5 p-4 space-y-4 absolute w-full shadow-2xl z-50 outline-none"
          >
            <div className="flex justify-between items-center p-3 bg-navy-800/50 rounded-lg">
              <div className="flex items-center gap-2 text-amber-400">
                <Zap size={18} className="fill-amber-400" />
                <span className="font-bold">{streak} días</span>
              </div>
              <div className="flex items-center gap-2 text-navy-100">
                <Trophy size={18} className="text-brand-500" />
                <span className="font-bold">Nivel {level}</span>
              </div>
            </div>
            {onOpenSearch && (
              <button onClick={() => { setIsMobileMenuOpen(false); onOpenSearch(); }} className="w-full flex items-center gap-2 p-3 rounded-lg bg-navy-800 text-left text-navy-300">
                <Search size={16} aria-hidden="true" /> Buscar Lecciones
              </button>
            )}
            <button onClick={onOpenProgress} className="w-full flex items-center justify-between p-3 rounded-lg bg-navy-800 text-left">
              <span className="text-navy-300">Mi Progreso</span>
              <span className="font-bold text-brand-500">{globalProgress}%</span>
            </button>
            {showCommunity && (
              <a
                href={COMMUNITY_INVITE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center gap-2 p-3 rounded-lg bg-navy-800 text-left text-navy-300"
              >
                Comunidad
              </a>
            )}
            <button onClick={handleLogout} className="w-full flex items-center gap-2 p-3 text-navy-400">
              <LogOut size={16} /> Cerrar sesión
            </button>
          </div>
        </>
      )}
    </nav>
  );
};

export default EducationNavbar;