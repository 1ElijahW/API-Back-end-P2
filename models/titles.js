const mongoose = require('mongoose');
const { Schema } = mongoose;

const titlesSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  releaseYear: {
    type: Number,
    required: true
  },
  actors: {
    type: [String],
    required: true
  },
  description: {
    type: String,
    required: true
  },
  rating: {
    type: Number,
    min: 1,
    max: 4,
    required: true
  }
});

const titles = mongoose.model('titles', titlesSchema);

module.exports = titles;