# Order Fulfillment System - Setup Guide

## 🎯 Overview

Your order fulfillment system is now fully implemented! When customers complete a purchase, they'll automatically receive a branded email confirmation with:

✅ Unique order number (format: `SP-20260126-A7F3`)  
✅ Complete order summary with all items  
✅ Itemized receipt with pricing  
✅ Shipping address details  
✅ Strong Performance branding  

---

## 📋 Setup Instructions

### Step 1: Get Your Gmail App Password

1. Go to your Google Account: https://myaccount.google.com
2. Click **Security** in the left sidebar
3. Enable **2-Step Verification** (if not already enabled)
4. Go back to Security and click **App passwords**
5. Select:
   - App: **Mail**
   - Device: **Other (Custom name)** → Type "Strong Performance"
6. Click **Generate**
7. Copy the **16-character password** (format: `xxxx xxxx xxxx xxxx`)

### Step 2: Get Your Stripe API Keys

1. Go to Stripe Dashboard: https://dashboard.stripe.com/apikeys
2. Copy your **Publishable key** (starts with `pk_test_...` or `pk_live_...`)
3. Copy your **Secret key** (starts with `sk_test_...` or `sk_live_...`)

### Step 3: Set Up Stripe Webhook

1. Go to: https://dashboard.stripe.com/webhooks
2. Click **Add endpoint**
3. Enter your webhook URL:
   - **Local testing**: `http://localhost:3000/api/webhook`
   - **Production**: `https://yourdomain.com/api/webhook`
4. Click **Select events** and choose: `checkout.session.completed`
5. Click **Add endpoint**
6. Copy the **Signing secret** (starts with `whsec_...`)

### Step 4: Configure Environment Variables

Open the file `.env.local` and add your keys:

```bash
# Stripe Configuration
STRIPE_SECRET_KEY=sk_test_your_secret_key_here
STRIPE_WEBHOOK_SECRET=whsec_your_webhook_secret_here

# Email Configuration
GMAIL_USER=your-email@gmail.com
GMAIL_APP_PASSWORD=xxxx xxxx xxxx xxxx

# Frontend Configuration
VITE_STRIPE_PUBLISHABLE_KEY=pk_test_your_publishable_key_here
```

**Important**: Replace all placeholder values with your actual keys!

---

## 🚀 Testing Locally

### 1. Install Stripe CLI (for webhook testing)

**Windows (using Scoop)**:
```powershell
scoop install stripe
```

**Or download from**: https://stripe.com/docs/stripe-cli

### 2. Login to Stripe CLI
```bash
stripe login
```

### 3. Forward Webhooks to Local Server
```bash
stripe listen --forward-to localhost:3000/api/webhook
```

This will give you a webhook signing secret starting with `whsec_...` - add this to your `.env.local` file.

### 4. Start Development Server
```bash
npm run dev
```

### 5. Test Order Flow

1. Open http://localhost:3000
2. Add items to cart (from Shop or Services pages)
3. Go to checkout
4. Fill in customer details with **your real email address**
5. Use Stripe test card:
   - **Card number**: `4242 4242 4242 4242`
   - **Expiry**: Any future date (e.g., `12/34`)
   - **CVC**: Any 3 digits (e.g., `123`)
   - **ZIP**: Any 5 digits (e.g., `12345`)
6. Complete payment
7. Check your email inbox for the order confirmation!

---

## 🌐 Production Deployment

### For Vercel, Netlify, or Similar Hosting:

1. **Set Environment Variables** in your hosting dashboard:
   ```
   STRIPE_SECRET_KEY=sk_live_...
   STRIPE_WEBHOOK_SECRET=whsec_...
   GMAIL_USER=your-email@gmail.com
   GMAIL_APP_PASSWORD=xxxx xxxx xxxx xxxx
   VITE_STRIPE_PUBLISHABLE_KEY=pk_live_...
   ```

2. **Update Stripe Webhook URL**:
   - Go to Stripe Dashboard → Webhooks
   - Update endpoint URL to: `https://yourdomain.com/api/webhook`
   - Copy the new signing secret
   - Update `STRIPE_WEBHOOK_SECRET` in your hosting environment

3. **Deploy your code**:
   ```bash
   git add .
   git commit -m "Add order fulfillment system"
   git push
   ```

4. **Test with real payment** (use small amount first!)

---

## 📧 Email Preview

Your customers will receive an email that looks like this:

**Subject**: Order Confirmation - SP-20260126-A7F3

**Content**:
- Strong Performance branding with red gradient header
- Large order number display
- Personalized greeting
- Complete order summary with all items
- Itemized pricing (quantity × price)
- Subtotal, shipping (FREE), and total
- Shipping address
- Professional footer with contact info

---

## 🔧 Files Created/Modified

### New Files:
- `api/webhook.js` - Stripe webhook handler
- `api/email-template.js` - Branded HTML email template
- `api/utils/order-number.js` - Order number generator
- `.env.example` - Environment variables template
- `.env.local` - Your actual environment variables (DO NOT COMMIT)

### Modified Files:
- `api/checkout.js` - Added customer metadata to Stripe session
- `pages/Checkout.tsx` - Collect customer details and use env variables
- `package.json` - Added nodemailer dependency

---

## ❓ Troubleshooting

### Email not sending?
- Check Gmail App Password is correct (16 characters, no spaces)
- Verify 2-Step Verification is enabled on your Google Account
- Check console logs for error messages

### Webhook not triggering?
- Verify webhook URL is correct in Stripe Dashboard
- Check webhook signing secret matches `.env.local`
- For local testing, ensure Stripe CLI is running: `stripe listen --forward-to localhost:3000/api/webhook`

### Order number not generating?
- Check webhook is receiving events (view logs in Stripe Dashboard)
- Verify `checkout.session.completed` event is selected

---

## 🎉 You're All Set!

Once you've added your API keys to `.env.local`, your order fulfillment system is ready to go! Customers will automatically receive beautiful, branded order confirmations for every purchase.

**Need help?** Check the console logs or Stripe Dashboard for detailed error messages.
