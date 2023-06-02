import express from "express";
import directorsController from "../controllers/director.js";
const router = express.Router();

// Get a specific director by name
router.get('/directors/:name', directorsController.getSingleDirector);

// Update a director by name
router.put('/directors/:name', directorsController.updateDirector);

router.post('/directors/:name', directorsController.createDirector);

// Delete a director by name
router.delete('/directors/:name', directorsController.deleteDirector);

export default router;
