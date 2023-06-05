// controllers/ratingController.js

import Rating from '../models/ratingModel.js';

// GET /ratings - Get all ratings
export async function getAllRatings(req, res) {
  try {
    const ratings = await Rating.find();
    res.json(ratings);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch ratings' });
  }
}

// POST /ratings - Create a new rating
export async function createRating(req, res) {
  try {
    const { source, value } = req.body;
    const movie = req.params.id;

    console.log('movie: ' + movie );
    console.log('value: ' + value );
    console.log('source: ' + source );

    const newRating = new Rating({ movie, source, value });
    const savedRating = await newRating.save();

    res.status(201).json(savedRating);
  } catch (error) {
    res.status(500).json({ error: 'Failed to create rating' });
  }
}

// PUT /ratings/:id - Update a rating by ID
export async function updateRating(req, res) {
  try {
    const { source, value } = req.body;

    const updatedRating = await Rating.findByIdAndUpdate(
      req.params.id,
      { source, value },
      { new: true }
    );

    if (!updatedRating) {
      return res.status(404).json({ error: 'Rating not found' });
    }

    res.json(updatedRating);
  } catch (error) {
    res.status(500).json({ error: 'Failed to update rating' });
  }
}

// DELETE /ratings/:id - Delete a rating by ID
export async function deleteRating(req, res) {
  try {
    const deletedRating = await Rating.findByIdAndDelete(req.params.id);

    if (!deletedRating) {
      return res.status(404).json({ error: 'Rating not found' });
    }

    res.sendStatus(204);
  } catch (error) {
    res.status(500).json({ error: 'Failed to delete rating' });
  }
}