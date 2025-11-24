import mongoose from 'mongoose';

const propertySchema = new mongoose.Schema({
  title: { type: String, required: true, trim: true },
  price: { type: Number, required: true, min: 0 },
  location: { type: String, required: true, trim: true },
  description: { type: String, required: true },
  image: { type: String, required: true },
  images: [{ type: String }],
  bedrooms: { type: Number, min: 0 },
  bathrooms: { type: Number, min: 0 },
  area: { type: Number, min: 0 }
}, { timestamps: true });

export default mongoose.model('Property', propertySchema);
