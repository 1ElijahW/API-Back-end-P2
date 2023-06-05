import axios from 'axios';
import fs from 'fs';
import mongoose from 'mongoose';
import db from './connection.js';
import dotenv from 'dotenv';
import Movie from '../models/movieModel.js';
import Rating from '../models/ratingModel.js';

dotenv.config();

const api_key = process.env.API_KEY;
const search_query = 'The Dark Knight' // ????

async function seedData() {
  try {
    // Make the API request for movie data
    const apiUrl = `http://www.omdbapi.com/?s=${search_query}&apikey=${api_key}`;

    const response = await axios.get(apiUrl);
    const data = response.data;

    const movieData = [];

    // Create an array of movie objects with desired properties
    data.Search.forEach((movie) => {
      const movieObject = {
        title: movie.Title,
        year: movie.Year,
        imdbId: movie.imdbID,
      };
      movieData.push(movieObject);
    });

    // Save movieData to the database
    await Movie.insertMany(movieData);

    console.log('Movie data seeded successfully');

    const ratingPromises = movieData.map(async (movie) => {
      const ratingUrl = `http://www.omdbapi.com/?i=${movie.imdbId}&apikey=${api_key}`;

      const ratingResponse = await axios.get(ratingUrl);
      const ratingData = ratingResponse.data;

      // Extract the desired rating information
      const ratings = ratingData.Ratings.map((rating) => {
        return {
          source: rating.Source,
          value: rating.Value,
        };
      });

      return ratings;
    });

    const ratingData = await Promise.all(ratingPromises);

    // Save the ratingData to the database
    const flattenedRatings = ratingData.flat();
    await Rating.insertMany(flattenedRatings);

    console.log('Rating data seeded successfully');
  } catch (error) {
    console.error('Error seeding data:', error);
  } finally {
    // Close the database connection
    mongoose.connection.close();
  }
}

seedData()