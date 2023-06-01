const fs = require('fs');
const axios = require('axios');

const api_key = '245d7e38';
const search_query = 'James Bond';

// Make the API request
const url = `http://www.omdbapi.com/?s=${search_query}&apikey=${api_key}`;
axios.get(url)
  .then(response => {
    const data = response.data;

    // Create an array for movie titles
    const titleData = [];

    // Extract and add movie titles to the array
    data.Search.forEach(movie => {
      titleData.push(movie.Title);
    });

    // Convert movie titles array to JSON
    const jsonData = JSON.stringify(titleData, null, 2);

    // Save JSON data to a file
    const fileName = 'data.json'; // Specify the file name here
    fs.writeFile(fileName, jsonData, err => {
      if (err) {
        console.error('Error writing to file:', err);
      } else {
        console.log(`Data saved to ${fileName}`);
      }
    });
  })
  .catch(error => {
    console.error('Error retrieving movie data:', error);
  });
