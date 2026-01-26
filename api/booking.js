import nodemailer from 'nodemailer';
import { generateBookingEmail } from './utils/booking-email-template.js';

// Configure Nodemailer 
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_APP_PASSWORD,
    },
});

export default async function handler(req, res) {
    if (req.method !== 'POST') {
        res.setHeader('Allow', 'POST');
        return res.status(405).end('Method Not Allowed');
    }

    try {
        const { name, email, goals, date, time } = req.body;

        // In a real app with Google Auth, we would generate a dynamic link.
        // For now, we use a static user link or a placeholder.
        const meetLink = "https://meet.google.com/abc-defg-hij"; // Placeholder or static link

        // 1. Send Confirmation to User
        await transporter.sendMail({
            from: `"Strong Performance" <${process.env.GMAIL_USER}>`,
            to: email,
            subject: `Consultation Confirmed: ${date} @ ${time}`,
            html: generateBookingEmail({ name, date, time, meetLink }),
            text: `Booking Confirmed for ${date} at ${time}. Join here: ${meetLink}`
        });

        // 2. Send Notification to Admin
        await transporter.sendMail({
            from: `"Booking System" <${process.env.GMAIL_USER}>`,
            to: process.env.GMAIL_USER,
            subject: `📅 NEW BOOKING: ${name}`,
            html: `
                <h2>New Consultation Request</h2>
                <p><strong>Name:</strong> ${name}</p>
                <p><strong>Email:</strong> ${email}</p>
                <p><strong>Date:</strong> ${date}</p>
                <p><strong>Time:</strong> ${time}</p>
                <p><strong>Goals:</strong><br>${goals}</p>
            `,
        });

        res.status(200).json({ success: true });

    } catch (error) {
        console.error('Booking email error:', error);
        res.status(500).json({ error: 'Failed to send booking emails' });
    }
}
