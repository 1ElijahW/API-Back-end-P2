import mongoose from ('mongoose');

const directorSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  nationality: {
    type: String,
    required: true
  },
  imdbId: {
    type: String,
    required: true,
    unique: true
  },
  bio: {
    type: String
  },
  birthYear: {
    type: Number
  },
  imageUrl: {
    type: String
  }
});

const Director = mongoose.model('Director', directorSchema);

module.exports = Director;