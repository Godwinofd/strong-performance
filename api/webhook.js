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

export default async function handler(req, res) {
    if (req.method !== 'POST') {
        res.setHeader('Allow', 'POST');
        return res.status(405).end('Method Not Allowed');
    }

    const sig = req.headers['stripe-signature'];
    const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET;

    let event;

    try {
        // Verify webhook signature
        event = stripe.webhooks.constructEvent(req.body, sig, webhookSecret);
    } catch (err) {
        console.error('Webhook signature verification failed:', err.message);
        return res.status(400).send(`Webhook Error: ${err.message}`);
    }

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

            // Send confirmation email
            await transporter.sendMail({
                from: `"Strong Performance" <${process.env.GMAIL_USER}>`,
                to: customerEmail,
                subject: `Order Confirmation - ${orderNumber}`,
                html: emailHtml,
            });

            console.log(`Order confirmation sent for ${orderNumber} to ${customerEmail}`);

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
