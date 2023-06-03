import { Router } from 'express'
//import movies from "../controllers/movieController.js"
import * as controllers from '../controllers/movieController'
const router = Router()

// Get a specific Movie by name
router.get('/movies/:name', MoviesController.getSingleMovie);

// Update a Movie by name
router.put('/movies/:name', MoviesController.updateMovie);

// Create a movie by name
router.post('/movies/:name', MoviesController.createMovie);

// Delete a Movie by name
router.delete('/movies/:name', MoviesController.deleteMovie);

export default router;
