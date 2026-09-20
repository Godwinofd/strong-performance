import Stripe from 'stripe';
import { PRODUCTS_DATA } from './utils/products-data.js';

const STRIPE_SECRET_KEY = process.env.STRIPE_SECRET_KEY;

export default async function handler(req, res) {
    if (req.method === 'POST') {
        try {
            // Check for Stripe key at runtime to avoid top-level crash
            if (!STRIPE_SECRET_KEY) {
                console.error('STRIPE_SECRET_KEY is not defined');
                return res.status(500).json({ error: 'Payment service configuration error' });
            }

            const stripe = new Stripe(STRIPE_SECRET_KEY);
            const { cartItems, customerEmail, customerName, shippingAddress, phone } = req.body;

            if (!cartItems || !Array.isArray(cartItems)) {
                return res.status(400).json({ error: 'Invalid cart data' });
            }

            // Create line items for Stripe with SECURE SERVER-SIDE PRICING
            const lineItems = cartItems.map((item) => {
                const product = PRODUCTS_DATA.find(p => p.id === item.id);

                // If product exists, use the server-side price. 
                const priceToUse = product ? product.price : item.price;

                if (priceToUse === undefined || priceToUse === null) {
                    throw new Error(`Price not found for item: ${item.name}`);
                }

                return {
                    price_data: {
                        currency: 'gbp',
                        product_data: {
                            name: item.name,
                        },
                        unit_amount: Math.round(priceToUse * 100), // Ensure integer pence
                    },
                    quantity: item.quantity,
                };
            });

            // Create Checkout Sessions from body params
            const session = await stripe.checkout.sessions.create({
                line_items: lineItems,
                mode: 'payment',
                success_url: `${req.headers.origin}/#/checkout?success=true`,
                cancel_url: `${req.headers.origin}/#/checkout?canceled=true`,
                customer_email: customerEmail,
                metadata: {
                    customer_name: customerName || '',
                    shipping_address: shippingAddress || '',
                    phone: phone || '',
                },
            });

            res.status(200).json({ url: session.url });
        } catch (err) {
            console.error('Checkout error:', err);
            res.status(err.statusCode || 500).json({ error: err.message || 'Internal Server Error' });
        }
    } else {
        res.setHeader('Allow', 'POST');
        res.status(405).end('Method Not Allowed');
    }
}
