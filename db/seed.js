import fs from 'fs';
import axios from 'axios';

const api_key = "245d7e38";
const search_query = "No Time To Die";

async function seedData() {
  try {
    // Make the API request
    const url = `http://www.omdbapi.com/?s=${search_query}&apikey=${api_key}`;
    const response = await axios.get(url);
    const data = response.data;

    // Create an array of movie objects with desired properties
    const movieData = data.Search.map((movie) => {
      console.log(movie);
      return {
        title: movie.Title,
        year: movie.Year,
        rated: movie.Rated,
      };
    });

    // Create an object with a "movies" property containing the movie data
    const schema = {
      movies: movieData,
    };

    // Convert schema object to JSON
    const jsonData = JSON.stringify(schema, null, 2);

    // Save JSON data to a file
    const fileName = "data.json"; // Specify the file name here
    await fs.promises.writeFile(fileName, jsonData);
    console.log(`Data saved to ${fileName}`);
  } catch (error) {
    console.error("Error retrieving movie data:", error);
  }
}

seedData();

 