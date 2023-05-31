
const express = require("express");
const router = express.Router();
const actorsController = require("../controllers/actor");

router.get("/", actorsController.index);

module.exports = router;