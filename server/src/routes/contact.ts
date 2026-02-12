import { Router, Request, Response } from 'express';
import { Contact } from '../models/Contact';
import { sendCustomerReceipt, sendOwnerNotification } from '../services/emailService';

const router = Router();

// POST /api/contact - Submit contact form
router.post('/', async (req: Request, res: Response) => {
    try {
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

        // Try to save to database (non-blocking if DB is down)
        let savedContact = null;
        try {
            const contact = new Contact({
                name, company, email, phone, product, quantity, message,
            });
            savedContact = await contact.save();
            console.log('✅ Contact saved to database');
        } catch (dbError) {
            console.warn('⚠️ Could not save to database (DB may be unavailable):', (dbError as Error).message);
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
            // Clean up DB record if emails failed
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
});

// GET /api/contact - Get all contacts (for admin)
router.get('/', async (_req: Request, res: Response) => {
    try {
        const contacts = await Contact.find().sort({ createdAt: -1 });
        return res.json({ success: true, data: contacts });
    } catch (error) {
        console.error('Error fetching contacts:', error);
        return res.status(500).json({
            success: false,
            message: 'Failed to fetch contacts',
        });
    }
});

export default router;
