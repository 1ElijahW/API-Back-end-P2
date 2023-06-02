import mongoose from 'mongoose';

const titleSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  year: {
    type: Number,
    required: true
  },
  director: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Director',
    required: true
  },
  imdbId: {
    type: String,
    required: true,
    unique: true
  },
  plot: {
    type: String
  },
  runtime: {
    type: String
  },
  genre: {
    type: String
  },
  imageUrl: {
    type: String
  }
});

const Title = mongoose.model('Title', titleSchema);

export default Title;
