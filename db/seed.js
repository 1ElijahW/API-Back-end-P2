const fs = require("fs");
const axios = require("axios");

const api_key = "245d7e38";
const search_query = "James Bond";

// Make the API request
const url = `http://www.omdbapi.com/?s=${search_query}&apikey=${api_key}`;
axios.get(url)
  .then((response) => {
    const data = response.data;

    // Create an array of movie objects with desired properties
    const movieData = data.Search.map((movie) => {
      console.log(movie)
      return {
        title: movie.Title,
        year: movie.Year,
        rated: movie.Rated 
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
    fs.writeFile(fileName, jsonData, (err) => {
      if (err) {
        console.error("Error writing to file:", err);
      } else {
        console.log(`Data saved to ${fileName}`);
      }
    });
  })
  .catch((error) => {
    console.error("Error retrieving movie data:", error);
  });
