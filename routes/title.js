// import
const express = require("express");
const router = express.Route();
const titlesController = require("../controllers/title.js");

//Get general titles 
router.get('/titles/', controller.getTitle) 

// Get a specific title by name
router.get('/titles/:name', controller.getTitle)

//Update a title by name
router.put ('/titles/:name', controller.updateTitle)

// Delete a title by name
router.delete('/titles/:name',controller.deleteTitle) 

module.exports = router;
