import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import Navbar from './Navbar';
import Footer from './Footer';
import { Shield, FileText } from 'lucide-react';

interface LegalPageProps {
  type: 'privacy' | 'terms';
}

const LegalPage: React.FC<LegalPageProps> = ({ type }) => {
  const navigate = useNavigate();

  const isPrivacy = type === 'privacy';
  const title = isPrivacy
    ? 'Política de Privacidad | Hablemos Cripto'
    : 'Términos de Uso | Hablemos Cripto';
  const description = isPrivacy
    ? 'Cómo Hablemos Cripto recopila, usa y protege tus datos en la plataforma educativa de criptomonedas.'
    : 'Términos de uso de la plataforma educativa Hablemos Cripto: cuentas, pagos, propiedad intelectual y más.';
  const path = isPrivacy ? '/privacidad' : '/terminos';
  const canonicalUrl = `https://hablemoscripto.io${path}`;

  return (
    <div className="min-h-screen bg-navy-950 text-white">
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
        <link rel="canonical" href={canonicalUrl} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:url" content={canonicalUrl} />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:url" content={canonicalUrl} />
      </Helmet>
      <Navbar />

      <main className="pt-24 md:pt-32 pb-20">
        <div className="container max-w-4xl mx-auto px-6">
          <div className="flex items-center gap-3 mb-8">
            {isPrivacy ? (
              <Shield className="text-brand-500" size={32} aria-hidden="true" />
            ) : (
              <FileText className="text-brand-500" size={32} aria-hidden="true" />
            )}
            <h1 className="text-3xl md:text-4xl font-heading font-bold">
              {isPrivacy ? 'Política de Privacidad' : 'Términos de Uso'}
            </h1>
          </div>

          <p className="text-navy-400 text-sm mb-12">
            Última actualización: 18 de febrero de 2026
          </p>

          <div className="prose prose-invert prose-slate max-w-none space-y-10 [&_h2]:text-xl [&_h2]:font-heading [&_h2]:font-bold [&_h2]:text-white [&_h2]:mb-4 [&_h3]:text-lg [&_h3]:font-semibold [&_h3]:text-navy-200 [&_h3]:mb-3 [&_p]:text-navy-300 [&_p]:leading-relaxed [&_p]:mb-4 [&_ul]:text-navy-300 [&_ul]:space-y-2 [&_ul]:list-disc [&_ul]:pl-6 [&_li]:leading-relaxed">
            {type === 'privacy' ? <PrivacyContent /> : <TermsContent />}
          </div>

          <div className="mt-16 pt-8 border-t border-white/10">
            <button
              onClick={() => navigate('/')}
              className="px-6 py-3 bg-brand-500 hover:bg-brand-400 text-navy-900 font-bold rounded-xl transition-colors"
            >
              Volver al inicio
            </button>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

function PrivacyContent() {
  return (
    <>
      <section>
        <h2>1. Introducción</h2>
        <p>
          Hablemos Cripto (&quot;nosotros&quot;, &quot;nuestro&quot; o &quot;la plataforma&quot;) se compromete a proteger la privacidad de sus usuarios. Esta Política de Privacidad describe cómo recopilamos, usamos, almacenamos y protegemos tu información personal cuando utilizas nuestra plataforma educativa en hablemoscripto.io.
        </p>
        <p>
          Al registrarte o usar nuestros servicios, aceptas las prácticas descritas en esta política.
        </p>
      </section>

      <section>
        <h2>2. Información que Recopilamos</h2>

        <h3>2.1 Información de registro</h3>
        <ul>
          <li>Dirección de correo electrónico</li>
          <li>Nombre (si se proporciona)</li>
          <li>Información de autenticación mediante Google OAuth (si eliges este método)</li>
        </ul>

        <h3>2.2 Datos de uso de la plataforma</h3>
        <ul>
          <li>Progreso en los cursos y lecciones completadas</li>
          <li>Resultados de quizzes y evaluaciones</li>
          <li>Logros y puntos de gamificación obtenidos</li>
          <li>Historial de rachas de estudio</li>
        </ul>

        <h3>2.3 Información de pago</h3>
        <ul>
          <li>Los pagos se procesan a través de Wompi, nuestro proveedor de pagos. No almacenamos datos de tarjetas de crédito ni información bancaria directamente en nuestros servidores.</li>
          <li>Registramos el estado de la transacción (completada, pendiente, fallida) y la referencia del pago para activar tu acceso premium.</li>
        </ul>

        <h3>2.4 Datos del newsletter</h3>
        <ul>
          <li>Si te suscribes a nuestro newsletter, almacenamos tu correo electrónico y tu preferencia de suscripción.</li>
          <li>La suscripción al newsletter es completamente voluntaria y puedes cancelarla en cualquier momento.</li>
        </ul>

        <h3>2.5 Datos del asistente de IA</h3>
        <ul>
          <li>Las consultas realizadas al asistente de IA (CBas) se envían a la API de Google Gemini para generar respuestas. No almacenamos permanentemente el contenido de estas conversaciones.</li>
        </ul>
      </section>

      <section>
        <h2>3. Cómo Usamos tu Información</h2>
        <p>Utilizamos la información recopilada para:</p>
        <ul>
          <li>Proporcionar y mantener tu cuenta en la plataforma</li>
          <li>Rastrear tu progreso educativo y personalizar tu experiencia de aprendizaje</li>
          <li>Procesar pagos y activar acceso a contenido premium</li>
          <li>Enviar comunicaciones relacionadas con tu cuenta (verificación de email, restablecimiento de contraseña)</li>
          <li>Enviar el newsletter si has dado tu consentimiento</li>
          <li>Mejorar nuestros servicios y contenido educativo</li>
        </ul>
      </section>

      <section>
        <h2>4. Almacenamiento y Seguridad</h2>
        <p>
          Tus datos se almacenan de forma segura en Supabase, una plataforma de infraestructura en la nube con encriptación en tránsito (TLS) y en reposo. La base de datos está alojada en servidores seguros con acceso restringido.
        </p>
        <p>
          Las contraseñas se almacenan de forma cifrada y nunca son accesibles en texto plano. Utilizamos políticas de seguridad a nivel de base de datos (Row Level Security) para garantizar que cada usuario solo pueda acceder a sus propios datos.
        </p>
      </section>

      <section>
        <h2>5. Cookies y Tecnologías Similares</h2>
        <p>
          Utilizamos almacenamiento local del navegador (localStorage) para mantener tu sesión iniciada y tus preferencias. No utilizamos cookies de seguimiento de terceros con fines publicitarios.
        </p>
        <p>
          Las cookies esenciales de autenticación son necesarias para el funcionamiento básico de la plataforma.
        </p>
      </section>

      <section>
        <h2>6. Compartir Información con Terceros</h2>
        <p>
          <strong>No vendemos, alquilamos ni compartimos tu información personal con terceros con fines comerciales.</strong>
        </p>
        <p>Compartimos datos únicamente con los siguientes proveedores de servicio, necesarios para el funcionamiento de la plataforma:</p>
        <ul>
          <li><strong>Supabase</strong> — Alojamiento de base de datos y autenticación</li>
          <li><strong>Google</strong> — Autenticación OAuth y API de Gemini para el asistente de IA</li>
          <li><strong>Wompi</strong> — Procesamiento de pagos</li>
          <li><strong>Resend</strong> — Envío de correos electrónicos (newsletter y transaccionales)</li>
          <li><strong>Vercel</strong> — Alojamiento de la aplicación web</li>
        </ul>
        <p>
          Cada proveedor opera bajo sus propias políticas de privacidad y cumple con estándares de seguridad de la industria.
        </p>
      </section>

      <section>
        <h2>7. Tus Derechos</h2>
        <p>Como usuario de Hablemos Cripto, tienes derecho a:</p>
        <ul>
          <li><strong>Acceder</strong> a tu información personal almacenada en la plataforma</li>
          <li><strong>Rectificar</strong> datos incorrectos o incompletos</li>
          <li><strong>Eliminar</strong> tu cuenta y datos asociados enviando una solicitud a nuestro equipo</li>
          <li><strong>Cancelar</strong> tu suscripción al newsletter en cualquier momento mediante el enlace de cancelación incluido en cada correo</li>
          <li><strong>Retirar tu consentimiento</strong> para el procesamiento de datos en cualquier momento</li>
        </ul>
        <p>
          Para ejercer cualquiera de estos derechos, contáctanos en <strong>hablemoscripto@gmail.com</strong>.
        </p>
      </section>

      <section>
        <h2>8. Menores de Edad</h2>
        <p>
          Nuestra plataforma está diseñada para usuarios mayores de 18 años. No recopilamos intencionalmente información de menores de edad. Si descubrimos que hemos recopilado datos de un menor, los eliminaremos de inmediato.
        </p>
      </section>

      <section>
        <h2>9. Cambios a esta Política</h2>
        <p>
          Nos reservamos el derecho de actualizar esta Política de Privacidad. Cualquier cambio significativo será notificado a través de la plataforma o por correo electrónico. El uso continuado de la plataforma después de dichos cambios constituye la aceptación de la política actualizada.
        </p>
      </section>

      <section>
        <h2>10. Contacto</h2>
        <p>
          Si tienes preguntas sobre esta Política de Privacidad o sobre el manejo de tus datos personales, puedes contactarnos en:
        </p>
        <ul>
          <li>Email: <strong>hablemoscripto@gmail.com</strong></li>
          <li>Twitter/X: <strong>@Crypto_CBas</strong></li>
        </ul>
      </section>
    </>
  );
}

function TermsContent() {
  return (
    <>
      <section>
        <h2>1. Aceptación de los Términos</h2>
        <p>
          Al acceder y utilizar la plataforma Hablemos Cripto (hablemoscripto.io), aceptas estos Términos de Uso en su totalidad. Si no estás de acuerdo con alguno de estos términos, no debes utilizar la plataforma.
        </p>
      </section>

      <section>
        <h2>2. Naturaleza del Servicio</h2>
        <p>
          Hablemos Cripto es una <strong>plataforma exclusivamente educativa</strong> sobre criptomonedas, blockchain y finanzas digitales. Nuestro contenido tiene como único propósito la educación y formación de nuestros usuarios.
        </p>

        <h3>2.1 Descargo de responsabilidad financiera</h3>
        <p>
          <strong>IMPORTANTE: Nada de lo publicado en esta plataforma constituye asesoría financiera, de inversión, fiscal o legal.</strong>
        </p>
        <ul>
          <li>No somos asesores financieros certificados ni pretendemos serlo.</li>
          <li>No recomendamos la compra, venta ni tenencia de ninguna criptomoneda o activo financiero en particular.</li>
          <li>No garantizamos rendimientos, ganancias ni resultados financieros de ningún tipo.</li>
          <li>Las criptomonedas son activos altamente volátiles. Puedes perder la totalidad de tu inversión.</li>
          <li>Siempre realiza tu propia investigación (DYOR) y consulta con un profesional financiero antes de tomar decisiones de inversión.</li>
        </ul>
      </section>

      <section>
        <h2>3. Cuentas de Usuario</h2>
        <h3>3.1 Registro</h3>
        <p>
          Para acceder al contenido de la plataforma, debes crear una cuenta proporcionando información veraz y actualizada. Eres responsable de mantener la confidencialidad de tus credenciales de acceso.
        </p>

        <h3>3.2 Responsabilidades del usuario</h3>
        <ul>
          <li>Proporcionar información veraz durante el registro</li>
          <li>Mantener la seguridad de tu contraseña y cuenta</li>
          <li>Notificarnos de inmediato sobre cualquier uso no autorizado de tu cuenta</li>
          <li>No compartir tu acceso con terceros</li>
        </ul>

        <h3>3.3 Suspensión de cuentas</h3>
        <p>
          Nos reservamos el derecho de suspender o eliminar cuentas que violen estos términos, incluyendo pero no limitado a: uso fraudulento, compartir credenciales, o conducta abusiva en la plataforma.
        </p>
      </section>

      <section>
        <h2>4. Contenido Premium y Pagos</h2>
        <h3>4.1 Acceso gratuito y premium</h3>
        <p>
          La plataforma ofrece contenido educativo gratuito (nivel principiante) y contenido premium (niveles intermedio y avanzado) que requiere un pago único para su desbloqueo.
        </p>

        <h3>4.2 Procesamiento de pagos</h3>
        <ul>
          <li>Los pagos se procesan de forma segura a través de Wompi.</li>
          <li>Una vez completado el pago, el acceso premium se activa automáticamente en tu cuenta.</li>
          <li>El pago otorga acceso de por vida al contenido premium disponible al momento de la compra.</li>
        </ul>

        <h3>4.3 Política de reembolsos</h3>
        <p>
          Dado que el contenido digital es accesible inmediatamente después del pago, los reembolsos se evaluarán caso por caso. Si tienes problemas con tu compra, contáctanos en hablemoscripto@gmail.com.
        </p>
      </section>

      <section>
        <h2>5. Propiedad Intelectual</h2>
        <p>
          Todo el contenido de la plataforma — incluyendo pero no limitado a textos, gráficos, imágenes, infografías, quizzes, estructura de cursos, diseño y código — es propiedad exclusiva de Hablemos Cripto y está protegido por leyes de propiedad intelectual.
        </p>
        <ul>
          <li>No puedes copiar, reproducir, distribuir ni crear obras derivadas del contenido sin autorización expresa por escrito.</li>
          <li>El acceso a la plataforma te otorga una licencia personal, no transferible y no exclusiva para consumir el contenido con fines educativos.</li>
          <li>Está prohibido el uso del contenido con fines comerciales sin autorización.</li>
        </ul>
      </section>

      <section>
        <h2>6. Asistente de IA (CBas)</h2>
        <p>
          La plataforma incluye un asistente de inteligencia artificial para apoyo educativo. Ten en cuenta que:
        </p>
        <ul>
          <li>Las respuestas del asistente son generadas por IA y pueden contener inexactitudes.</li>
          <li>El asistente no proporciona asesoría financiera ni recomendaciones de inversión.</li>
          <li>No debes tomar decisiones financieras basándote únicamente en las respuestas del asistente.</li>
          <li>Hablemos Cripto no se responsabiliza por las respuestas generadas por la IA.</li>
        </ul>
      </section>

      <section>
        <h2>7. Newsletter</h2>
        <p>
          Si te suscribes al newsletter, recibirás comunicaciones periódicas por correo electrónico con contenido educativo y actualizaciones de la plataforma. Puedes cancelar tu suscripción en cualquier momento mediante el enlace incluido en cada correo.
        </p>
      </section>

      <section>
        <h2>8. Limitación de Responsabilidad</h2>
        <p>
          Hablemos Cripto se proporciona &quot;tal como está&quot; y &quot;según disponibilidad&quot;. No garantizamos que la plataforma estará disponible de forma ininterrumpida o libre de errores.
        </p>
        <ul>
          <li>No somos responsables de pérdidas financieras derivadas de decisiones de inversión tomadas con base en nuestro contenido educativo.</li>
          <li>No somos responsables de interrupciones del servicio, pérdida de datos o problemas técnicos fuera de nuestro control.</li>
          <li>Nuestra responsabilidad máxima se limita al monto pagado por el usuario por el acceso premium.</li>
        </ul>
      </section>

      <section>
        <h2>9. Modificaciones</h2>
        <p>
          Nos reservamos el derecho de modificar estos Términos de Uso en cualquier momento. Los cambios serán publicados en esta página con la fecha de actualización correspondiente. El uso continuado de la plataforma después de las modificaciones constituye la aceptación de los nuevos términos.
        </p>
      </section>

      <section>
        <h2>10. Ley Aplicable</h2>
        <p>
          Estos términos se rigen por las leyes de la República de Colombia. Cualquier disputa será sometida a la jurisdicción de los tribunales competentes de Colombia.
        </p>
      </section>

      <section>
        <h2>11. Contacto</h2>
        <p>
          Para consultas sobre estos Términos de Uso, contáctanos en:
        </p>
        <ul>
          <li>Email: <strong>hablemoscripto@gmail.com</strong></li>
          <li>Twitter/X: <strong>@Crypto_CBas</strong></li>
        </ul>
      </section>
    </>
  );
}

export default LegalPage;
