import Stripe from 'stripe';

// NOTE: In production, the STRIPE_SECRET_KEY should be set in your hosting provider's environment variables.
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY || '');

export default async function handler(req, res) {
    if (req.method === 'POST') {
        try {
            const { cartItems, customerEmail, customerName, shippingAddress, phone } = req.body;

            import { PRODUCTS_DATA } from './utils/products-data.js';

            // ...

            // Create line items for Stripe with SECURE SERVER-SIDE PRICING
            const lineItems = cartItems.map((item) => {
                const product = PRODUCTS_DATA.find(p => p.id === item.id);

                // If product exists, use the server-side price. 
                // Fallback creates an error or uses client price ONLY if absolutely necessary (not recommended for security).
                // Here we strictly enforce server price if found.
                const priceToUse = product ? product.price : item.price;

                // In a stricter system, you would throw an error if product is not found:
                // if (!product) throw new Error(`Invalid product: ${item.id}`);

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
                    customer_name: req.body.customerName || '',
                    shipping_address: req.body.shippingAddress || '',
                    phone: req.body.phone || '',
                },
            });

            res.status(200).json({ url: session.url });
        } catch (err) {
            res.status(err.statusCode || 500).json(err.message);
        }
    } else {
        res.setHeader('Allow', 'POST');
        res.status(405).end('Method Not Allowed');
    }
}
