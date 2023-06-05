import { Router } from 'express';
import {
  getMovieById,
  updateMovie,
  createMovie,
  deleteMovie,
  getMovies,
} from '../controllers/movieController.js';

const router = Router();

// Get all movies
router.get('/movies', getMovies); //works: http://localhost:3030/movies

// Get movie by id
router.get('/movie/id/:id', getMovieById); //works: http://localhost:3030/movie/id/647b7fd327d6f60e456926de

// Update a Movie by id
router.put('/movie/:id', updateMovie); //works: http://localhost:3030/movie/647b7fd327d6f60e456926de

/*input: {
      "title": "James Bond 007: YES",
      "year": "2010"
  }*/

// Create a movie
router.post('/movie', createMovie); // works: http://localhost:3030/movie

// Delete a Movie by id
router.delete('/movie/:id', deleteMovie); // works: 

export default router;