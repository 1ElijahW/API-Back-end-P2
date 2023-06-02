import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import seedData from './seed.js';

dotenv.config();

const port = process.env.PORT || 8080;

const app = express();

// MongoDB connection URL
const MONGODB_URI = process.env.MONGODB_URI;

// Connect to MongoDB
mongoose
  .connect(MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log('Connected to MongoDB');

    // Call the seedData function to start seeding the data
    seedData();
  })
  .catch((error) => {
    console.error('Error connecting to MongoDB:', error);
  });

  app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });

