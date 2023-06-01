
import express from "express";
import actorsController from "../controllers/actor.js";
import router from express.Router();

//Get a specific actor by name
router.get("/actor/:name", actorsController.getActor);

//Add an actor by name
router.post("/actors/:name", actorsController.addActor);

//Update an actor by name
router.put("/actors/:name", actorsController.updateActor);

// Delete an actor by name
router.delete("/actors/:name", actorsController.deleteActor);

export default router;