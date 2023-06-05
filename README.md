## Cineflix 

# Overview

This is a web application utilizing a 3rd-party API called [OMDBAPI](https://www.omdbapi.com). This Applicaton Programming Interface, is a RESTful web service to obtain movie information.


## Routes

- CRUD routes:
- GET /movie/:id - This route is used to fetch a specific movie by its id.
- POST /movie/:id - This route is used to create a new movie contributed by the user.
- PUT /movie/:id - This route is used to update a specific movie by its id.
- DELETE /movie/:id - This route is used to remove a movie by its id.


- GET /ratings/:id - Fetch a rating by it's id
- POST /ratings/:id - Create a new rating contributed by the user.
- PUT /ratings/:id - Update a specific rating by id.
- DELETE /ratings/:id - Remove a rating by id.

## Models
Movie Schema
```
import mongoose from 'mongoose';

const movieSchema = new mongoose.Schema({
  title: { type: String, required: true },
  year: { type: Number, required: true },
  genre: { type: String, required: false },
  director: { type: String, required: false },
  plot: { type: String, required: false },
});

const Movie = mongoose.model('Movie', movieSchema);

export default Movie;

```
Rating Schema
```
import mongoose from 'mongoose';

const ratingSchema = new mongoose.Schema({
  source: { type: String, required: true },
  value: { type: Number, required: true },
});

const Rating = mongoose.model('Rating', ratingSchema);

export default Rating;

```

## MVP Goals
- As a user, I should be able to view a list of movies and ratings
- As a user, I should be able to view basic movie information 
- As a user, I should be able to delete a movie and rating
- As a user I should be able to update a movie  and rating
- As a user, I should experience a website that has a user-friendly and responsive interface.

## Stretch Goals
- As a user, I would like to be able to create an account to save a list of films.(authentication)
- As a user, I would like to search by specific genres. 
- As a user, I would like to share movies with friends.

# [Heroku](https://p2-backapi.herokuapp.com/)