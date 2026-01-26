import nodemailer from 'nodemailer';

// Reuse the same transporter configuration
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_APP_PASSWORD,
    },
});

export default async function handler(req, res) {
    // Only allow POST
    if (req.method !== 'POST') {
        res.setHeader('Allow', 'POST');
        return res.status(405).end('Method Not Allowed');
    }

    try {
        const { name, email, goals } = req.body;

        // Simple validation
        if (!name || !email || !goals) {
            return res.status(400).json({ error: 'Missing required fields' });
        }

        // Send email to Admin
        await transporter.sendMail({
            from: `"Contact Form" <${process.env.GMAIL_USER}>`,
            to: process.env.GMAIL_USER, // Admin receives the inquiry
            replyTo: email, // Allow replying directly to the user
            subject: `📩 New Inquiry from ${name}`,
            html: `
                <div style="font-family: sans-serif; padding: 20px; border: 1px solid #eee; border-radius: 10px;">
                    <h2 style="color: #DC2626;">New Website Inquiry</h2>
                    <p><strong>Name:</strong> ${name}</p>
                    <p><strong>Email:</strong> ${email}</p>
                    <hr />
                    <p><strong>Message / Goals:</strong></p>
                    <p style="background-color: #f9f9f9; padding: 15px; border-radius: 5px;">${goals}</p>
                </div>
            `,
        });

        // 2. Send Auto-Reply to User (Optional but nice)
        await transporter.sendMail({
            from: `"Strong Performance" <${process.env.GMAIL_USER}>`,
            to: email,
            subject: `We received your message, ${name}`,
            html: `
                <div style="font-family: sans-serif; padding: 20px; color: #333;">
                    <h2 style="color: #000;">Thanks for reaching out!</h2>
                    <p>We have received your inquiry. A member of our team will review your goals and get back to you shortly.</p>
                    <p>In the meantime, feel free to browse our <a href="https://strongperformance.training/#services">training plans</a>.</p>
                    <br>
                    <p><strong>Strong Performance Team</strong></p>
                </div>
            `,
        });

        return res.status(200).json({ success: true });

    } catch (error) {
        console.error('Contact API Error:', error);
        return res.status(500).json({ error: 'Failed to send message' });
    }
}
