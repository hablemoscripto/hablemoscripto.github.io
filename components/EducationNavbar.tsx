import React, { useState } from 'react';
import { Bitcoin, Menu, X, BarChart3, ChevronDown, LogOut, BookOpen } from 'lucide-react';
import { useNavigate, Link } from 'react-router-dom';

interface EducationNavbarProps {
  globalProgress: number;
  onOpenProgress: () => void;
  currentView?: 'dashboard' | 'level-beginner' | 'level-intermediate' | 'level-advanced' | 'lesson';
}

const EducationNavbar: React.FC<EducationNavbarProps> = ({ globalProgress, onOpenProgress, currentView }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();

  const handleLogout = () => {
    // Add any logout logic here if needed (e.g. clearing auth state)
    navigate('/');
  };

  return (
    <nav className="sticky top-0 z-40 bg-slate-950 border-b border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-16">

          {/* Logo Area */}
          <div className="flex items-center gap-8">
            <Link to="/" className="flex items-center gap-2 group">
              <div className="bg-slate-800 p-1.5 rounded-lg group-hover:bg-slate-700 transition-colors">
                <Bitcoin className="text-brand-500 h-5 w-5" />
              </div>
              <span className="font-heading font-bold text-white text-lg hidden sm:inline">
                Hablemos<span className="text-brand-500">Cripto</span>
              </span>
            </Link>

            {/* Mini Context Badge */}
            <div className="hidden md:flex items-center px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-xs font-medium text-slate-400">
              <BookOpen size={12} className="mr-2" />
              {currentView === 'lesson' ? 'Modo Aprendizaje' : 'Plataforma Educativa'}
            </div>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-6">
            <button
              onClick={onOpenProgress}
              className="flex items-center gap-3 px-4 py-2 rounded-full bg-slate-900 border border-slate-800 hover:border-brand-500/30 transition-all group"
            >
              <div className="flex flex-col items-end leading-none">
                <span className="text-[10px] text-slate-400 uppercase tracking-wider">Progreso General</span>
                <span className="text-sm font-bold text-brand-500">{globalProgress}%</span>
              </div>
              <div className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center group-hover:bg-brand-500/20 transition-colors">
                <BarChart3 size={16} className="text-slate-300 group-hover:text-brand-500" />
              </div>
            </button>

            <div className="h-6 w-px bg-slate-800"></div>

            <a
              href="https://discord.gg/W8haa7dDV3"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium text-slate-300 hover:text-white transition-colors"
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
      <div className="h-0.5 bg-slate-900 w-full">
        <div
          className="h-full bg-gradient-to-r from-brand-500 to-brand-400 shadow-[0_0_10px_rgba(255,193,7,0.5)] transition-all duration-1000 ease-out"
          style={{ width: `${globalProgress}%` }}
        ></div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-slate-900 border-b border-white/5 p-4 space-y-4 absolute w-full shadow-2xl z-50">
          <button onClick={onOpenProgress} className="w-full flex items-center justify-between p-3 rounded-lg bg-slate-800 text-left">
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