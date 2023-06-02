import fs from 'fs';
import axios from 'axios';
import Movie from './models/movie.js';
import Rating from './models/rating.js';

const api_key = '245d7e38';
const search_query = 'James Bond';

async function seedData() {
  try {
    // Make the API request for movie data
    const apiUrl = `http://www.omdbapi.com/?s=${search_query}&apikey=${api_key}`;
    const response = await axios.get(apiUrl);
    const data = response.data;

    // Create an array of movie objects with desired properties
    const movieData = data.Search.map((movie) => {
      return {
        title: movie.Title,
        year: movie.Year,
        imdbId: movie.imdbID,
      };
    });

    // Save movieData to the database
    await Movie.insertMany(movieData);

    console.log('Movie data seeded successfully');

    // Make the API request for rating data
    const ratingPromises = movieData.map(async (movie) => {
      const ratingUrl = `http://www.omdbapi.com/?i=${movie.imdbId}&apikey=${api_key}`;
      const ratingResponse = await axios.get(ratingUrl);
      const ratingData = ratingResponse.data;

      // Extract the desired rating information
      const ratings = ratingData.Ratings.map((rating) => {
        return {
          source: rating.Source,
          value: rating.Value,
          movieId: movie._id,
        };
      });

      // Save the ratings to the database
      await Rating.insertMany(ratings);
    });

    await Promise.all(ratingPromises);

    console.log('Rating data seeded successfully');
  } catch (error) {
    console.error('Error seeding data:', error);
  }
}

seedData();