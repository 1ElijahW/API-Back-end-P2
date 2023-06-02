// directorController.js

import Director from '../models/director.js';

// Get a specific director by name
async function getSingleDirector(req, res) {
  try {
    const { name } = req.params;
    const director = await Director.findOne({ name });
    if (!director) {
      return res.status(404).json({ error: 'Director not found' });
    }
    res.json(director);
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
}

// Update a director by name
async function updateDirector(req, res) {
  try {
    const { name } = req.params;
    const updatedData = req.body;

    const director = await Director.findOneAndUpdate({ name }, updatedData, {
      new: true
    });

    if (!director) {
      return res.status(404).json({ error: 'Director not found' });
    }

    res.json(director);
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
}

// Create a new director
async function createDirector(req, res) {
  try {
    const { name, nationality, imdbId, bio, birthYear, imageUrl } = req.body;
    const director = new Director({
      name,
      nationality,
      imdbId,
      bio,
      birthYear,
      imageUrl
    });

    await director.save();

    res.status(201).json(director);
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
}

// Delete a director by name
async function deleteDirector(req, res) {
  try {
    const { name } = req.params;
    const director = await Director.findOneAndDelete({ name });

    if (!director) {
      return res.status(404).json({ error: 'Director not found' });
    }

    res.json({ message: 'Director deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
}

export default { getSingleDirector, updateDirector, createDirector, deleteDirector };