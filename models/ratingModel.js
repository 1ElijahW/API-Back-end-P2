import mongoose from 'mongoose';

const ratingSchema = new mongoose.Schema({
  source: { type: String, required: true },
  value: { type: String, required: true },
  movie: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Movie"
  }
});

const Rating = mongoose.model('Rating', ratingSchema);

export default Rating;