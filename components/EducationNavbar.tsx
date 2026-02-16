import React, { useState } from 'react';
import { Menu, X, BarChart3, LogOut, BookOpen, Zap, Trophy } from 'lucide-react';
import { useNavigate, Link } from 'react-router-dom';
import { useGamification } from '../contexts/GamificationContext';
import { useAuth } from '../contexts/AuthContext';

interface EducationNavbarProps {
  globalProgress: number;
  onOpenProgress: () => void;
  currentView?: 'dashboard' | 'level-beginner' | 'level-intermediate' | 'level-advanced' | 'lesson';
}

const EducationNavbar: React.FC<EducationNavbarProps> = ({ globalProgress, onOpenProgress, currentView }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();
  const { xp, level, streak } = useGamification();
  const { signOut } = useAuth();

  const handleLogout = async () => {
    await signOut();
    navigate('/');
  };

  return (
    <nav className="sticky top-0 z-40 bg-surface-2 border-b border-surface-border">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-16">

          {/* Logo Area */}
          <div className="flex items-center gap-8">
            <Link to="/" className="flex items-center gap-2.5 group">
              <div className="w-8 h-8 rounded-lg bg-brand-500 flex items-center justify-center">
                <span className="text-white font-heading font-extrabold text-xs">HC</span>
              </div>
              <span className="font-heading font-bold text-white text-lg hidden sm:inline">
                Hablemos<span className="text-brand-500">Cripto</span>
              </span>
            </Link>

            <div className="hidden md:flex items-center px-3 py-1 rounded-full bg-surface-3 border border-surface-border text-xs font-medium text-slate-400">
              <BookOpen size={12} className="mr-2" />
              {currentView === 'lesson' ? 'Modo Aprendizaje' : 'Plataforma Educativa'}
            </div>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-6">
            {/* Gamification Stats */}
            <div className="flex items-center gap-4 mr-4 border-r border-surface-border pr-6">
              <div className="flex items-center gap-2 text-accent-400" title="Racha de dias">
                <Zap size={18} className="fill-accent-400" />
                <span className="font-bold">{streak}</span>
              </div>
              <div className="flex items-center gap-2 text-blue-400" title="Nivel">
                <Trophy size={18} />
                <span className="font-bold">Lvl {level}</span>
                <span className="text-xs text-slate-500">({xp} XP)</span>
              </div>
            </div>

            <button
              onClick={onOpenProgress}
              className="flex items-center gap-3 px-4 py-2 rounded-full bg-surface-3 border border-surface-border hover:border-brand-500/30 transition-all group"
            >
              <div className="flex flex-col items-end leading-none">
                <span className="text-[10px] text-slate-400 uppercase tracking-wider">Progreso General</span>
                <span className="text-sm font-bold text-brand-500">{globalProgress}%</span>
              </div>
              <div className="w-8 h-8 rounded-full bg-surface-base flex items-center justify-center group-hover:bg-brand-500/20 transition-colors">
                <BarChart3 size={16} className="text-slate-300 group-hover:text-brand-500" />
              </div>
            </button>

            <div className="h-6 w-px bg-surface-border"></div>

            <a
              href="https://discord.gg/W8haa7dDV3"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium text-slate-400 hover:text-white transition-colors"
            >
              Comunidad
            </a>

            <button
              onClick={handleLogout}
              className="flex items-center gap-2 text-sm font-medium text-slate-400 hover:text-white transition-colors"
            >
              <LogOut size={16} />
              Salir
            </button>
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-slate-400 hover:text-white"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Global Progress Line */}
      <div className="h-0.5 bg-surface-base w-full">
        <div
          className="h-full bg-brand-500 transition-all duration-1000 ease-out"
          style={{ width: `${globalProgress}%` }}
        ></div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-surface-1 border-b border-surface-border p-4 space-y-4 absolute w-full shadow-2xl z-50">
          <div className="flex justify-between items-center p-3 bg-surface-3 rounded-lg">
            <div className="flex items-center gap-2 text-accent-400">
              <Zap size={18} className="fill-accent-400" />
              <span className="font-bold">{streak} dias</span>
            </div>
            <div className="flex items-center gap-2 text-blue-400">
              <Trophy size={18} />
              <span className="font-bold">Lvl {level}</span>
            </div>
          </div>
          <button onClick={onOpenProgress} className="w-full flex items-center justify-between p-3 rounded-lg bg-surface-3 text-left">
            <span className="text-slate-300">Mi Progreso</span>
            <span className="font-bold text-brand-500">{globalProgress}%</span>
          </button>
          <button onClick={handleLogout} className="w-full flex items-center gap-2 p-3 text-slate-400">
            <LogOut size={16} /> Volver al Inicio
          </button>
        </div>
      )}
    </nav>
  );
};

export default EducationNavbar;
