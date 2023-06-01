const fs = require('fs');
const axios = require('axios');

const api_key = '245d7e38';
const search_query = 'James Bond'; 

// Make the API request
const url = `http://www.omdbapi.com/?s=${search_query}&apikey=${api_key}`;
axios.get(url)
  .then(response => {
    const data = response.data;

    // Create an array for movie data
    const movieData = [];

    // Extract and format desired information for each movie
    data.Search.forEach(movie => {
      const formattedMovie = {
        name: movie.Title,
        releaseyear: movie.Year,
        actors: movie.Actors,
        description: movie.Description,
        rating: movie.Rating,
        // Add more fields as needed
      };
      titleData.push(formattedMovie);
    });

    // Convert movie data to JSON
    const jsonData = JSON.stringify(movieData, null, 2);

    // Save JSON data to a file
    fs.writeFile('data.json', jsonData, err => {
      if (err) {
        console.error('Error writing to file:', err);
      } else {
        console.log('Data saved to data.json');
      }
    });
  })
  .catch(error => {
    console.error('Error retrieving movie data:', error);
  });


