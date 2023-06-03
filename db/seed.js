import axios from 'axios';
import fs from 'fs';

const api_key = process.env.API_KEY;
const search_query = 'James Bond';

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

    // Save movieData to a JSON file
    fs.writeFileSync('movie.json', JSON.stringify(movieData, null, 2));

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

    // Save the ratingData to a JSON file
    fs.writeFileSync('rating.json', JSON.stringify(ratingData.flat(), null, 2));

    console.log('Rating data seeded successfully');
  } catch (error) {
    console.error('Error seeding data:', error);
  }
}

export default seedData;