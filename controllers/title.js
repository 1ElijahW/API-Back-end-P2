const titles = require("../models/titles");

module.exports = {
  index: (req, res) => {
    titles.find({}).then(titles => {
      res.json(titles);
    });
  }
};