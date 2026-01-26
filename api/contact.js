import nodemailer from 'nodemailer';
import { generateContactAdminEmail, generateContactUserEmail } from './utils/contact-email-template.js';

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
            html: generateContactAdminEmail({ name, email, goals }),
        });

        // 2. Send Auto-Reply to User
        await transporter.sendMail({
            from: `"Strong Performance" <${process.env.GMAIL_USER}>`,
            to: email,
            subject: `We received your message, ${name}`,
            html: generateContactUserEmail({ name }),
        });

        return res.status(200).json({ success: true });

    } catch (error) {
        console.error('Contact API Error:', error);
        return res.status(500).json({ error: 'Failed to send message' });
    }
}
