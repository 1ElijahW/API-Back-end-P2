import express from "express";
import MoviesController from "../controllers/movie.js";
const router = express.Router();

// Get a specific Movie by name
router.get('/movies/:name', MoviesController.getSingleMovie);

// Update a Movie by name
router.put('/movies/:name', MoviesController.updateMovie);

// Create a movie by name
router.post('/movies/:name', MoviesController.createMovie);

// Delete a Movie by name
router.delete('/movies/:name', MoviesController.deleteMovie);

export default router;
