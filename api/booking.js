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

        // Parse Date and Time for Calendar Link
        // Date comes as ISO string (e.g., 2024-01-30T00:00:00.000Z)
        // Time comes as "09:00"

        const dateObj = new Date(date);
        const [hours, minutes] = time.split(':');
        dateObj.setHours(parseInt(hours), parseInt(minutes));

        // Google Calendar requires standard format: YYYYMMDDTHHMMSSZ
        // We'll create a start time and end time (assuming 1 hour duration for safety, or 15 mins)
        const startTime = dateObj.toISOString().replace(/-|:|\.\d\d\d/g, "");
        const endTimeObj = new Date(dateObj.getTime() + 15 * 60000); // 15 minutes later
        const endTime = endTimeObj.toISOString().replace(/-|:|\.\d\d\d/g, "");

        const details = `Consultation with ${name}\nEmail: ${email}\nGoals: ${goals}`;
        const gCalLink = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=Performance+Call+with+${encodeURIComponent(name)}&dates=${startTime}/${endTime}&details=${encodeURIComponent(details)}&location=Google+Meet`;

        const readableDate = new Date(date).toLocaleDateString();

        // 1. Send Confirmation to User
        await transporter.sendMail({
            from: `"Strong Performance" <${process.env.GMAIL_USER}>`,
            to: email,
            subject: `Request Received: ${readableDate} @ ${time}`,
            // We use a generic message here since the meeting isn't created yet
            html: generateBookingEmail({ name, date: readableDate, time, meetLink: "#" }), // Passing # effectively disables the button or we should update template
            text: `Booking Request Received for ${readableDate} at ${time}. You will receive a calendar invitation shortly.`
            // Note: Ideally update generateBookingEmail to accept a flag to hide the button or change text
        });

        // 2. Send Notification to Admin with SMART BUTTON
        await transporter.sendMail({
            from: `"Booking System" <${process.env.GMAIL_USER}>`,
            to: process.env.GMAIL_USER,
            subject: `📅 NEW BOOKING: ${name}`,
            html: `
                <div style="font-family: sans-serif; padding: 20px; border: 1px solid #eee; border-radius: 10px;">
                    <h2 style="color: #DC2626;">New Consultation Request</h2>
                    <p><strong>Name:</strong> ${name}</p>
                    <p><strong>Email:</strong> ${email}</p>
                    <p><strong>Date:</strong> ${readableDate}</p>
                    <p><strong>Time:</strong> ${time}</p>
                    <p><strong>Goals:</strong><br>${goals}</p>
                    <hr />
                    <p>Click below to create the meeting in your calendar and invite the client:</p>
                    <a href="${gCalLink}" style="display: inline-block; background-color: #DC2626; color: white; padding: 15px 25px; text-decoration: none; border-radius: 5px; font-weight: bold;">+ Create Google Meeting</a>
                    <p style="font-size: 12px; color: #666; margin-top: 10px;">Once open in Google Calendar, click "Add Google Meet video conferencing" and save.</p>
                </div>
            `,
        });

        res.status(200).json({ success: true });

    } catch (error) {
        console.error('Booking email error:', error);
        res.status(500).json({ error: 'Failed to send booking emails' });
    }
}
