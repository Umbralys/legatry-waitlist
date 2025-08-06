// src/models/DemoRequest.ts
import mongoose, { Schema, model, models } from 'mongoose';

const DemoRequestSchema = new Schema({
  name: {
    type: String,
    required: [true, 'Name is required.'],
    trim: true,
  },
  email: {
    type: String,
    required: [true, 'Email is required.'],
    unique: true,
    trim: true,
    lowercase: true,
    match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address'],
  },
  phone: {
    type: String,
    required: [true, 'Phone is required.'],
    trim: true,
  },
}, {
  timestamps: true,
});

const DemoRequest = models.DemoRequest || model('DemoRequest', DemoRequestSchema);

export default DemoRequest;