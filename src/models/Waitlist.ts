import mongoose, { Schema, model, models } from 'mongoose';

const WaitlistSchema = new Schema({
  email: {
    type: String,
    required: [true, 'Email is required.'],
    unique: true,
    trim: true,
    lowercase: true,
    match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address'],
  },
}, {
  timestamps: true, // Adds createdAt and updatedAt timestamps
});

// Check if the model already exists before defining it
const Waitlist = models.Waitlist || model('Waitlist', WaitlistSchema);

export default Waitlist;