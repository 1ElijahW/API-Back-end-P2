## Project Proposal
## Project Goal and Purpose
The goal of this project is to create a user-friendly website called "Cineflix" that allows visitors to search for movies by title or actor, and get basic information on that film. The purpose is to provide users with an efficient way to find the movies they are looking for and expand their options by having access to a larger pool of results.

## Choice of API and Integration
For this project, I have chosen to use the Movies Database API. You can find the API documentation by clicking [HERE](https://rapidapi.com/SAdrian/api/moviesdatabase) . I will integrate this API by making HTTP requests directly to the API endpoints using the 'Fetch' method.


## User Stories
As a user, I should be able to:

CRUD routes:
- GET /actors/:id - Retrieve a specific actor by their ID.
- POST /actors - Create a new actor by sending actor data in the request body.
- PUT /actors/:id - Update a specific actor by replacing their existing data with new data sent in the request body.
- DELETE /actors/:id - Delete a specific actor by their ID.
- GET /titles - Retrieves a selection of movie titles requested by the user.
- GET /title/:id - Fetches a specific movie title based on user input
- POST /title - Stores an existing movie title in the user's collection or creates a new movie title contributed by the user.
- PUT /movie-titles/:id - Modifies a movie title provided by the user.
- DELETE /movie-titles/:id - Removes a movie title created by the user.


## MVP Goals
- As a user, I should be able to search for movies by title/actor.
- As a user, I should be able to see a list of general movie titles.
- As a user, I should be able to delete my entry 


## Stretch Goals
- As a user, I would like to share my movies with friends.
- As a user, I would like to create my own catergories of films.
- As a user, I would like to see information about the director.
