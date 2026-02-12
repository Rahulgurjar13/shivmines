import nodemailer from 'nodemailer';

export interface ContactData {
  name: string;
  company?: string;
  email: string;
  phone?: string;
  product?: string;
  quantity?: string;
  message?: string;
}

const createTransporter = () => {
  return nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: parseInt(process.env.SMTP_PORT || '587'),
    secure: false,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });
};

function getProductName(productSlug: string): string {
  const products: Record<string, string> = {
    'construction': 'Construction Grade Silica Sand',
    'construction-sand': 'Construction Grade Silica Sand',
    'industrial': 'Industrial Grade Silica Sand',
    'industrial-sand': 'Industrial Grade Silica Sand',
    'foundry': 'Foundry Grade Silica Sand',
    'foundry-sand': 'Foundry Grade Silica Sand',
    'glass': 'Glass Grade Silica Sand',
    'glass-sand': 'Glass Grade Silica Sand',
    'frac': 'Frac Sand (Oil & Gas)',
    'custom': 'Custom Specification',
  };
  return products[productSlug] || productSlug;
}

export const sendCustomerReceipt = async (data: ContactData): Promise<void> => {
  const transporter = createTransporter();
  const productName = data.product ? getProductName(data.product) : 'General Inquiry';
  const date = new Date().toLocaleDateString('en-IN', { year: 'numeric', month: 'long', day: 'numeric' });
  const refId = `REF-${Date.now().toString().slice(-8)}`;

  const mailOptions = {
    from: `"Shiv Minerals" <${process.env.SMTP_USER}>`,
    to: data.email,
    subject: `Inquiry Confirmation: ${productName} [${refId}]`,
    text: `Dear ${data.name},\n\nWe acknowledge receipt of your inquiry regarding ${productName}.\n\nReference ID: ${refId}\n\nOur team is currently reviewing your requirements and will contact you within one business day.\n\nSincerely,\nShiv Minerals`,
    html: `
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="utf-8">
        <style>
          body { margin: 0; padding: 0; font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif; background-color: #f5f5f5; color: #333333; }
          .container { max-width: 600px; margin: 0 auto; background-color: #ffffff; }
          .header { background-color: #111111; padding: 40px; text-align: left; }
          .logo { color: #ffffff; font-size: 20px; font-weight: 600; letter-spacing: 2px; text-transform: uppercase; margin: 0; }
          .content { padding: 50px 40px; }
          .greeting { font-size: 18px; font-weight: 600; margin-bottom: 20px; color: #111111; }
          .message { font-size: 15px; line-height: 1.6; color: #555555; margin-bottom: 40px; }
          .divider { border-top: 1px solid #eeeeee; margin: 30px 0; }
          .details-table { width: 100%; border-collapse: collapse; margin-bottom: 40px; }
          .details-table td { padding: 12px 0; border-bottom: 1px solid #f0f0f0; font-size: 14px; }
          .details-table td:first-child { width: 40%; color: #888888; }
          .details-table td:last-child { width: 60%; color: #111111; font-weight: 500; text-align: right; }
          .footer { background-color: #f9f9f9; padding: 40px; font-size: 12px; color: #999999; line-height: 1.5; border-top: 1px solid #eeeeee; }
          .button { display: inline-block; background-color: #111111; color: #ffffff; padding: 14px 28px; text-decoration: none; font-size: 13px; font-weight: 500; border-radius: 0; text-transform: uppercase; letter-spacing: 1px; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h1 class="logo">Shiv Minerals</h1>
          </div>
          <div class="content">
            <h2 class="greeting">Thank you for your inquiry.</h2>
            <p class="message">
              We have received your request regarding <strong>${productName}</strong>. Your inquiry has been logged in our system and assigned to a dedicated sales consultant. We typically respond to all commercial inquiries within one business day.
            </p>

            <div class="divider"></div>

            <table class="details-table">
              <tr>
                <td>Reference ID</td>
                <td>${refId}</td>
              </tr>
              <tr>
                <td>Date</td>
                <td>${date}</td>
              </tr>
              <tr>
                <td>Product Interest</td>
                <td>${productName}</td>
              </tr>
              ${data.quantity ? `
              <tr>
                <td>Target Quantity</td>
                <td>${data.quantity} Tons</td>
              </tr>
              ` : ''}
              ${data.company ? `
              <tr>
                <td>Company</td>
                <td>${data.company}</td>
              </tr>
              ` : ''}
            </table>

            <div style="text-align: center;">
              <a href="https://shivminerals.com" class="button">Visit Website</a>
            </div>
          </div>
          <div class="footer">
            <p>&copy; ${new Date().getFullYear()} Shiv Minerals. All rights reserved.</p>
            <p>Mining Lease No. 34/2006, Near Village - Raghuvanshi, Tehsil & District - Karauli, Rajasthan.</p>
            <p>This email was sent to ${data.email}. If you did not request this information, please ignore this email.</p>
          </div>
        </div>
      </body>
      </html>
    `,
  };

  await transporter.sendMail(mailOptions);
};

export const sendOwnerNotification = async (data: ContactData): Promise<void> => {
  const transporter = createTransporter();
  const productName = data.product ? getProductName(data.product) : 'Not specified';
  const timestamp = new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' });

  const mailOptions = {
    from: `"Shiv Minerals System" <${process.env.SMTP_USER}>`,
    to: process.env.OWNER_EMAIL,
    subject: `[Lead Alert] ${data.name} - ${productName}`,
    text: `New Lead.\nName: ${data.name}\nProduct: ${productName}`,
    html: `
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="utf-8">
        <style>
          body { margin: 0; padding: 0; font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif; background-color: #eeeeee; color: #333333; }
          .container { max-width: 600px; margin: 20px auto; background-color: #ffffff; border: 1px solid #dddddd; }
          .header { background-color: #ffffff; padding: 25px 30px; border-bottom: 1px solid #eeeeee; }
          .meta-info { font-size: 11px; color: #999999; text-transform: uppercase; letter-spacing: 1px; margin-bottom: 5px; }
          .title { font-size: 20px; font-weight: 600; color: #111111; margin: 0; }
          .content { padding: 30px; }
          .section-label { font-size: 11px; font-weight: 700; color: #999999; text-transform: uppercase; letter-spacing: 1px; margin-top: 25px; margin-bottom: 10px; }
          .info-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 20px; margin-bottom: 20px; }
          .info-item { margin-bottom: 5px; }
          .info-label { font-size: 12px; color: #888888; margin-bottom: 2px; }
          .info-value { font-size: 14px; color: #111111; font-weight: 500; }
          .message-box { background-color: #f9f9f9; padding: 20px; border-left: 2px solid #333333; font-style: italic; color: #555555; line-height: 1.5; font-size: 14px; margin-top: 10px; }
          .action-area { padding: 25px 30px; background-color: #f9f9f9; border-top: 1px solid #eeeeee; text-align: right; }
          .btn-primary { background-color: #111111; color: #ffffff; padding: 12px 24px; text-decoration: none; font-size: 13px; font-weight: 600; border-radius: 0; display: inline-block; }
          .contact-link { color: #0066cc; text-decoration: none; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <div class="meta-info">New Web Submission</div>
            <h1 class="title">${data.name}</h1>
          </div>
          <div class="content">
            
            <div class="section-label" style="margin-top: 0;">Lead Information</div>
            <div class="info-grid">
              <div class="info-item">
                <div class="info-label">Email</div>
                <div class="info-value"><a href="mailto:${data.email}" class="contact-link">${data.email}</a></div>
              </div>
              ${data.phone ? `
              <div class="info-item">
                <div class="info-label">Phone</div>
                <div class="info-value"><a href="tel:${data.phone}" class="contact-link">${data.phone}</a></div>
              </div>
              ` : ''}
              <div class="info-item">
                <div class="info-label">Company</div>
                <div class="info-value">${data.company || '-'}</div>
              </div>
               <div class="info-item">
                <div class="info-label">Date</div>
                <div class="info-value">${timestamp}</div>
              </div>
            </div>

            <div class="section-label">Product Requirement</div>
            <div class="info-grid">
              <div class="info-item">
                <div class="info-label">Product</div>
                <div class="info-value" style="color: #000000; font-weight: 600;">${productName}</div>
              </div>
              <div class="info-item">
                <div class="info-label">Quantity</div>
                <div class="info-value">${data.quantity ? `${data.quantity} Tons` : '-'}</div>
              </div>
            </div>

            ${data.message ? `
            <div class="section-label">Message</div>
            <div class="message-box">
              "${data.message}"
            </div>
            ` : ''}

          </div>
          <div class="action-area">
            <a href="mailto:${data.email}?subject=RE: Inquiry: ${productName}" class="btn-primary">Reply to Lead</a>
          </div>
        </div>
      </body>
      </html>
    `,
  };

  await transporter.sendMail(mailOptions);
};
