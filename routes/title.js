// import
const express = require("express");
const router = express.Router();
const titlesController = require("../controllers/title.js");

//titles
router.get('/titles/', controller.getTitle) 
router.get('/titles/:name', controller.addTitle)
router.put ('/titles/:name', controller.updateTitle)
router.delete('/titles/:name',controller.deleteTitle) 

module.exports = router;
