//import
const express = require("express");
const route = express.Route();
const actorsController = require("../controllers/actor.js");

//actors
route.get('/actor/:name', controller.getActor) 
route.post('/actors/:name', controller.addActor)
route.put ('/actors/:name', controller.updateActor)
route.delete('/actors/:name',controller.deleteActor) 

module.exports = route;