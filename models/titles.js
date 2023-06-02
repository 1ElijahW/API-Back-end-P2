import mongoose from 'mongoose';
const { Schema } = mongoose;

const titlesSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  released: {
    type: Number,
    required: true
  },
  // actors: {
  //   type: [String],
  //   required: true
  // },
  // description: {
  //   type: String,
  //   required: true
  // },
  // rating: {
  //   type: Number,
  //   min: 1,
  //   max: 4,
  //   required: true
  // }
});

const titles = mongoose.model('titles', titlesSchema);

export default titles;