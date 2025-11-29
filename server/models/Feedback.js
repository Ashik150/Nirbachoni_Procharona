import mongoose from 'mongoose';

const feedbackSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    phone: {
        type: String,
        required: true,
        trim: true
    },
    message: {
        type: String,
        required: true,
        trim: true
    },
    timestamp: {
        type: Date,
        default: Date.now
    },
    tag: {
        type: String,
        default: 'সাধারণ'
    }
}, {
    timestamps: true
});

// Index for sorting by timestamp
feedbackSchema.index({ timestamp: -1 });

const Feedback = mongoose.model('Feedback', feedbackSchema);

export default Feedback;
