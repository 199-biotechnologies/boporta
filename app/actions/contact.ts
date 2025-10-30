'use server';

import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  message: string;
}

interface ContactFormResponse {
  success: boolean;
  error?: string;
  messageId?: string;
}

export async function sendContactEmail(
  formData: ContactFormData
): Promise<ContactFormResponse> {
  // Validate inputs
  if (!formData.name || formData.name.length < 2) {
    return { success: false, error: 'Name must be at least 2 characters' };
  }

  if (!formData.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
    return { success: false, error: 'Valid email is required' };
  }

  if (!formData.phone || !/[\(]?[0-9]{3}[\)]?[\s\-]?[0-9]{3}[\s\-]?[0-9]{4}/.test(formData.phone)) {
    return { success: false, error: 'Valid phone number is required' };
  }

  if (!formData.message || formData.message.length < 10) {
    return { success: false, error: 'Message must be at least 10 characters' };
  }

  try {
    const { data, error } = await resend.emails.send({
      from: 'Bo Porta Contact Form <contact@bolivarporta.com>',
      to: ['info@boporta.com'],
      replyTo: formData.email,
      subject: `New Contact Form Submission from ${formData.name}`,
      text: `
New Contact Form Submission

Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone}

Message:
${formData.message}

---
Sent from bolivarporta.com contact form
${new Date().toLocaleString('en-US', { timeZone: 'America/New_York' })}
      `,
      html: `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <style>
    body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; line-height: 1.6; color: #0a1929; }
    .container { max-width: 600px; margin: 0 auto; padding: 20px; }
    .header { background: #0a1929; color: #f5f1e8; padding: 20px; text-align: center; }
    .content { background: #ffffff; padding: 30px; border: 1px solid #e5e5e5; }
    .field { margin-bottom: 20px; }
    .label { font-weight: 600; color: #64748b; font-size: 12px; text-transform: uppercase; letter-spacing: 0.05em; margin-bottom: 5px; }
    .value { font-size: 16px; color: #0a1929; }
    .message-box { background: #f8f9fa; padding: 20px; border-left: 4px solid #8b0000; margin-top: 20px; }
    .footer { text-align: center; padding: 20px; color: #64748b; font-size: 12px; }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h1 style="margin: 0; font-size: 24px; font-weight: 700;">NEW CONTACT FORM SUBMISSION</h1>
      <p style="margin: 10px 0 0 0; opacity: 0.8;">bolivarporta.com</p>
    </div>
    <div class="content">
      <div class="field">
        <div class="label">Name</div>
        <div class="value">${formData.name}</div>
      </div>
      <div class="field">
        <div class="label">Email</div>
        <div class="value"><a href="mailto:${formData.email}" style="color: #8b0000; text-decoration: none;">${formData.email}</a></div>
      </div>
      <div class="field">
        <div class="label">Phone</div>
        <div class="value"><a href="tel:${formData.phone.replace(/\D/g, '')}" style="color: #8b0000; text-decoration: none;">${formData.phone}</a></div>
      </div>
      <div class="message-box">
        <div class="label">Message</div>
        <div class="value" style="white-space: pre-wrap;">${formData.message}</div>
      </div>
    </div>
    <div class="footer">
      Sent on ${new Date().toLocaleString('en-US', {
        timeZone: 'America/New_York',
        dateStyle: 'full',
        timeStyle: 'short'
      })} (Miami time)
    </div>
  </div>
</body>
</html>
      `,
    });

    if (error) {
      console.error('Resend API error:', error);
      return {
        success: false,
        error: 'Failed to send email. Please call (305) 371-5060 instead.'
      };
    }

    return {
      success: true,
      messageId: data?.id
    };
  } catch (error) {
    console.error('Contact form error:', error);
    return {
      success: false,
      error: 'An unexpected error occurred. Please call (305) 371-5060 instead.'
    };
  }
}
