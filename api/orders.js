import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY || '');

export default async function handler(req, res) {
    if (req.method !== 'GET') {
        res.setHeader('Allow', 'GET');
        return res.status(405).end('Method Not Allowed');
    }

    // Basic password protection for the API itself
    // In a real app, you'd use a real auth system, but we'll use a header for now
    const adminPassword = req.headers['x-admin-password'];
    if (adminPassword !== 'admin') {
        return res.status(401).json({ error: 'Unauthorized' });
    }

    try {
        // Fetch last 100 completed checkout sessions
        const sessions = await stripe.checkout.sessions.list({
            limit: 100,
            expand: ['data.line_items'],
        });

        // Map sessions to a clean order format
        const orders = sessions.data.filter(s => s.status === 'complete').map(session => ({
            id: session.id,
            orderDate: new Date(session.created * 1000).toISOString(),
            customerName: session.customer_details?.name || 'Unknown',
            customerEmail: session.customer_details?.email || 'Unknown',
            amount: session.amount_total / 100,
            currency: session.currency,
            items: session.line_items?.data.map(item => ({
                description: item.description,
                quantity: item.quantity,
                amount: item.amount_total / 100
            })) || [],
            shippingAddress: session.metadata?.shipping_address || 'Not provided',
            status: session.payment_status
        }));

        res.status(200).json({ orders });
    } catch (error) {
        console.error('Error fetching Stripe orders:', error);
        res.status(500).json({ error: 'Failed to fetch orders' });
    }
}
