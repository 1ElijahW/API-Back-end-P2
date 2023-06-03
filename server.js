import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import db from './db/connection.js';
import movieRoutes from './routes/movieRoutes.js';
import ratingRoutes from './routes/ratingRoutes.js';

dotenv.config();

const port = process.env.PORT || 8090;

const app = express();

app.use(cors());
app.use(express.json());

// Register movie routes
app.use(movieRoutes);

// Register rating routes
app.use(ratingRoutes);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});