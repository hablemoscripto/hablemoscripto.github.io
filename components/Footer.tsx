import React from 'react';
import { Twitter, Youtube } from 'lucide-react';

interface FooterProps {
  onNavigateEducation?: () => void;
}

const Footer: React.FC<FooterProps> = ({ onNavigateEducation }) => {
  return (
    <footer className="bg-surface-base border-t border-surface-border pt-16 pb-8">
      <div className="container max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-2">
            <a href="#home" className="flex items-center gap-2.5 mb-6">
              <div className="w-8 h-8 rounded-lg bg-brand-500 flex items-center justify-center">
                <span className="text-white font-heading font-extrabold text-xs">HC</span>
              </div>
              <span className="text-xl font-heading font-bold text-white">
                Hablemos<span className="text-brand-500">Cripto</span>
              </span>
            </a>
            <p className="text-slate-400 text-sm max-w-sm mb-6">
              La plataforma educativa para entender el futuro del dinero.
              Construyendo la proxima generacion de inversores inteligentes en LATAM.
            </p>
            <div className="flex gap-3">
              <a href="https://twitter.com/Crypto_CBas" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-lg bg-surface-2 flex items-center justify-center text-slate-400 hover:bg-brand-500 hover:text-white transition-all">
                <Twitter size={18} />
              </a>
              <a href="https://www.youtube.com/@hablemoscripto" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-lg bg-surface-2 flex items-center justify-center text-slate-400 hover:bg-red-600 hover:text-white transition-all">
                <Youtube size={18} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Plataforma</h4>
            <ul className="space-y-4 text-sm text-slate-400">
              <li><a href="#home" className="hover:text-brand-400 transition-colors">Inicio</a></li>
              <li>
                <a
                    href="#education"
                    onClick={(e) => {
                        if(onNavigateEducation) {
                            e.preventDefault();
                            onNavigateEducation();
                        }
                    }}
                    className="hover:text-brand-400 transition-colors"
                >
                    Cursos
                </a>
              </li>
              <li><a href="#about" className="hover:text-brand-400 transition-colors">Sobre Nosotros</a></li>
              <li><a href="#" className="hover:text-brand-400 transition-colors">Recursos</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Legal</h4>
            <ul className="space-y-4 text-sm text-slate-400">
              <li><a href="#" className="hover:text-brand-400 transition-colors">Terminos de Uso</a></li>
              <li><a href="#" className="hover:text-brand-400 transition-colors">Politica de Privacidad</a></li>
              <li><a href="#" className="hover:text-brand-400 transition-colors">Cookies</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-surface-border pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-slate-500 text-center md:text-left">
            &copy; 2025 Hablemos Cripto. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
