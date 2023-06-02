## Project Proposal
## Project Goal and Purpose
The goal of this project is to create a user-friendly website called "Cineflix" that allows visitors to search for movies by title and get basic information on that film. Also view information of directors. The purpose is to provide users with an efficient way to find the movies they are looking for and expand their options by having access to a larger pool of results.

## Choice of API and Integration
For this project, I have chosen to use the Movies Database API. You can find the API documentation by clicking [HERE](https://www.omdbapi.com/) . I will integrate this API by making HTTP requests directly to the API endpoints using the 'Axios' method.


## User Stories
As a user, I should be able to:

-CRUD routes:
-GET /titles/ This route is used to retrieve a selection of movie titles.
-GET /titles/:name - This route is used to fetch a specific movie title by its name.
-POST /titles/:name - This route is used to create a new movie title contributed by the user.
-PUT /titles/:name - This route is used to update a specific movie title by its name.
-DELETE /titles/:name - This route is used to remove a movie title by its name.

##

-GET /directors/:name - Fetch a specific director by name.
-POST /directors/:name - Create a new director contributed by the user.
-PUT /directors/:name - Update a specific director by name.
-DELETE /directors/:name - Remove a director by name.

## Models
Titles Schema
```
import mongoose from ('mongoose');

const titleSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  year: {
    type: Number,
    required: true
  },
  director: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Director',
    required: true
  },
  imdbId: {
    type: String,
    required: true,
    unique: true
  },
  plot: {
    type: String
  },
  runtime: {
    type: String
  },
  genre: {
    type: String
  },
  imageUrl: {
    type: String
  }
});

const Title = mongoose.model('Title', titleSchema);

module.exports = Title;

```
Director Schema
```
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
```

## MVP Goals
- As a user, I should be able to view a list of movie titles and directors
- As a user, I should be able to view basic movie information and director info
- As a user, I should be able to delete a movie and director
-As a user I should be able to update a movie title and director
- As a user, I should experience a website that has a user-friendly and responsive interface.

## Stretch Goals
- As a user, I would like to be able to create an account to save a list of films.
- As a user, I would like to search by specific genres. 
- As a user, I would like to share movies with friends.

