const actors = require("../models/actors");

module.exports = {
  index: (req, res) => {
    actors.find({}).then(actors => {
      res.json(actors);
    });
  }
};