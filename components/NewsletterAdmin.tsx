import React, { useState, useEffect } from 'react';
import { supabase } from '../lib/supabase';
import { Download, Mail, Users, Trash2, RefreshCw } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';
import { useNavigate } from 'react-router-dom';

interface Subscriber {
  id: string;
  email: string;
  subscribed_at: string;
  is_active: boolean;
}

const NewsletterAdmin: React.FC = () => {
  const [subscribers, setSubscribers] = useState<Subscriber[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const { user } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      navigate('/');
      return;
    }
    fetchSubscribers();
  }, [user, navigate]);

  const fetchSubscribers = async () => {
    setLoading(true);
    setError('');

    try {
      const { data, error } = await supabase
        .from('newsletter_subscribers')
        .select('*')
        .order('subscribed_at', { ascending: false });

      if (error) throw error;

      setSubscribers(data || []);
    } catch (err: any) {
      console.error('Error fetching subscribers:', err);
      setError(err.message || 'Error al cargar suscriptores');
    } finally {
      setLoading(false);
    }
  };

  const exportToCSV = () => {
    const csv = [
      ['Email', 'Fecha de Suscripción', 'Estado'],
      ...subscribers.map(sub => [
        sub.email,
        new Date(sub.subscribed_at).toLocaleDateString('es-ES'),
        sub.is_active ? 'Activo' : 'Inactivo'
      ])
    ].map(row => row.join(',')).join('\n');

    const blob = new Blob([csv], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `newsletter_subscribers_${new Date().toISOString().split('T')[0]}.csv`;
    a.click();
    window.URL.revokeObjectURL(url);
  };

  const copyAllEmails = () => {
    const emails = subscribers
      .filter(sub => sub.is_active)
      .map(sub => sub.email)
      .join(', ');

    navigator.clipboard.writeText(emails);
    alert('Emails copiados al portapapeles!');
  };

  const activeSubscribers = subscribers.filter(sub => sub.is_active);

  if (loading) {
    return (
      <div className="min-h-screen bg-slate-950 flex items-center justify-center">
        <div className="text-white text-center">
          <RefreshCw className="animate-spin mx-auto mb-4" size={32} />
          <p>Cargando suscriptores...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-950 text-white p-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <button
            onClick={() => navigate('/education')}
            className="text-slate-400 hover:text-white mb-4 transition-colors"
          >
            ← Volver al Dashboard
          </button>
          <h1 className="text-4xl font-bold mb-2">Panel de Newsletter</h1>
          <p className="text-slate-400">Gestiona tus suscriptores de newsletter</p>
        </div>

        {/* Stats */}
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <div className="bg-slate-900 rounded-xl p-6 border border-slate-800">
            <div className="flex items-center gap-3 mb-2">
              <Users className="text-brand-500" size={24} />
              <h3 className="font-semibold text-slate-300">Total Suscriptores</h3>
            </div>
            <p className="text-3xl font-bold">{subscribers.length}</p>
          </div>

          <div className="bg-slate-900 rounded-xl p-6 border border-slate-800">
            <div className="flex items-center gap-3 mb-2">
              <Mail className="text-green-500" size={24} />
              <h3 className="font-semibold text-slate-300">Activos</h3>
            </div>
            <p className="text-3xl font-bold">{activeSubscribers.length}</p>
          </div>

          <div className="bg-slate-900 rounded-xl p-6 border border-slate-800">
            <div className="flex items-center gap-3 mb-2">
              <Trash2 className="text-red-500" size={24} />
              <h3 className="font-semibold text-slate-300">Inactivos</h3>
            </div>
            <p className="text-3xl font-bold">{subscribers.length - activeSubscribers.length}</p>
          </div>
        </div>

        {/* Actions */}
        <div className="flex flex-wrap gap-4 mb-8">
          <button
            onClick={exportToCSV}
            className="flex items-center gap-2 px-6 py-3 bg-brand-500 hover:bg-brand-400 text-slate-900 font-bold rounded-xl transition-colors"
          >
            <Download size={20} />
            Exportar CSV
          </button>

          <button
            onClick={copyAllEmails}
            className="flex items-center gap-2 px-6 py-3 bg-slate-800 hover:bg-slate-700 text-white font-medium rounded-xl transition-colors"
          >
            <Mail size={20} />
            Copiar Emails
          </button>

          <button
            onClick={fetchSubscribers}
            className="flex items-center gap-2 px-6 py-3 bg-slate-800 hover:bg-slate-700 text-white font-medium rounded-xl transition-colors"
          >
            <RefreshCw size={20} />
            Refrescar
          </button>
        </div>

        {/* Error Display */}
        {error && (
          <div className="bg-red-500/10 border border-red-500/20 rounded-xl p-4 mb-8">
            <p className="text-red-400">{error}</p>
          </div>
        )}

        {/* Subscribers Table */}
        <div className="bg-slate-900 rounded-xl border border-slate-800 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-slate-800/50">
                <tr>
                  <th className="text-left px-6 py-4 text-sm font-semibold text-slate-300">Email</th>
                  <th className="text-left px-6 py-4 text-sm font-semibold text-slate-300">Fecha</th>
                  <th className="text-left px-6 py-4 text-sm font-semibold text-slate-300">Estado</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800">
                {subscribers.length === 0 ? (
                  <tr>
                    <td colSpan={3} className="px-6 py-8 text-center text-slate-500">
                      No hay suscriptores aún
                    </td>
                  </tr>
                ) : (
                  subscribers.map((sub) => (
                    <tr key={sub.id} className="hover:bg-slate-800/30 transition-colors">
                      <td className="px-6 py-4 text-white">{sub.email}</td>
                      <td className="px-6 py-4 text-slate-400">
                        {new Date(sub.subscribed_at).toLocaleDateString('es-ES', {
                          year: 'numeric',
                          month: 'long',
                          day: 'numeric'
                        })}
                      </td>
                      <td className="px-6 py-4">
                        <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                          sub.is_active
                            ? 'bg-green-500/20 text-green-400'
                            : 'bg-red-500/20 text-red-400'
                        }`}>
                          {sub.is_active ? 'Activo' : 'Inactivo'}
                        </span>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>

        {/* Email Campaign Info */}
        <div className="mt-8 bg-slate-900/50 border border-brand-500/20 rounded-xl p-6">
          <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
            <Mail className="text-brand-500" />
            Cómo Enviar Emails Masivos
          </h3>
          <ol className="space-y-2 text-slate-300">
            <li>1. Haz clic en "Copiar Emails" o "Exportar CSV" arriba</li>
            <li>2. Usa una plataforma de email marketing:</li>
            <ul className="ml-6 mt-2 space-y-1 text-sm">
              <li>• <strong>Resend</strong> (recomendado) - 100 emails/día gratis, $20/mes para 50k</li>
              <li>• <strong>Mailchimp</strong> - 500 contactos gratis</li>
              <li>• <strong>Brevo (Sendinblue)</strong> - 300 emails/día gratis</li>
              <li>• <strong>ConvertKit</strong> - 1,000 suscriptores gratis</li>
            </ul>
            <li className="mt-3">3. Importa los emails y crea tu campaña</li>
          </ol>

          <div className="mt-4 p-4 bg-slate-950/50 rounded-lg">
            <p className="text-sm text-slate-400 mb-2"><strong>Tip:</strong> Para automatizar con Resend:</p>
            <code className="text-xs text-brand-400">
              npm install resend<br/>
              // Luego crea un endpoint en /api/send-newsletter
            </code>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsletterAdmin;
