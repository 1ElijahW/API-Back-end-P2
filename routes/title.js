import express from "express";
import titlesController from "../controllers/title.js";
const router = express.Router();

// Get general titles
router.get('/titles/', titlesController.getTitle);

// Get a specific title by name
router.get('/titles/:name', titlesController.getSingleTitle);

// Update a title by name
router.put('/titles/:name', titlesController.updateTitle);

// Delete a title by name
router.delete('/titles/:name', titlesController.deleteTitle);

export default router;