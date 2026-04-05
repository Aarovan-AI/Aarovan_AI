import nodemailer from 'nodemailer';

const escapeHtml = (value = '') =>
  String(value)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/\"/g, '&quot;')
    .replace(/'/g, '&#39;');

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { name, email, partnershipType, message } = req.body;

  if (!name || !email || !partnershipType || !message) {
    return res.status(400).json({ error: 'All fields are required' });
  }

  const safeName = escapeHtml(name);
  const safeEmail = escapeHtml(email);
  const safePartnershipType = escapeHtml(partnershipType);
  const safeMessage = escapeHtml(message).replace(/\r?\n/g, '<br/>');

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS
    }
  });

  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: process.env.RECIPIENT_EMAIL || 'aarovan.ai@gmail.com',
    subject: `New Inquiry from ${name} - ${partnershipType}`,
    text: `
New Contact Form Submission

Name: ${name}
Email: ${email}
Partnership Type: ${partnershipType}

Message:
${message}
    `.trim(),
    html: `
      <!doctype html>
      <html lang="en">
        <head>
          <meta charset="UTF-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <title>New Contact Form Submission</title>
        </head>
        <body style="margin:0; padding:0; background-color:#f4f7fb; font-family: 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; color:#1f2937;">
          <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="background:#f4f7fb; padding:28px 12px;">
            <tr>
              <td align="center">
                <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="max-width:680px; background:#ffffff; border-radius:14px; overflow:hidden; border:1px solid #e5e7eb; box-shadow:0 10px 35px rgba(15, 23, 42, 0.08);">
                  <tr>
                    <td style="padding:0;">
                      <div style="background:linear-gradient(130deg, #0f766e 0%, #2563eb 100%); padding:26px 30px; color:#ffffff;">
                        <p style="margin:0; font-size:12px; letter-spacing:0.1em; text-transform:uppercase; opacity:0.9;">Aarovan.ai</p>
                        <h1 style="margin:10px 0 0; font-size:24px; line-height:1.3; font-weight:700;">New Partnership Inquiry</h1>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td style="padding:24px 30px 10px;">
                      <p style="margin:0 0 16px; font-size:15px; line-height:1.7; color:#4b5563;">
                        A new contact request has been submitted through the website.
                      </p>
                    </td>
                  </tr>
                  <tr>
                    <td style="padding:0 30px 10px;">
                      <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="border-collapse:separate; border-spacing:0 10px;">
                        <tr>
                          <td style="width:160px; font-size:13px; color:#6b7280; font-weight:600; vertical-align:top;">Name</td>
                          <td style="font-size:15px; color:#111827; font-weight:500;">${safeName}</td>
                        </tr>
                        <tr>
                          <td style="width:160px; font-size:13px; color:#6b7280; font-weight:600; vertical-align:top;">Email</td>
                          <td style="font-size:15px; color:#111827; font-weight:500;">
                            <a href="mailto:${safeEmail}" style="color:#2563eb; text-decoration:none;">${safeEmail}</a>
                          </td>
                        </tr>
                        <tr>
                          <td style="width:160px; font-size:13px; color:#6b7280; font-weight:600; vertical-align:top;">Partnership Type</td>
                          <td style="font-size:15px; color:#111827; font-weight:500;">${safePartnershipType}</td>
                        </tr>
                      </table>
                    </td>
                  </tr>
                  <tr>
                    <td style="padding:6px 30px 28px;">
                      <p style="margin:0 0 10px; font-size:13px; color:#6b7280; font-weight:600;">Message</p>
                      <div style="background:#f8fafc; border:1px solid #e2e8f0; border-radius:10px; padding:16px; font-size:15px; line-height:1.7; color:#1f2937; white-space:normal;">
                        ${safeMessage}
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td style="padding:0 30px 24px;">
                      <p style="margin:0; font-size:12px; color:#9ca3af;">
                        Sent from the Aarovan.ai contact form.
                      </p>
                    </td>
                  </tr>
                </table>
              </td>
            </tr>
          </table>
        </body>
      </html>
    `,
    replyTo: email
  };

  try {
    await transporter.sendMail(mailOptions);
    res.status(200).json({ message: 'Email sent successfully' });
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({ error: 'Failed to send email' });
  }
}
