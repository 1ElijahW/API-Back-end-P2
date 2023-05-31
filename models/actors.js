const mongoose = require('mongoose');
const { Schema } = mongoose;

const actorsSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  age: {
    type: Number,
    required: true
  },
  movies: {
    type: [String],
    required: true
  },
  gender: {
    type: String,
    required: true
  },
  knownFor: {
    type: Schema.Types.ObjectId,
    ref: 'Title',
    required: true
  }
 });
 
 const actors = mongoose.model('actors', actorsSchema);

module.exports = actors;