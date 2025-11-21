
import React, { useState, useEffect } from 'react';
import { Menu, X, Bitcoin, ExternalLink } from 'lucide-react';

interface NavbarProps {
  onNavigateEducation: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ onNavigateEducation }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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
      <div className={`fixed inset-0 bg-slate-950 z-40 transform transition-transform duration-300 ease-in-out ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'} md:hidden pt-24 px-6`}>
        <ul className="flex flex-col gap-6 text-center">
          {navLinks.map((link) => (
            <li key={link.name}>
              <a 
                href={link.href}
                onClick={(e) => {
                    if (link.action) link.action(e);
                    else setIsMobileMenuOpen(false);
                }}
                className="text-2xl font-heading font-medium text-white hover:text-brand-500"
              >
                {link.name}
              </a>
            </li>
          ))}
          <li className="mt-8">
            <a 
              href="https://discord.gg/W8haa7dDV3" 
              target="_blank"
              className="inline-block w-full bg-brand-500 text-slate-900 font-bold py-4 rounded-xl"
            >
              Unirse a la Comunidad
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
