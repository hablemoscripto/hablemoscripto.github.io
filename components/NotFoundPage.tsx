import React from 'react';
import { Link } from 'react-router-dom';
import { Home, Search } from 'lucide-react';

export default function NotFoundPage() {
  return (
    <div className="min-h-screen bg-navy-950 flex items-center justify-center px-4">
      <div className="text-center max-w-md">
        <div className="text-8xl font-bold text-brand-500 mb-4">404</div>
        <h1 className="text-2xl font-bold text-white mb-3">
          Pagina no encontrada
        </h1>
        <p className="text-navy-400 mb-8">
          La pagina que buscas no existe o fue movida.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link
            to="/"
            className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white font-semibold py-3 px-6 rounded-lg transition-all"
          >
            <Home size={20} />
            Ir al inicio
          </Link>
          <Link
            to="/education"
            className="inline-flex items-center justify-center gap-2 bg-navy-800 hover:bg-navy-700 text-white font-semibold py-3 px-6 rounded-lg border border-navy-600 transition-all"
          >
            <Search size={20} />
            Ver cursos
          </Link>
        </div>
      </div>
    </div>
  );
}
