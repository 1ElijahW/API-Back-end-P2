import mongoose from 'mongoose';

const movieSchema = new mongoose.Schema({
  title: { type: String, required: true },
  Year: { type: String, required: true },
  genre: { type: String, required: false },
  director: { type: String, required: false },
  plot: { type: String, required: false },
  imdbID: { type: String, required: false }
});

const Movie = mongoose.model('Movie', movieSchema);

export default Movie;
