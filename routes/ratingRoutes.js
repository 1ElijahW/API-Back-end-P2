// routes

import express from 'express';
const router = express.Router();

import { getAllRatings, createRating, updateRating, deleteRating } from '../controllers/ratingController.js';

// GET /ratings - Get all ratings
router.get('/ratings', getAllRatings);

// POST /ratings - Create a new rating
router.post('/ratings', createRating);

// PUT /ratings/:id - Update a rating by ID
router.put('/ratings/:id', updateRating);

// DELETE /ratings/:id - Delete a rating by ID
router.delete('/ratings/:id', deleteRating);

export default router;