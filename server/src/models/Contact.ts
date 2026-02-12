import mongoose, { Schema, Document } from 'mongoose';

export interface IContact extends Document {
    name: string;
    company?: string;
    email: string;
    phone?: string;
    product?: string;
    quantity?: string;
    message?: string;
    createdAt: Date;
}

const ContactSchema = new Schema<IContact>({
    name: { type: String, required: true },
    company: { type: String },
    email: { type: String, required: true },
    phone: { type: String },
    product: { type: String },
    quantity: { type: String },
    message: { type: String },
    createdAt: { type: Date, default: Date.now }
});

export const Contact = mongoose.model<IContact>('Contact', ContactSchema);
