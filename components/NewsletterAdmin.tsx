import React, { useState, useEffect } from 'react';
import { supabase } from '../lib/supabase';
import { Download, Mail, Users, Trash2, RefreshCw, Send, X } from 'lucide-react';
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
  const [showEmailComposer, setShowEmailComposer] = useState(false);
  const [emailSubject, setEmailSubject] = useState('');
  const [emailContent, setEmailContent] = useState('');
  const [sending, setSending] = useState(false);
  const [sendStatus, setSendStatus] = useState<{ type: 'success' | 'error', message: string } | null>(null);
  const [isAdmin, setIsAdmin] = useState(false);
  const [checkingAdmin, setCheckingAdmin] = useState(true);
  const { user } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      navigate('/');
      return;
    }
    checkAdminStatus();
  }, [user, navigate]);

  const checkAdminStatus = async () => {
    setCheckingAdmin(true);
    try {
      const { data, error } = await supabase
        .from('profiles')
        .select('is_admin')
        .eq('id', user?.id)
        .single();

      if (error) throw error;

      if (!data?.is_admin) {
        setError('Acceso denegado. Solo administradores pueden acceder a esta página.');
        setTimeout(() => navigate('/education'), 3000);
        return;
      }

      setIsAdmin(true);
      fetchSubscribers();
    } catch (err: any) {
      console.error('Error checking admin status:', err);
      setError('Error verificando permisos de administrador');
      setTimeout(() => navigate('/education'), 3000);
    } finally {
      setCheckingAdmin(false);
    }
  };

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

  const handleSendNewsletter = async () => {
    if (!emailSubject.trim() || !emailContent.trim()) {
      setSendStatus({ type: 'error', message: 'Por favor completa todos los campos' });
      return;
    }

    const activeEmails = subscribers
      .filter(sub => sub.is_active)
      .map(sub => sub.email);

    if (activeEmails.length === 0) {
      setSendStatus({ type: 'error', message: 'No hay suscriptores activos' });
      return;
    }

    setSending(true);
    setSendStatus(null);

    try {
      // Get auth token from Supabase session
      const { data: { session } } = await supabase.auth.getSession();

      if (!session) {
        throw new Error('No hay sesión activa');
      }

      const response = await fetch(`${import.meta.env.VITE_SUPABASE_URL}/functions/v1/send-newsletter`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${session.access_token}`,
        },
        body: JSON.stringify({
          subject: emailSubject,
          content: emailContent,
          emails: activeEmails,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Error al enviar');
      }

      setSendStatus({
        type: 'success',
        message: `¡Newsletter enviado exitosamente a ${activeEmails.length} suscriptores!`
      });

      // Reset form
      setEmailSubject('');
      setEmailContent('');

      // Close composer after 3 seconds
      setTimeout(() => {
        setShowEmailComposer(false);
        setSendStatus(null);
      }, 3000);

    } catch (error: any) {
      console.error('Send newsletter error:', error);
      setSendStatus({
        type: 'error',
        message: error.message || 'Error al enviar el newsletter'
      });
    } finally {
      setSending(false);
    }
  };

  const activeSubscribers = subscribers.filter(sub => sub.is_active);

  if (checkingAdmin || (loading && isAdmin)) {
    return (
      <div className="min-h-screen bg-slate-950 flex items-center justify-center">
        <div className="text-white text-center">
          <RefreshCw className="animate-spin mx-auto mb-4" size={32} />
          <p>{checkingAdmin ? 'Verificando permisos...' : 'Cargando suscriptores...'}</p>
        </div>
      </div>
    );
  }

  // Show error and redirect if not admin
  if (!isAdmin) {
    return (
      <div className="min-h-screen bg-slate-950 flex items-center justify-center">
        <div className="bg-red-500/10 border border-red-500/20 rounded-xl p-8 max-w-md text-center">
          <p className="text-red-400 mb-4">{error || 'Acceso denegado'}</p>
          <p className="text-slate-400 text-sm">Redirigiendo...</p>
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
            onClick={() => setShowEmailComposer(true)}
            disabled={activeSubscribers.length === 0}
            className="flex items-center gap-2 px-6 py-3 bg-green-600 hover:bg-green-500 text-white font-bold rounded-xl transition-colors disabled:opacity-50 disabled:cursor-not-allowed shadow-lg shadow-green-600/20"
          >
            <Send size={20} />
            Enviar Newsletter
          </button>

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

      </div>

      {/* Email Composer Modal */}
      {showEmailComposer && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-slate-950/90 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="bg-slate-900 border border-slate-700 w-full max-w-3xl rounded-2xl shadow-2xl overflow-hidden animate-in zoom-in-95 duration-200 max-h-[90vh] flex flex-col">
            {/* Header */}
            <div className="p-6 border-b border-slate-800 flex justify-between items-center bg-slate-800/50">
              <h3 className="font-heading font-bold text-white text-xl flex items-center gap-2">
                <Send className="text-green-500" size={24} />
                Enviar Newsletter
              </h3>
              <button
                onClick={() => {
                  setShowEmailComposer(false);
                  setSendStatus(null);
                }}
                className="text-slate-400 hover:text-white transition-colors"
              >
                <X size={24} />
              </button>
            </div>

            {/* Content */}
            <div className="p-6 space-y-6 overflow-y-auto flex-1">
              {/* Recipient Info */}
              <div className="bg-slate-950/50 border border-slate-800 rounded-xl p-4">
                <p className="text-sm text-slate-300">
                  <strong>Destinatarios:</strong> {activeSubscribers.length} suscriptores activos
                </p>
              </div>

              {/* Subject */}
              <div>
                <label className="block text-sm font-medium text-slate-300 mb-2">
                  Asunto del Email
                </label>
                <input
                  type="text"
                  value={emailSubject}
                  onChange={(e) => setEmailSubject(e.target.value)}
                  placeholder="Ej: Nueva actualización de Hablemos Cripto"
                  className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-xl text-white placeholder-slate-500 focus:border-brand-500 focus:outline-none transition-colors"
                />
              </div>

              {/* Content */}
              <div>
                <label className="block text-sm font-medium text-slate-300 mb-2">
                  Contenido (HTML soportado)
                </label>
                <textarea
                  value={emailContent}
                  onChange={(e) => setEmailContent(e.target.value)}
                  placeholder="Escribe tu mensaje aquí... Puedes usar HTML: <h2>, <p>, <strong>, <a href=''>, etc."
                  rows={12}
                  className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-xl text-white placeholder-slate-500 focus:border-brand-500 focus:outline-none transition-colors resize-none font-mono text-sm"
                />
                <p className="text-xs text-slate-500 mt-2">
                  Tip: Tu email se enviará con el template de Hablemos Cripto (header, footer, etc.)
                </p>
              </div>

              {/* Status Message */}
              {sendStatus && (
                <div className={`p-4 rounded-xl border ${
                  sendStatus.type === 'success'
                    ? 'bg-green-500/10 border-green-500/20 text-green-400'
                    : 'bg-red-500/10 border-red-500/20 text-red-400'
                }`}>
                  {sendStatus.message}
                </div>
              )}
            </div>

            {/* Footer */}
            <div className="p-6 border-t border-slate-800 flex justify-end gap-4 bg-slate-800/50">
              <button
                onClick={() => {
                  setShowEmailComposer(false);
                  setSendStatus(null);
                }}
                disabled={sending}
                className="px-6 py-3 bg-slate-800 hover:bg-slate-700 text-white font-medium rounded-xl transition-colors disabled:opacity-50"
              >
                Cancelar
              </button>
              <button
                onClick={handleSendNewsletter}
                disabled={sending || !emailSubject.trim() || !emailContent.trim()}
                className="px-6 py-3 bg-green-600 hover:bg-green-500 text-white font-bold rounded-xl transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
              >
                {sending ? (
                  <>
                    <RefreshCw size={20} className="animate-spin" />
                    Enviando...
                  </>
                ) : (
                  <>
                    <Send size={20} />
                    Enviar Newsletter
                  </>
                )}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default NewsletterAdmin;
