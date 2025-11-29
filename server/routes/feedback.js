import express from 'express';
import Feedback from '../models/Feedback.js';
import { analyzeFeedback } from '../services/gemini.js';

const router = express.Router();

// GET - Fetch latest 5 feedback posts
router.get('/', async (req, res) => {
    try {
        const feedbacks = await Feedback.find()
            .sort({ timestamp: -1 }) // Sort by newest first
            .limit(5) // Only get 5 latest posts
            .select('name phone message timestamp createdAt tag');

        res.json(feedbacks);
    } catch (error) {
        console.error('Error fetching feedback:', error);
        res.status(500).json({ message: 'Error fetching feedback', error: error.message });
    }
});

// POST - Submit new feedback
router.post('/', async (req, res) => {
    try {
        const { name, phone, message } = req.body;

        // Validation
        if (!name || !phone || !message) {
            return res.status(400).json({ message: 'All fields are required' });
        }

        // Analyze feedback using Gemini
        const tag = await analyzeFeedback(message);

        // Create new feedback
        const feedback = new Feedback({
            name: name.trim(),
            phone: phone.trim(),
            message: message.trim(),
            tag: tag,
            timestamp: new Date()
        });

        await feedback.save();

        res.status(201).json({
            message: 'Feedback submitted successfully',
            feedback
        });
    } catch (error) {
        console.error('Error saving feedback:', error);
        res.status(500).json({ message: 'Error saving feedback', error: error.message });
    }
});

export default router;
