
import React from 'react';
import { Link } from 'react-router-dom';
import { Twitter, Youtube, Bitcoin } from 'lucide-react';

interface FooterProps {
  onNavigateEducation?: () => void;
}

const Footer: React.FC<FooterProps> = ({ onNavigateEducation }) => {
  return (
    <footer className="bg-slate-950 border-t border-white/5 pt-16 pb-8">
      <div className="container max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-2">
            <a href="#home" className="flex items-center gap-2 mb-6">
              <Bitcoin className="text-brand-500 h-6 w-6" />
              <span className="text-xl font-heading font-bold text-white">
                Hablemos<span className="text-brand-500">Cripto</span>
              </span>
            </a>
            <p className="text-slate-400 text-sm max-w-sm mb-6">
              La plataforma educativa líder para entender el futuro del dinero. 
              Construyendo la próxima generación de inversores inteligentes.
            </p>
            <div className="flex gap-4">
              <a href="https://twitter.com/Crypto_CBas" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-slate-900 flex items-center justify-center text-slate-400 hover:bg-brand-500 hover:text-slate-900 transition-all">
                <Twitter size={18} />
              </a>
              <a href="https://www.youtube.com/@hablemoscripto" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-slate-900 flex items-center justify-center text-slate-400 hover:bg-red-600 hover:text-white transition-all">
                <Youtube size={18} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Plataforma</h4>
            <ul className="space-y-4 text-sm text-slate-400">
              <li><a href="#home" className="hover:text-brand-500 transition-colors">Inicio</a></li>
              <li>
                <a 
                    href="#education" 
                    onClick={(e) => {
                        if(onNavigateEducation) {
                            e.preventDefault();
                            onNavigateEducation();
                        }
                    }}
                    className="hover:text-brand-500 transition-colors"
                >
                    Cursos
                </a>
              </li>
              <li><a href="#about" className="hover:text-brand-500 transition-colors">Sobre Nosotros</a></li>
              <li><a href="#" className="hover:text-brand-500 transition-colors">Recursos Gratuitos</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Legal</h4>
            <ul className="space-y-4 text-sm text-slate-400">
              <li><Link to="/terminos" className="hover:text-brand-500 transition-colors">Términos de Uso</Link></li>
              <li><Link to="/privacidad" className="hover:text-brand-500 transition-colors">Política de Privacidad</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-slate-500 text-center md:text-left">
            © 2025 Hablemos Cripto. Todos los derechos reservados.
          </p>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
            <span className="text-xs text-slate-500">Sistemas Operativos</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
