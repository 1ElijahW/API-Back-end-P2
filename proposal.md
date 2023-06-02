## Project Proposal
## Project Goal and Purpose
The goal of this project is to create a user-friendly website called "Cineflix" that allows visitors to search for movies by title and get basic information on that film. The purpose is to provide users with an efficient way to find the movies they are looking for and expand their options by having access to a larger pool of results.

## Choice of API and Integration
For this project, I have chosen to use the Movies Database API. You can find the API documentation by clicking [HERE](https://rapidapi.com/SAdrian/api/moviesdatabase) . I will integrate this API by making HTTP requests directly to the API endpoints using the 'Axios' method.


## User Stories
As a user, I should be able to:

CRUD routes:
- GET /titles/ - Retrieve a selection of movie titles.
- GET /titles/:name - Fetch a specific movie title 
- POST /titles/:name - create a new movie title contributed by the user.
- DELETE /titles/:name- Remove a movie title 

## Models
Titles Schema
```
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

const Title = mongoose.model('Title', titleSchema);

module.exports = Title;
```

## MVP Goals
- As a user, I should be able to view a list of general movie titles.
- As a user, I should be able to view basic movie information(ratings, year).
- As a user, I should be able to delete a movie.
- As a user, I should experience a website that has a user-friendly and responsive interface.

## Stretch Goals
- As a user, I would like to be able to create an account to save a list of films.
- As a user, I would like to search by specific genres. 
- As a user, I would like to share movies with friends.

