import React from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import { Shield, FileText } from 'lucide-react';

interface LegalPageProps {
  type: 'privacy' | 'terms';
}

const LegalPage: React.FC<LegalPageProps> = ({ type }) => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <Navbar />

      <main className="pt-32 pb-20">
        <div className="container max-w-4xl mx-auto px-6">
          <div className="flex items-center gap-3 mb-8">
            {type === 'privacy' ? (
              <Shield className="text-brand-500" size={32} />
            ) : (
              <FileText className="text-brand-500" size={32} />
            )}
            <h1 className="text-3xl md:text-4xl font-heading font-bold">
              {type === 'privacy' ? 'Politica de Privacidad' : 'Terminos de Uso'}
            </h1>
          </div>

          <p className="text-slate-500 text-sm mb-12">
            Ultima actualizacion: 18 de febrero de 2026
          </p>

          <div className="prose prose-invert prose-slate max-w-none space-y-10 [&_h2]:text-xl [&_h2]:font-heading [&_h2]:font-bold [&_h2]:text-white [&_h2]:mb-4 [&_h3]:text-lg [&_h3]:font-semibold [&_h3]:text-slate-200 [&_h3]:mb-3 [&_p]:text-slate-300 [&_p]:leading-relaxed [&_p]:mb-4 [&_ul]:text-slate-300 [&_ul]:space-y-2 [&_ul]:list-disc [&_ul]:pl-6 [&_li]:leading-relaxed">
            {type === 'privacy' ? <PrivacyContent /> : <TermsContent />}
          </div>

          <div className="mt-16 pt-8 border-t border-white/10">
            <button
              onClick={() => navigate('/')}
              className="px-6 py-3 bg-brand-500 hover:bg-brand-400 text-slate-900 font-bold rounded-xl transition-colors"
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
        <h2>1. Introduccion</h2>
        <p>
          Hablemos Cripto (&quot;nosotros&quot;, &quot;nuestro&quot; o &quot;la plataforma&quot;) se compromete a proteger la privacidad de sus usuarios. Esta Politica de Privacidad describe como recopilamos, usamos, almacenamos y protegemos tu informacion personal cuando utilizas nuestra plataforma educativa en hablemoscripto.io.
        </p>
        <p>
          Al registrarte o usar nuestros servicios, aceptas las practicas descritas en esta politica.
        </p>
      </section>

      <section>
        <h2>2. Informacion que Recopilamos</h2>

        <h3>2.1 Informacion de registro</h3>
        <ul>
          <li>Direccion de correo electronico</li>
          <li>Nombre (si se proporciona)</li>
          <li>Informacion de autenticacion mediante Google OAuth (si eliges este metodo)</li>
        </ul>

        <h3>2.2 Datos de uso de la plataforma</h3>
        <ul>
          <li>Progreso en los cursos y lecciones completadas</li>
          <li>Resultados de quizzes y evaluaciones</li>
          <li>Logros y puntos de gamificacion obtenidos</li>
          <li>Historial de rachas de estudio</li>
        </ul>

        <h3>2.3 Informacion de pago</h3>
        <ul>
          <li>Los pagos se procesan a traves de Wompi, nuestro proveedor de pagos. No almacenamos datos de tarjetas de credito ni informacion bancaria directamente en nuestros servidores.</li>
          <li>Registramos el estado de la transaccion (completada, pendiente, fallida) y la referencia del pago para activar tu acceso premium.</li>
        </ul>

        <h3>2.4 Datos del newsletter</h3>
        <ul>
          <li>Si te suscribes a nuestro newsletter, almacenamos tu correo electronico y tu preferencia de suscripcion.</li>
          <li>La suscripcion al newsletter es completamente voluntaria y puedes cancelarla en cualquier momento.</li>
        </ul>

        <h3>2.5 Datos del asistente de IA</h3>
        <ul>
          <li>Las consultas realizadas al asistente de IA (CBas) se envian a la API de Google Gemini para generar respuestas. No almacenamos permanentemente el contenido de estas conversaciones.</li>
        </ul>
      </section>

      <section>
        <h2>3. Como Usamos tu Informacion</h2>
        <p>Utilizamos la informacion recopilada para:</p>
        <ul>
          <li>Proporcionar y mantener tu cuenta en la plataforma</li>
          <li>Rastrear tu progreso educativo y personalizar tu experiencia de aprendizaje</li>
          <li>Procesar pagos y activar acceso a contenido premium</li>
          <li>Enviar comunicaciones relacionadas con tu cuenta (verificacion de email, restablecimiento de contrasena)</li>
          <li>Enviar el newsletter si has dado tu consentimiento</li>
          <li>Mejorar nuestros servicios y contenido educativo</li>
        </ul>
      </section>

      <section>
        <h2>4. Almacenamiento y Seguridad</h2>
        <p>
          Tus datos se almacenan de forma segura en Supabase, una plataforma de infraestructura en la nube con encriptacion en transito (TLS) y en reposo. La base de datos esta alojada en servidores seguros con acceso restringido.
        </p>
        <p>
          Las contrasenas se almacenan de forma cifrada y nunca son accesibles en texto plano. Utilizamos politicas de seguridad a nivel de base de datos (Row Level Security) para garantizar que cada usuario solo pueda acceder a sus propios datos.
        </p>
      </section>

      <section>
        <h2>5. Cookies y Tecnologias Similares</h2>
        <p>
          Utilizamos almacenamiento local del navegador (localStorage) para mantener tu sesion iniciada y tus preferencias. No utilizamos cookies de seguimiento de terceros con fines publicitarios.
        </p>
        <p>
          Las cookies esenciales de autenticacion son necesarias para el funcionamiento basico de la plataforma.
        </p>
      </section>

      <section>
        <h2>6. Compartir Informacion con Terceros</h2>
        <p>
          <strong>No vendemos, alquilamos ni compartimos tu informacion personal con terceros con fines comerciales.</strong>
        </p>
        <p>Compartimos datos unicamente con los siguientes proveedores de servicio, necesarios para el funcionamiento de la plataforma:</p>
        <ul>
          <li><strong>Supabase</strong> — Alojamiento de base de datos y autenticacion</li>
          <li><strong>Google</strong> — Autenticacion OAuth y API de Gemini para el asistente de IA</li>
          <li><strong>Wompi</strong> — Procesamiento de pagos</li>
          <li><strong>Resend</strong> — Envio de correos electronicos (newsletter y transaccionales)</li>
          <li><strong>Vercel</strong> — Alojamiento de la aplicacion web</li>
        </ul>
        <p>
          Cada proveedor opera bajo sus propias politicas de privacidad y cumple con estandares de seguridad de la industria.
        </p>
      </section>

      <section>
        <h2>7. Tus Derechos</h2>
        <p>Como usuario de Hablemos Cripto, tienes derecho a:</p>
        <ul>
          <li><strong>Acceder</strong> a tu informacion personal almacenada en la plataforma</li>
          <li><strong>Rectificar</strong> datos incorrectos o incompletos</li>
          <li><strong>Eliminar</strong> tu cuenta y datos asociados enviando una solicitud a nuestro equipo</li>
          <li><strong>Cancelar</strong> tu suscripcion al newsletter en cualquier momento mediante el enlace de cancelacion incluido en cada correo</li>
          <li><strong>Retirar tu consentimiento</strong> para el procesamiento de datos en cualquier momento</li>
        </ul>
        <p>
          Para ejercer cualquiera de estos derechos, contactanos en <strong>hablemoscripto@gmail.com</strong>.
        </p>
      </section>

      <section>
        <h2>8. Menores de Edad</h2>
        <p>
          Nuestra plataforma esta disenada para usuarios mayores de 18 anos. No recopilamos intencionalmente informacion de menores de edad. Si descubrimos que hemos recopilado datos de un menor, los eliminaremos de inmediato.
        </p>
      </section>

      <section>
        <h2>9. Cambios a esta Politica</h2>
        <p>
          Nos reservamos el derecho de actualizar esta Politica de Privacidad. Cualquier cambio significativo sera notificado a traves de la plataforma o por correo electronico. El uso continuado de la plataforma despues de dichos cambios constituye la aceptacion de la politica actualizada.
        </p>
      </section>

      <section>
        <h2>10. Contacto</h2>
        <p>
          Si tienes preguntas sobre esta Politica de Privacidad o sobre el manejo de tus datos personales, puedes contactarnos en:
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
        <h2>1. Aceptacion de los Terminos</h2>
        <p>
          Al acceder y utilizar la plataforma Hablemos Cripto (hablemoscripto.io), aceptas estos Terminos de Uso en su totalidad. Si no estas de acuerdo con alguno de estos terminos, no debes utilizar la plataforma.
        </p>
      </section>

      <section>
        <h2>2. Naturaleza del Servicio</h2>
        <p>
          Hablemos Cripto es una <strong>plataforma exclusivamente educativa</strong> sobre criptomonedas, blockchain y finanzas digitales. Nuestro contenido tiene como unico proposito la educacion y formacion de nuestros usuarios.
        </p>

        <h3>2.1 Descargo de responsabilidad financiera</h3>
        <p>
          <strong>IMPORTANTE: Nada de lo publicado en esta plataforma constituye asesoria financiera, de inversion, fiscal o legal.</strong>
        </p>
        <ul>
          <li>No somos asesores financieros certificados ni pretendemos serlo.</li>
          <li>No recomendamos la compra, venta ni tenencia de ninguna criptomoneda o activo financiero en particular.</li>
          <li>No garantizamos rendimientos, ganancias ni resultados financieros de ningun tipo.</li>
          <li>Las criptomonedas son activos altamente volatiles. Puedes perder la totalidad de tu inversion.</li>
          <li>Siempre realiza tu propia investigacion (DYOR) y consulta con un profesional financiero antes de tomar decisiones de inversion.</li>
        </ul>
      </section>

      <section>
        <h2>3. Cuentas de Usuario</h2>
        <h3>3.1 Registro</h3>
        <p>
          Para acceder al contenido de la plataforma, debes crear una cuenta proporcionando informacion veraz y actualizada. Eres responsable de mantener la confidencialidad de tus credenciales de acceso.
        </p>

        <h3>3.2 Responsabilidades del usuario</h3>
        <ul>
          <li>Proporcionar informacion veraz durante el registro</li>
          <li>Mantener la seguridad de tu contrasena y cuenta</li>
          <li>Notificarnos de inmediato sobre cualquier uso no autorizado de tu cuenta</li>
          <li>No compartir tu acceso con terceros</li>
        </ul>

        <h3>3.3 Suspension de cuentas</h3>
        <p>
          Nos reservamos el derecho de suspender o eliminar cuentas que violen estos terminos, incluyendo pero no limitado a: uso fraudulento, compartir credenciales, o conducta abusiva en la plataforma.
        </p>
      </section>

      <section>
        <h2>4. Contenido Premium y Pagos</h2>
        <h3>4.1 Acceso gratuito y premium</h3>
        <p>
          La plataforma ofrece contenido educativo gratuito (nivel principiante) y contenido premium (niveles intermedio y avanzado) que requiere un pago unico para su desbloqueo.
        </p>

        <h3>4.2 Procesamiento de pagos</h3>
        <ul>
          <li>Los pagos se procesan de forma segura a traves de Wompi.</li>
          <li>Una vez completado el pago, el acceso premium se activa automaticamente en tu cuenta.</li>
          <li>El pago otorga acceso de por vida al contenido premium disponible al momento de la compra.</li>
        </ul>

        <h3>4.3 Politica de reembolsos</h3>
        <p>
          Dado que el contenido digital es accesible inmediatamente despues del pago, los reembolsos se evaluaran caso por caso. Si tienes problemas con tu compra, contactanos en hablemoscripto@gmail.com.
        </p>
      </section>

      <section>
        <h2>5. Propiedad Intelectual</h2>
        <p>
          Todo el contenido de la plataforma — incluyendo pero no limitado a textos, graficos, imagenes, infografias, quizzes, estructura de cursos, diseno y codigo — es propiedad exclusiva de Hablemos Cripto y esta protegido por leyes de propiedad intelectual.
        </p>
        <ul>
          <li>No puedes copiar, reproducir, distribuir ni crear obras derivadas del contenido sin autorizacion expresa por escrito.</li>
          <li>El acceso a la plataforma te otorga una licencia personal, no transferible y no exclusiva para consumir el contenido con fines educativos.</li>
          <li>Esta prohibido el uso del contenido con fines comerciales sin autorizacion.</li>
        </ul>
      </section>

      <section>
        <h2>6. Asistente de IA (CBas)</h2>
        <p>
          La plataforma incluye un asistente de inteligencia artificial para apoyo educativo. Ten en cuenta que:
        </p>
        <ul>
          <li>Las respuestas del asistente son generadas por IA y pueden contener inexactitudes.</li>
          <li>El asistente no proporciona asesoria financiera ni recomendaciones de inversion.</li>
          <li>No debes tomar decisiones financieras basandote unicamente en las respuestas del asistente.</li>
          <li>Hablemos Cripto no se responsabiliza por las respuestas generadas por la IA.</li>
        </ul>
      </section>

      <section>
        <h2>7. Newsletter</h2>
        <p>
          Si te suscribes al newsletter, recibiras comunicaciones periodicas por correo electronico con contenido educativo y actualizaciones de la plataforma. Puedes cancelar tu suscripcion en cualquier momento mediante el enlace incluido en cada correo.
        </p>
      </section>

      <section>
        <h2>8. Limitacion de Responsabilidad</h2>
        <p>
          Hablemos Cripto se proporciona &quot;tal como esta&quot; y &quot;segun disponibilidad&quot;. No garantizamos que la plataforma estara disponible de forma ininterrumpida o libre de errores.
        </p>
        <ul>
          <li>No somos responsables de perdidas financieras derivadas de decisiones de inversion tomadas con base en nuestro contenido educativo.</li>
          <li>No somos responsables de interrupciones del servicio, perdida de datos o problemas tecnicos fuera de nuestro control.</li>
          <li>Nuestra responsabilidad maxima se limita al monto pagado por el usuario por el acceso premium.</li>
        </ul>
      </section>

      <section>
        <h2>9. Modificaciones</h2>
        <p>
          Nos reservamos el derecho de modificar estos Terminos de Uso en cualquier momento. Los cambios seran publicados en esta pagina con la fecha de actualizacion correspondiente. El uso continuado de la plataforma despues de las modificaciones constituye la aceptacion de los nuevos terminos.
        </p>
      </section>

      <section>
        <h2>10. Ley Aplicable</h2>
        <p>
          Estos terminos se rigen por las leyes de la Republica de Colombia. Cualquier disputa sera sometida a la jurisdiccion de los tribunales competentes de Colombia.
        </p>
      </section>

      <section>
        <h2>11. Contacto</h2>
        <p>
          Para consultas sobre estos Terminos de Uso, contactanos en:
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
