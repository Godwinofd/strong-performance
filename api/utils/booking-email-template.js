/**
 * Generate branded HTML email template for booking confirmation
 */
export function generateBookingEmail(data) {
    const { name, date, time, meetLink } = data;

    return `
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Booking Confirmed - Strong Performance</title>
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
        text-align: center;
      }
      .title {
        font-size: 24px;
        font-weight: 900;
        text-transform: uppercase;
        color: #ffffff;
        margin-bottom: 10px;
        letter-spacing: 1px;
      }
      .subtitle {
        color: #DC2626;
        font-size: 16px;
        font-weight: 700;
        text-transform: uppercase;
        letter-spacing: 2px;
        margin-bottom: 30px;
      }
      .card {
        background-color: rgba(255,255,255,0.05);
        border: 1px solid rgba(255,255,255,0.1);
        border-radius: 16px;
        padding: 30px;
        margin-bottom: 30px;
        text-align: left;
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
        font-size: 18px;
        font-weight: 600;
        margin-bottom: 20px;
      }
      .btn {
        display: inline-block;
        background-color: #DC2626;
        color: #ffffff;
        padding: 18px 40px;
        border-radius: 12px;
        text-decoration: none;
        font-weight: 800;
        text-transform: uppercase;
        letter-spacing: 1px;
        margin-top: 10px;
      }
      .btn:hover {
        background-color: #B91C1C;
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
        <div class="title">Strong Performance</div>
      </div>
      <div class="content">
        <div class="title">Booking Confirmed</div>
        <div class="subtitle">Performance Call</div>
        
        <p style="color: #aaa; margin-bottom: 30px; line-height: 1.6;">
            Hi ${name},<br>
            Your consultation is locked in. We look forward to discussing your goals.
        </p>

        <div class="card">
            <div class="label">Date</div>
            <div class="value">${date}</div>
            
            <div class="label">Time</div>
            <div class="value">${time}</div>
            
            <div class="label">Location</div>
            <div class="value">Google Meet</div>
        </div>

        <a href="${meetLink}" class="btn">Join Meeting</a>
        
        <p style="color: #666; font-size: 12px; margin-top: 30px;">
            Please ensure you are in a quiet environment for the call.
        </p>
      </div>
      <div class="footer">
        © ${new Date().getFullYear()} Strong Performance
      </div>
    </div>
  </body>
  </html>
    `;
}
