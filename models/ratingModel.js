import mongoose from 'mongoose';

const ratingSchema = new mongoose.Schema({
  source: { type: String, required: true },
  value: { type: String, required: true },
});

const Rating = mongoose.model('Rating', ratingSchema);

export default Rating;