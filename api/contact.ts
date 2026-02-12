import type { VercelRequest, VercelResponse } from '@vercel/node';
import { connectToDatabase } from './utils/db';
import { Contact } from './models/Contact';
import { sendCustomerReceipt, sendOwnerNotification } from './utils/email';

export default async function handler(req: VercelRequest, res: VercelResponse) {
    // Set CORS headers
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

    // Handle preflight
    if (req.method === 'OPTIONS') {
        return res.status(200).end();
    }

    if (req.method !== 'POST') {
        return res.status(405).json({ success: false, message: 'Method not allowed' });
    }

    try {
        // Try connecting to database (non-blocking)
        try {
            await connectToDatabase();
        } catch (dbConnError) {
            console.warn('⚠️ MongoDB connection failed, continuing without database');
        }

        const { name, company, email, phone, product, quantity, message } = req.body;

        // Validate required fields
        if (!name || !email) {
            return res.status(400).json({
                success: false,
                message: 'Name and email are required',
            });
        }

        // Validate email format
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            return res.status(400).json({
                success: false,
                message: 'Invalid email format',
            });
        }

        const contactData = { name, company, email, phone, product, quantity, message };

        // Try to save to database (non-blocking)
        let savedContact = null;
        try {
            const contact = new Contact({
                name, company, email, phone, product, quantity, message,
            });
            savedContact = await contact.save();
            console.log('✅ Contact saved to database');
        } catch (dbError) {
            console.warn('⚠️ Could not save to database:', (dbError as Error).message);
        }

        // Send emails
        try {
            await Promise.all([
                sendCustomerReceipt(contactData),
                sendOwnerNotification(contactData),
            ]);
            console.log('✅ Emails sent successfully');
        } catch (emailError) {
            console.error('❌ Email sending failed:', emailError);
            if (savedContact) {
                await Contact.findByIdAndDelete(savedContact._id).catch(() => { });
            }
            return res.status(500).json({
                success: false,
                message: 'Failed to send confirmation email. Please check your email address and try again.',
            });
        }

        return res.status(201).json({
            success: true,
            message: 'Your inquiry has been submitted successfully. Check your email for confirmation.',
        });
    } catch (error) {
        console.error('Contact submission error:', error);
        return res.status(500).json({
            success: false,
            message: 'Failed to submit inquiry. Please try again later.',
        });
    }
}
