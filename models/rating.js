import mongoose from 'mongoose';

const ratingSchema = new mongoose.Schema({
  source: { type: String, required: true },
  value: { type: Number, required: true },
});

const Rating = mongoose.model('Rating', ratingSchema);

export default Rating;