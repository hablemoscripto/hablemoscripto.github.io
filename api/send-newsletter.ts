import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req: any, res: any) {
  // Only allow POST requests
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { subject, content, emails } = req.body;

    // Validation
    if (!subject || !content || !emails || !Array.isArray(emails)) {
      return res.status(400).json({ error: 'Missing required fields' });
    }

    if (emails.length === 0) {
      return res.status(400).json({ error: 'No recipients provided' });
    }

    // Send email using Resend
    const { data, error } = await resend.emails.send({
      from: 'Hablemos Cripto <onboarding@resend.dev>', // Will change to your domain once DNS propagates
      to: emails,
      subject: subject,
      html: `
        <!DOCTYPE html>
        <html>
          <head>
            <meta charset="utf-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <style>
              body {
                font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
                line-height: 1.6;
                color: #333;
                max-width: 600px;
                margin: 0 auto;
                padding: 20px;
              }
              .header {
                background: linear-gradient(135deg, #ffc107 0%, #ff8f00 100%);
                padding: 30px;
                text-align: center;
                border-radius: 10px 10px 0 0;
              }
              .header h1 {
                color: #1e293b;
                margin: 0;
                font-size: 28px;
              }
              .content {
                background: #ffffff;
                padding: 30px;
                border: 1px solid #e2e8f0;
                border-top: none;
              }
              .footer {
                background: #0f172a;
                color: #94a3b8;
                padding: 20px;
                text-align: center;
                font-size: 12px;
                border-radius: 0 0 10px 10px;
              }
              .footer a {
                color: #ffc107;
                text-decoration: none;
              }
              .button {
                display: inline-block;
                padding: 12px 24px;
                background: #ffc107;
                color: #1e293b;
                text-decoration: none;
                border-radius: 8px;
                font-weight: bold;
                margin: 20px 0;
              }
            </style>
          </head>
          <body>
            <div class="header">
              <h1>📚 Hablemos Cripto</h1>
            </div>
            <div class="content">
              ${content}
            </div>
            <div class="footer">
              <p>Recibiste este email porque estás suscrito al newsletter de Hablemos Cripto.</p>
              <p>
                <a href="https://hablemoscripto.io">Visitar la plataforma</a> ·
                <a href="https://hablemoscripto.io/unsubscribe">Cancelar suscripción</a>
              </p>
              <p style="margin-top: 10px; color: #64748b;">© ${new Date().getFullYear()} Hablemos Cripto. Todos los derechos reservados.</p>
            </div>
          </body>
        </html>
      `,
    });

    if (error) {
      console.error('Resend error:', error);
      return res.status(400).json({ error: error.message });
    }

    return res.status(200).json({
      success: true,
      data,
      message: `Email sent successfully to ${emails.length} recipient(s)`
    });

  } catch (error: any) {
    console.error('Newsletter send error:', error);
    return res.status(500).json({
      error: 'Failed to send newsletter',
      details: error.message
    });
  }
}
