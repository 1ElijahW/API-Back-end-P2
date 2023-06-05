import Movie from '../models/movieModel.js';

// Get all movies
export async function getMovies(req, res) {
  try {
    const movies = await Movie.find();

    if (!movies) {
      return res.status(404).json({ error: 'Movies not found' });
    }

    res.json(movies);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch movies' });
  }
}

// Get movie by id
export async function getMovieById(req, res) {
  try {
    const { id } = req.params;
    const movie = await Movie.findById(id);

    if (!movie) {
      return res.status(404).json({ error: 'Movie not found' });
    }

    res.json(movie);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch movie' });
  }
}

// Update a Movie by id
export async function updateMovie(req, res) {
  try {
    const { id } = req.params;
    const movieUpdates = req.body;

    const updatedMovie = await Movie.findByIdAndUpdate(id, movieUpdates, {
      new: true,
    });

    if (!updatedMovie) {
      return res.status(404).json({ error: 'Movie not found' });
    }

    res.json(updatedMovie);
  } catch (error) {
    res.status(500).json({ error: 'Failed to update movie' });
  }
}

// Create a new Movie
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

// Delete a Movie by id
export async function deleteMovie(req, res) {
  try {
    const { id } = req.params;

    const deletedMovie = await Movie.findByIdAndDelete(id);

    if (!deletedMovie) {
      return res.status(404).json({ error: 'Movie not found' });
    }

    res.sendStatus(204).json(deletedMovie);
  } catch (error) {
    res.status(500).json({ error: 'Failed to delete movie' });
  }
}

