//import
const express = require("express");
const router = express.Router();
const actorsController = require("../controllers/actor.js");

//actors
router.get('/actor/:name', controller.getActor) 
router.post('/actors/:name', controller.addActor)
router.put ('/actors/:name', controller.updateActor)
router.delete('/actors/:name',controller.deleteActor) 

module.exports = router;