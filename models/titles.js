import mongoose from 'mongoose';
const { Schema } = mongoose;

const titlesSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  year: {
    type: Number,
    required: true
  },
   Rated: {
    type: [String],
    required: true
  },
});

const titles = mongoose.model('titles', titlesSchema);

export default titles;