## Project Proposal
## Project Goal and Purpose
The goal of this project is to create a user-friendly website called "Cineflix" that allows visitors to search for movies by title or actor, and get basic information on that film and actor. The purpose is to provide users with an efficient way to find the movies they are looking for and expand their options by having access to a larger pool of results.

## Choice of API and Integration
For this project, I have chosen to use the Movies Database API. You can find the API documentation by clicking [HERE](https://rapidapi.com/SAdrian/api/moviesdatabase) . I will integrate this API by making HTTP requests directly to the API endpoints using the 'Fetch' method.


## User Stories
As a user, I should be able to:

CRUD routes:
- GET /actors/:name - Retrieve a specific actor by their ID.
- POST /actors - Create a new actor by sending actor data in the request body.
- PUT /actors/:name- Update a specific actor by replacing their existing data with new data sent in the request body.
- DELETE /actors/:name - Delete a specific actor by their ID.
- GET /titles - Retrieve a selection of movie titles.
- GET /titles/:name - Fetch a specific movie title 
- POST /titles - create a new movie title contributed by the user.
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
Actor Schema
```
const mongoose = require('mongoose');
const { Schema } = mongoose;

 const actorsSchema = new Schema({
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
 
 const Actor = mongoose.model('Actor', actorsSchema);

module.exports = Actor;
```

## MVP Goals
- As a user, I should be able to view a list of general movie titles.
- As a user, I should be able to view basic movie information(ratings, year).
- As a user, I should be able to view basic information about actors.
- As a user, I should be able to delete a movie and actor.
- As a user, I should experience a website that has a user-friendly and responsive interface.

## Stretch Goals
- As a user, I would like to be able to create an account to save a list of films.
- As a user, I would like to search by specific genres. 
- As a user, I would like to share movies with friends.

