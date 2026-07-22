import React from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { Twitter, Youtube } from 'lucide-react';
import Logo from './ui/Logo';

interface FooterProps {
  onNavigateEducation?: () => void;
}

const Footer: React.FC<FooterProps> = ({ onNavigateEducation }) => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleAnchorClick = (e: React.MouseEvent, sectionId: string) => {
    e.preventDefault();
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (location.pathname !== '/') {
      navigate('/');
      const waitForElement = (attempts = 0) => {
        requestAnimationFrame(() => {
          const element = document.getElementById(sectionId);
          if (element) {
            element.scrollIntoView({ behavior: reduce ? 'auto' : 'smooth' });
          } else if (attempts < 10) {
            waitForElement(attempts + 1);
          }
        });
      };
      waitForElement();
    } else {
      document
        .getElementById(sectionId)
        ?.scrollIntoView({ behavior: reduce ? 'auto' : 'smooth' });
    }
  };

  return (
    <footer className="bg-navy-950 border-t border-white/5 pt-16 pb-8">
      <div className="container max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-2">
            <Logo size="md" className="mb-6" />
            <p className="text-navy-400 text-sm max-w-sm mb-6">
              Educación cripto en español para LATAM. Desde lo básico hasta análisis avanzado, sin
              ruido y sin promesas falsas.
            </p>
            <div className="flex gap-4">
              <a
                href="https://twitter.com/Crypto_CBas"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter: @Crypto_CBas (abre en una pestaña nueva)"
                className="w-11 h-11 rounded-full bg-navy-900 flex items-center justify-center text-navy-400 hover:bg-brand-500 hover:text-navy-900 transition-all"
              >
                <Twitter size={18} aria-hidden="true" />
              </a>
              <a
                href="https://www.youtube.com/@hablemoscripto"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube: @hablemoscripto (abre en una pestaña nueva)"
                className="w-11 h-11 rounded-full bg-navy-900 flex items-center justify-center text-navy-400 hover:bg-red-600 hover:text-white transition-all"
              >
                <Youtube size={18} aria-hidden="true" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-white font-bold mb-6 text-base">Plataforma</h3>
            <ul className="space-y-1 text-sm text-navy-400">
              <li>
                <a
                  href="/#home"
                  onClick={(e) => handleAnchorClick(e, 'home')}
                  className="inline-block py-2 hover:text-brand-500 transition-colors"
                >
                  Inicio
                </a>
              </li>
              <li>
                <a
                  href="/#courses"
                  onClick={(e) => handleAnchorClick(e, 'courses')}
                  className="inline-block py-2 hover:text-brand-500 transition-colors"
                >
                  Cursos
                </a>
              </li>
              <li>
                <a
                  href="/#pricing"
                  onClick={(e) => handleAnchorClick(e, 'pricing')}
                  className="inline-block py-2 hover:text-brand-500 transition-colors"
                >
                  Precios
                </a>
              </li>
              <li>
                <a
                  href="/#about"
                  onClick={(e) => handleAnchorClick(e, 'about')}
                  className="inline-block py-2 hover:text-brand-500 transition-colors"
                >
                  Sobre CBas
                </a>
              </li>
              <li>
                <a
                  href="/#faq"
                  onClick={(e) => handleAnchorClick(e, 'faq')}
                  className="inline-block py-2 hover:text-brand-500 transition-colors"
                >
                  FAQ
                </a>
              </li>
              <li>
                <a
                  href="/#resources"
                  onClick={(e) => handleAnchorClick(e, 'resources')}
                  className="inline-block py-2 hover:text-brand-500 transition-colors"
                >
                  Recursos gratuitos
                </a>
              </li>
              {onNavigateEducation && (
                <li>
                  <button
                    type="button"
                    onClick={onNavigateEducation}
                    className="inline-block py-2 hover:text-brand-500 transition-colors text-left"
                  >
                    Entrar a la plataforma
                  </button>
                </li>
              )}
            </ul>
          </div>

          <div>
            <h3 className="text-white font-bold mb-6 text-base">Legal</h3>
            <ul className="space-y-1 text-sm text-navy-400">
              <li>
                <Link to="/terminos" className="inline-block py-2 hover:text-brand-500 transition-colors">
                  Términos de Uso
                </Link>
              </li>
              <li>
                <Link
                  to="/privacidad"
                  className="inline-block py-2 hover:text-brand-500 transition-colors"
                >
                  Política de Privacidad
                </Link>
              </li>
              <li>
                <a
                  href="mailto:hablemoscripto@gmail.com"
                  className="inline-block py-2 hover:text-brand-500 transition-colors"
                >
                  Soporte
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-navy-400 text-center md:text-left">
            &copy; {new Date().getFullYear()} Hablemos Cripto. Todos los derechos reservados.
            <span className="block mt-1">Contenido educativo. No es asesoría financiera.</span>
          </p>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" aria-hidden="true" />
            <span className="text-xs text-navy-400">Plataforma activa</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
