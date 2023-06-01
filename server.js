//MODULES
import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import actors from '../API-Back-end-P2/models/actors.js';
import titles from '../API-Back-end-P2/models/titles.js';
import data from '../API-Back-end-P2/db/data.json' assert { type: 'json' };

dotenv.config();

const app = express();

app.use(express.json());

/*mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  
  mongoose.connection.on('connected', () => {
    console.log('Connected to MongoDB');
  });
  
  mongoose.connection.on('error', (err) => {
    console.error('Failed to connect to MongoDB', err);
  });*/


const PORT = process.env.PORT || 8080;
