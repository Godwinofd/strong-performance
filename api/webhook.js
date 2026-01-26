import Stripe from 'stripe';
import nodemailer from 'nodemailer';
import { generateOrderNumber } from './utils/order-number.js';
import { generateOrderEmail } from './email-template.js';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY || '');

// Configure Nodemailer with Gmail
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.GMAIL_USER, // Your Gmail address
        pass: process.env.GMAIL_APP_PASSWORD, // Gmail App Password
    },
});

// Disable automatic body parsing by Vercel/Next.js to get raw body for Stripe
export const config = {
    api: {
        bodyParser: false,
    },
};

// Helper to read raw body from stream
async function getRawBody(readable) {
    const chunks = [];
    for await (const chunk of readable) {
        chunks.push(typeof chunk === 'string' ? Buffer.from(chunk) : chunk);
    }
    return Buffer.concat(chunks);
}

export default async function handler(req, res) {
    console.log('Webhook received:', req.method);
    if (req.method !== 'POST') {
        res.setHeader('Allow', 'POST');
        return res.status(405).end('Method Not Allowed');
    }

    const sig = req.headers['stripe-signature'];
    const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET;

    if (!sig || !webhookSecret) {
        console.error('Missing stripe-signature or STRIPE_WEBHOOK_SECRET');
        return res.status(400).send('Missing signature or secret');
    }

    let event;

    try {
        // Get raw body for signature verification
        const rawBody = await getRawBody(req);
        // Verify webhook signature
        event = stripe.webhooks.constructEvent(rawBody, sig, webhookSecret);
    } catch (err) {
        console.error('Webhook signature verification failed:', err.message);
        return res.status(400).send(`Webhook Error: ${err.message}`);
    }

    console.log('Webhook verified:', event.type);

    // Handle the checkout.session.completed event
    if (event.type === 'checkout.session.completed') {
        const session = event.data.object;

        try {
            // Retrieve full session details with line items
            const fullSession = await stripe.checkout.sessions.retrieve(session.id, {
                expand: ['line_items'],
            });

            // Extract order details
            const customerEmail = fullSession.customer_details.email;
            const customerName = fullSession.customer_details.name || 'Valued Customer';
            const shippingAddress = fullSession.metadata?.shipping_address || 'Address not provided';

            // Get line items
            const lineItems = fullSession.line_items.data.map(item => ({
                name: item.description,
                quantity: item.quantity,
                price: item.amount_total / 100, // Convert from pence to pounds
            }));

            // Calculate total
            const total = fullSession.amount_total / 100; // Convert from pence to pounds

            // Generate unique order number
            const orderNumber = generateOrderNumber();

            // Prepare email data
            const emailData = {
                orderNumber,
                customerName,
                customerEmail,
                items: lineItems,
                total,
                shippingAddress,
            };

            // Generate HTML email
            const emailHtml = generateOrderEmail(emailData);

            // 1. Send confirmation email to the customer
            await transporter.sendMail({
                from: `"Strong Performance" <${process.env.GMAIL_USER}>`,
                to: customerEmail,
                subject: `Order Confirmation - ${orderNumber}`,
                html: emailHtml,
            });

            // 2. Send notification email to the business (YOU)
            await transporter.sendMail({
                from: `"Order System" <${process.env.GMAIL_USER}>`,
                to: process.env.GMAIL_USER,
                subject: `🚀 NEW ORDER RECEIVED - ${orderNumber}`,
                html: `
                  <div style="font-family: sans-serif; padding: 20px; border: 1px solid #eee; border-radius: 10px;">
                    <h2 style="color: #DC2626;">You have a new order!</h2>
                    <p><strong>Order Number:</strong> ${orderNumber}</p>
                    <p><strong>Customer:</strong> ${customerName} (${customerEmail})</p>
                    <p><strong>Total:</strong> £${total.toFixed(2)}</p>
                    <p><strong>Shipping Address:</strong><br>${shippingAddress}</p>
                    <hr />
                    <p>Check your Stripe Dashboard for more details.</p>
                  </div>
                `,
            });

            console.log(`Order emails sent for ${orderNumber}`);

            // Return success
            return res.status(200).json({
                received: true,
                orderNumber,
                message: 'Order processed and confirmation email sent'
            });

        } catch (error) {
            console.error('Error processing order:', error);
            return res.status(500).json({
                error: 'Failed to process order',
                message: error.message
            });
        }
    }

    // Return success for other event types
    res.status(200).json({ received: true });
}
