import express from "express";
import titlesController from "../controllers/title.js";
const router = express.Router();

// Get a specific title by name
router.get('/titles/:name', titlesController.getSingleTitle);

// Update a title by name
router.put('/titles/:name', titlesController.updateTitle);

router.post('/titles/:name', titlesController.createTitle);

// Delete a title by name
router.delete('/titles/:name', titlesController.deleteTitle);

export default router;