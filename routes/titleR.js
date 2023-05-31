const express = require("express");
const router = express.Router();
const monarchController = require("../controllers/title");

router.get("/", titleController.index);

module.exports = router;