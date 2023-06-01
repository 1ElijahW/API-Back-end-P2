// import
 import express from "express";
 import titlesController from "../controllers/title.js";
 import router from express.Router();

//Get general titles 
router.get('/titles/', controller.getTitle) //working

// Get a specific title by name
router.get('/titles/:name', controller.getTitle) //not working

//Update a title by name
router.put ('/titles/:name', controller.updateTitle) //not working

// Delete a title by name
router.delete('/titles/:name',controller.deleteTitle) //not working

module.exports = router;
