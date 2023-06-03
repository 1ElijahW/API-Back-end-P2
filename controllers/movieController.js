// controllers/movieController.js
import Movie from '../models/movieModel.js';


// const movieName = req.params.name;
// Get all movie
export async function getMovie(req, res) {
  try {
    const movie = await Movie.find();

    if (!movie) {
      return res.status(404).json({ error: 'Movie not found' });
    }

    res.json(movie);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch movie' });
  }
}

// Get a specific Movie by name
export async function getSingleMovie(req, res) {
  try {
    const movieName = req.params.name;

    const movie = await Movie.findOne({ name: movieName });

    if (!movie) {
      return res.status(404).json({ error: 'Movie not found' });
    }

    res.json(movie);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch movie' });
  }
}

// put // Update a Movie by name
export async function updateMovie(req, res) {
  try {
    const movieName = req.params.name;
    const movieUpdates = req.body;

    const updatedMovie = await Movie.findOneAndUpdate(
      { name: movieName },
      movieUpdates,
      { new: true }
    );

    if (!updatedMovie) {
      return res.status(404).json({ error: 'Movie not found' });
    }

    res.json(updatedMovie);
  } catch (error) {
    res.status(500).json({ error: 'Failed to update movie' });
  }
}

// post // Create a new Movie
export async function createMovie(req, res) {
  try {
    const movieData = req.body;

    const newMovie = new Movie(movieData);
    const savedMovie = await newMovie.save();

    res.status(201).json(savedMovie);
  } catch (error) {
    res.status(500).json({ error: 'Failed to create movie' });
  }
}

// Delete a Movie by name
export async function deleteMovie(req, res) {
  try {
    const movieName = req.params.name;

    const deletedMovie = await Movie.findOneAndDelete({ name: movieName });

    if (!deletedMovie) {
      return res.status(404).json({ error: 'Movie not found' });
    }

    res.sendStatus(204);
  } catch (error) {
    res.status(500).json({ error: 'Failed to delete movie' });
  }
}