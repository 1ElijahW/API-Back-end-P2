import fs from 'fs';
import axios from 'axios';

const api_key = "245d7e38";
const search_query = "No Time To Die";

async function seedData() {
  try {
    // Make the API request for titles
    const titlesUrl = `http://www.omdbapi.com/?s=${search_query}&apikey=${api_key}`;
    const titlesResponse = await axios.get(titlesUrl);
    const titlesData = titlesResponse.data;

    // Create an array of movie objects with desired properties
    const titleData = titlesData.Search.map((title) => {
      return {
        title: title.Title,
        year: title.Year,
        imdbId: title.imdbID
      };
    });

    // Make the API request for directors
    const directorsUrl = `http://www.omdbapi.com/?s=${search_query}&type=movie&apikey=${api_key}`;
    const directorsResponse = await axios.get(directorsUrl);
    const directorsData = directorsResponse.data;

    // Create an array of director objects with desired properties
    const directorData = directorsData.Search.map((director) => {
      return {
        name: director.Director,
        imdbId: director.imdbID
      };
    });

    // Create an object with "titles" and "directors" properties containing the respective data
    const schema = {
      titles: titleData,
      directors: directorData
    };

    // Convert schema object to JSON
    const jsonData = JSON.stringify(schema, null, 2);

    // Save JSON data to a file
    const fileName = "data.json"; // Specify the file name here
    await fs.promises.writeFile(fileName, jsonData);
    console.log(`Data saved to ${fileName}`);
  } catch (error) {
    console.error("Error retrieving data:", error);
  }
}

seedData();