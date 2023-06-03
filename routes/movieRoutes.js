import { Router } from 'express'

//import movies from "../controllers/movieController.js"
import { getSingleMovie, updateMovie, createMovie, deleteMovie, getMovies,} from '../controllers/movieController.js'
const router = Router()

// Get all movies
router.get('/movies', getMovies);

// Get a specific Movie by name
router.get('/movie/:name', getSingleMovie);

// Update a Movie by name
router.put('/movie/:name', updateMovie);

// Create a movie by name
router.post('/movie/:name', createMovie);

// Delete a Movie by name
router.delete('/movie/:name', deleteMovie);

export default router;
