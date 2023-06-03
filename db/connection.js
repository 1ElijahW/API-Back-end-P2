// Import necessary modules
import mongoose from 'mongoose';
import dotenv from 'dotenv';

// Load environment variables from .env file
dotenv.config();

// Get the MongoDB connection URL from environment variables
const MONGODB_URI = process.env.MONGODB_URI;

// Connect to MongoDB using Mongoose
mongoose.connect(MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => {
    // Connection successful
    console.log('MongoDB connected...');
  })
  .catch(err => {
    // Connection error
    console.log('Error connecting to MongoDB:', err);
  });

// Export the Mongoose instance
export default mongoose;