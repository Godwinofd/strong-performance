/**
 * Generate branded HTML email template for order confirmation
 */
export function generateOrderEmail(orderData) {
  const { orderNumber, customerName, customerEmail, items, total, shippingAddress } = orderData;

  // Calculate subtotal
  const subtotal = items.reduce((sum, item) => sum + (item.price * item.quantity), 0);

  return `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Order Confirmation - Strong Performance</title>
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
    }
    .header {
      background: linear-gradient(135deg, #DC2626 0%, #991B1B 100%);
      padding: 40px 30px;
      text-align: center;
    }
    .logo {
      max-width: 200px;
      height: auto;
      margin-bottom: 20px;
    }
    .header h1 {
      margin: 0;
      font-size: 28px;
      font-weight: 900;
      text-transform: uppercase;
      letter-spacing: 2px;
      color: #ffffff;
    }
    .content {
      padding: 40px 30px;
    }
    .order-number {
      background-color: rgba(220, 38, 38, 0.1);
      border: 2px solid #DC2626;
      border-radius: 12px;
      padding: 20px;
      text-align: center;
      margin-bottom: 30px;
    }
    .order-number-label {
      font-size: 12px;
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: 2px;
      color: #9CA3AF;
      margin-bottom: 8px;
    }
    .order-number-value {
      font-size: 32px;
      font-weight: 900;
      color: #DC2626;
      letter-spacing: 1px;
    }
    .greeting {
      font-size: 18px;
      margin-bottom: 20px;
      color: #ffffff;
    }
    .message {
      font-size: 14px;
      line-height: 1.6;
      color: #9CA3AF;
      margin-bottom: 30px;
    }
    .section-title {
      font-size: 16px;
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: 1px;
      margin-bottom: 20px;
      padding-bottom: 10px;
      border-bottom: 2px solid rgba(255, 255, 255, 0.1);
      color: #ffffff;
    }
    .order-items {
      margin-bottom: 30px;
    }
    .order-item {
      display: flex;
      justify-content: space-between;
      padding: 15px 0;
      border-bottom: 1px solid rgba(255, 255, 255, 0.05);
    }
    .item-details {
      flex: 1;
    }
    .item-name {
      font-size: 14px;
      font-weight: 700;
      color: #ffffff;
      margin-bottom: 4px;
    }
    .item-quantity {
      font-size: 12px;
      color: #9CA3AF;
    }
    .item-price {
      font-size: 14px;
      font-weight: 700;
      color: #ffffff;
      text-align: right;
    }
    .order-summary {
      background-color: rgba(255, 255, 255, 0.02);
      border-radius: 12px;
      padding: 20px;
      margin-bottom: 30px;
    }
    .summary-row {
      display: flex;
      justify-content: space-between;
      padding: 10px 0;
      font-size: 14px;
    }
    .summary-label {
      color: #9CA3AF;
      font-weight: 600;
      text-transform: uppercase;
      font-size: 12px;
      letter-spacing: 1px;
    }
    .summary-value {
      color: #ffffff;
      font-weight: 700;
    }
    .summary-total {
      border-top: 2px solid rgba(255, 255, 255, 0.1);
      margin-top: 10px;
      padding-top: 15px;
    }
    .summary-total .summary-label {
      font-size: 14px;
      color: #ffffff;
    }
    .summary-total .summary-value {
      font-size: 24px;
      color: #DC2626;
    }
    .shipping-info {
      background-color: rgba(255, 255, 255, 0.02);
      border-radius: 12px;
      padding: 20px;
      margin-bottom: 30px;
    }
    .shipping-address {
      font-size: 14px;
      line-height: 1.6;
      color: #9CA3AF;
    }
    .footer {
      background-color: #0A0A0A;
      padding: 30px;
      text-align: center;
      border-top: 1px solid rgba(255, 255, 255, 0.1);
    }
    .footer-text {
      font-size: 12px;
      color: #6B7280;
      margin-bottom: 15px;
      line-height: 1.5;
    }
    .footer-links {
      margin-top: 20px;
    }
    .footer-link {
      color: #DC2626;
      text-decoration: none;
      font-size: 12px;
      font-weight: 700;
      margin: 0 10px;
      text-transform: uppercase;
      letter-spacing: 1px;
    }
    .footer-link:hover {
      color: #EF4444;
    }
    @media only screen and (max-width: 600px) {
      .content {
        padding: 30px 20px;
      }
      .header {
        padding: 30px 20px;
      }
      .order-number-value {
        font-size: 24px;
      }
    }
  </style>
</head>
<body>
  <div class="email-container">
    <!-- Header -->
    <div class="header">
      <img src="https://strongperformance.training/images/logos/Strong%20performance%20white%20logo.png" alt="Strong Performance" class="logo">
      <h1>Order Confirmation</h1>
    </div>

    <!-- Content -->
    <div class="content">
      <!-- Order Number -->
      <div class="order-number">
        <div class="order-number-label">Order Number</div>
        <div class="order-number-value">${orderNumber}</div>
      </div>

      <!-- Greeting -->
      <div class="greeting">Hi ${customerName},</div>
      <div class="message">
        Thank you for your order! We've received your payment and are processing your order. 
        You'll receive a shipping confirmation email once your items are on their way.
      </div>

      <!-- Order Items -->
      <div class="section-title">Order Summary</div>
      <div class="order-items">
        ${items.map(item => `
          <div class="order-item">
            <div class="item-details">
              <div class="item-name">${item.name}</div>
              <div class="item-quantity">Qty: ${item.quantity}</div>
            </div>
            <div class="item-price">£${(item.price * item.quantity).toFixed(2)}</div>
          </div>
        `).join('')}
      </div>

      <!-- Order Summary -->
      <div class="order-summary">
        <div class="summary-row">
          <div class="summary-label">Subtotal</div>
          <div class="summary-value">£${subtotal.toFixed(2)}</div>
        </div>
        <div class="summary-row">
          <div class="summary-label">Shipping</div>
          <div class="summary-value">FREE</div>
        </div>
        <div class="summary-row summary-total">
          <div class="summary-label">Total</div>
          <div class="summary-value">£${total.toFixed(2)}</div>
        </div>
      </div>

      <!-- Shipping Information -->
      <div class="section-title">Shipping Address</div>
      <div class="shipping-info">
        <div class="shipping-address">
          <strong>${customerName}</strong><br>
          ${shippingAddress}<br>
          ${customerEmail}
        </div>
      </div>

      <div class="message">
        If you have any questions about your order, please don't hesitate to contact us. 
        We're here to help!
      </div>
    </div>

    <!-- Footer -->
    <div class="footer">
      <div class="footer-text">
        <strong>Strong Performance</strong><br>
        Elite Personal Training & Performance Apparel<br>
        © ${new Date().getFullYear()} Strong Performance. All rights reserved.
      </div>
      <div class="footer-links">
        <a href="#" class="footer-link">Contact Us</a>
        <a href="#" class="footer-link">Track Order</a>
        <a href="#" class="footer-link">Returns</a>
      </div>
      <div class="footer-text" style="margin-top: 20px;">
        This is an automated confirmation email. Please do not reply to this message.
      </div>
    </div>
  </div>
</body>
</html>
  `;
}
