
const express = require("express");
const router = express.Router();
const actorsController = require("../controllers/actor.js");

//Get a specific actor by name
router.get('/actor/:name', controller.getActor) //not working

//Add a actor by name
router.post('/actors/:name', controller.addActor) //not working

//Update a actor by name
router.put ('/actors/:name', controller.updateActor) //not working

// Delete actors by name
router.delete('/actors/:name',controller.deleteActor) //not working

module.exports = router;