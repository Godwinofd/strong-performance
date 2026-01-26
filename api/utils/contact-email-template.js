/**
 * Generate branded HTML email template for contact form inquiries
 */
export function generateContactAdminEmail(data) {
    const { name, email, goals } = data;

    return `
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>New Inquiry - Strong Performance</title>
    <style>
      body {
        margin: 0;
        padding: 0;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
        background-color: #0A0A0A;
        color: #ffffff;
      }
      .email-container {
        max-width: 600px;
        margin: 0 auto;
        background-color: #0D0D0D;
        border: 1px solid #333;
        border-radius: 20px;
        overflow: hidden;
      }
      .header {
        background-color: #000000;
        padding: 40px 30px;
        text-align: center;
        border-bottom: 2px solid #DC2626;
      }
      .content {
        padding: 40px 30px;
      }
      .title {
        font-size: 24px;
        font-weight: 900;
        text-transform: uppercase;
        color: #ffffff;
        margin-bottom: 10px;
        letter-spacing: 1px;
        text-align: center;
      }
      .subtitle {
        color: #DC2626;
        font-size: 14px;
        font-weight: 700;
        text-transform: uppercase;
        letter-spacing: 2px;
        margin-bottom: 30px;
        text-align: center;
      }
      .card {
        background-color: rgba(255,255,255,0.05);
        border: 1px solid rgba(255,255,255,0.1);
        border-radius: 16px;
        padding: 30px;
        margin-bottom: 30px;
      }
      .field {
        margin-bottom: 20px;
      }
      .label {
        color: #888;
        font-size: 10px;
        text-transform: uppercase;
        letter-spacing: 1px;
        margin-bottom: 5px;
        font-weight: 700;
      }
      .value {
        color: #fff;
        font-size: 16px;
        font-weight: 500;
        line-height: 1.5;
      }
      .footer {
        padding: 30px;
        text-align: center;
        color: #666;
        font-size: 12px;
        border-top: 1px solid #333;
      }
    </style>
  </head>
  <body>
    <div class="email-container">
      <div class="header">
        <h1 style="color: #fff; text-transform: uppercase; font-size: 20px; margin:0;">Strong Performance</h1>
      </div>
      <div class="content">
        <div class="title">New Website Inquiry</div>
        <div class="subtitle">Contact Form</div>

        <div class="card">
            <div class="field">
                <div class="label">Name</div>
                <div class="value">${name}</div>
            </div>
            
            <div class="field">
                <div class="label">Email</div>
                <div class="value"><a href="mailto:${email}" style="color: #DC2626; text-decoration: none;">${email}</a></div>
            </div>

            <div class="field" style="margin-bottom: 0;">
                <div class="label">Message / Goals</div>
                <div class="value" style="white-space: pre-wrap;">${goals}</div>
            </div>
        </div>
        
        <div style="text-align: center;">
             <a href="mailto:${email}" style="display: inline-block; background-color: #DC2626; color: white; padding: 15px 30px; text-decoration: none; border-radius: 8px; font-weight: bold; text-transform: uppercase;">Reply Now</a>
        </div>

      </div>
      <div class="footer">
        © ${new Date().getFullYear()} Strong Performance
      </div>
    </div>
  </body>
  </html>
    `;
}

export function generateContactUserEmail(data) {
    const { name } = data;
    return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Message Received - Strong Performance</title>
      <style>
        body { margin: 0; padding: 0; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif; background-color: #0A0A0A; color: #ffffff; }
        .email-container { max-width: 600px; margin: 0 auto; background-color: #0D0D0D; border: 1px solid #333; border-radius: 20px; overflow: hidden; }
        .header { background-color: #000; padding: 40px 30px; text-align: center; border-bottom: 2px solid #DC2626; }
        .content { padding: 40px 30px; text-align: center; }
        .title { font-size: 24px; font-weight: 900; text-transform: uppercase; color: #fff; margin-bottom: 20px; letter-spacing: 1px; }
        .text { color: #aaa; font-size: 16px; line-height: 1.6; margin-bottom: 30px; }
        .btn { display: inline-block; border: 1px solid #333; color: #fff; padding: 15px 30px; border-radius: 8px; text-decoration: none; font-weight: 700; text-transform: uppercase; transition: all 0.2s; }
        .btn:hover { border-color: #DC2626; color: #DC2626; }
        .footer { padding: 30px; text-align: center; color: #666; font-size: 12px; border-top: 1px solid #333; }
      </style>
    </head>
    <body>
      <div class="email-container">
        <div class="header">
          <h1 style="color: #fff; text-transform: uppercase; font-size: 20px; margin:0;">Strong Performance</h1>
        </div>
        <div class="content">
          <div class="title">Message Received</div>
          <div class="text">
            Hi ${name},<br><br>
            Thanks for reaching out. We have successfully received your inquiry.<br>
            A member of our team receives every message directly and will review your details shortly.
          </div>
          
          <a href="https://strongperformance.training" class="btn">Return to Website</a>
        </div>
        <div class="footer">
          © ${new Date().getFullYear()} Strong Performance
        </div>
      </div>
    </body>
    </html>
    `;
}
