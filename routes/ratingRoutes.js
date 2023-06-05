import express from 'express';
const router = express.Router();

import {
  getAllRatings,
  createRating,
  updateRating,
  deleteRating,
} from '../controllers/ratingController.js';

// GET /ratings - Get all ratings
router.get('/ratings', getAllRatings); // works

// POST /ratings - Create a new rating
router.post('/ratings', createRating); // works

// PUT /ratings/:id - Update a rating by ID
router.put('/ratings/:id', updateRating); // works

// DELETE /ratings/:id - Delete a rating by ID
router.delete('/ratings/:id', deleteRating); // works

export default router;