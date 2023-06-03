import { Router } from 'express'

//import movies from "../controllers/movieController.js"
import { getMovie, getSingleMovie, updateMovie, createMovie, deleteMovie,} from '../controllers/movieController.js'
const router = Router()

// Get all movies
router.get('/movies', getMovie);

// Get a specific Movie by name
router.get('/movies/:name', getSingleMovie);

// Update a Movie by name
router.put('/movies/:name', updateMovie);

// Create a movie by name
router.post('/movies/:name', createMovie);

// Delete a Movie by name
router.delete('/movies/:name', deleteMovie);

export default router;
