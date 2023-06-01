
const express = require("express");
const route = express.Route();
const actorsController = require("../controllers/actor.js");

//Get a specific actor by name
route.get('/actor/:name', controller.getActor) 

//Add a actor by name
route.post('/actors/:name', controller.addActor)

//Update a actor by name
route.put ('/actors/:name', controller.updateActor)

// Delete actors by name
route.delete('/actors/:name',controller.deleteActor) 

module.exports = route;