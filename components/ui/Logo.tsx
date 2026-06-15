import React from 'react';
import { Bitcoin } from 'lucide-react';
import { Link } from 'react-router-dom';

interface LogoProps {
  // sm = app navbar, md = marketing navbar. One lockup, two sizes, so the brand
  // mark is byte-identical across logged-out and logged-in surfaces.
  size?: 'sm' | 'md';
  className?: string;
  // Lets the app navbar hide the wordmark on the smallest screens.
  wordmarkClassName?: string;
  onClick?: () => void;
}

const Logo: React.FC<LogoProps> = ({ size = 'md', className = '', wordmarkClassName = '', onClick }) => {
  const chip = size === 'sm' ? 'p-2 rounded-lg' : 'p-2.5 rounded-xl';
  const glyph = size === 'sm' ? 'h-5 w-5' : 'h-6 w-6';
  const word = size === 'sm' ? 'text-lg' : 'text-xl';

  return (
    <Link to="/" onClick={onClick} className={`group flex items-center gap-3 ${className}`} aria-label="Hablemos Cripto, ir al inicio">
      <span className={`bg-gradient-to-br from-brand-400 to-brand-600 ${chip} shadow-glow-brand flex items-center justify-center group-hover:rotate-6 transition-transform duration-500`}>
        <Bitcoin className={`text-navy-950 ${glyph}`} aria-hidden="true" />
      </span>
      <span className={`font-heading font-extrabold text-white tracking-tighter ${word} ${wordmarkClassName}`}>
        Hablemos<span className="text-brand-500">Cripto</span>
      </span>
    </Link>
  );
};

export default Logo;
