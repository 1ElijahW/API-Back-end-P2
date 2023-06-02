// Import required modules
import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import titles from '../API-Back-end-P2/models/titles.js';
import directors from '../API-Back-end-P2/models/director.js';
import data from '../API-Back-end-P2/data/data.json' assert { type: 'json' };


// Load environment variables from .env file
dotenv.config();

// Create an instance of the Express application
const app = express();

// Parse incoming JSON data
app.use(express.json());

// Connect to MongoDB database
mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => {
    // If the connection is successful, log a success message
    console.log('Connected to MongoDB');

    // Get the port number from the environment variable or use a default value of 8080
    const PORT = process.env.PORT || 8080;

    // Start the server and listen on the specified port
    app.listen(PORT, () => {
      console.log(`Running on port ${PORT}`);
    });
  })
  .catch((err) => {
    // If there is an error connecting to the database, log the error message
    console.error('Failed to connect to MongoDB', err);
  });