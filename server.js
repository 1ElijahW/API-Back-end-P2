import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import db from './db/connection.js';
import movieRoutes from './routes/movieRoutes.js';
import ratingRoutes from './routes/ratingRoutes.js';

dotenv.config();

const port = process.env.PORT || 3030;

const app = express();

app.use(cors({
  origin: 'http://127.0.0.1:5500', // Replace with your frontend client's URL
  optionsSuccessStatus: 200
}));

app.use(express.json());

// Register movie routes
app.use(movieRoutes);

// Register rating routes
app.use(ratingRoutes);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
