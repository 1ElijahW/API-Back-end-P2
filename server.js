//MODULES
import express from "express";
import dotenv from "dotenv";
dotenv.config();
import mongoose from 'mongoose';
import actors from '../API-Back-end-P2/models/actors.js';
import titles from '../API-Back-end-P2/models/titles.js';
import data from '../API-Back-end-P2/db/data.json' assert { type: 'json' };



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


const PORT = process.env.PORT || 8000;

//GET /actors/:name - Retrieve a specific actor by their name
app.get("/actors/:name", (req, res) => {
  const actorName = req.params.name;
  //Retrieve the actor from the database using the provided name
  //If the actor is found:
  if (actors) {
    //Send the actor data as the response
    res.status(200).json(actors);
  } else {
    //If the actor is not found, send a 404 error response
    res.status(404).json({ error: "Actor not found" });
  }
});

// POST /actors/:name - Create a new actor by sending actor data in the request body
app.post("/actors/:name", (req, res) => {
  const actorName = req.params.name;
  const actorData = req.body;
  // Create a new actor in the database using the provided name and actor data
  // If the actor is successfully created:
  if (createdActor) {
    // Send a success response indicating the actor was created
    res.status(201).json({ message: "Actor created successfully" });
  } else {
    // If the actor creation fails, send a 500 error response
    res.status(500).json({ error: "Failed to create actor" });
  }
});

// PUT /actors/:name - Update a specific actor by replacing their existing data with new data sent in the request body
app.put("/actors/:name", (req, res) => {
  const actorName = req.params.name;
  const actorData = req.body;
  // Update the actor in the database with the new actor data based on the provided name
  // If the actor is successfully updated:
  if (updatedActor) {
    // Send a success response indicating the actor was updated
    res.status(200).json({ message: "Actor updated successfully" });
  } else {
    // If the actor update fails, send a 404 error response
    res.status(404).json({ error: "Actor not found" });
  }
});

// DELETE /actors/:name - Delete a specific actor by their name
app.delete("/actors/:name", (req, res) => {
  const actorName = req.params.name;
  // Delete the actor from the database based on the provided name
  // If the actor is successfully deleted:
  if (deletedActor) {
    // Send a success response indicating the actor was deleted
    res.status(200).json({ message: "Actor deleted successfully" });
  } else {
    // If the actor deletion fails, send a 404 error response
    res.status(404).json({ error: "Actor not found" });
  }
});

// GET /titles/ - Retrieve a selection of movie titles
app.get("/titles", (req, res) => {
  // Retrieve a selection of movie titles from the database
  // If the titles are found:
  if (titles) {
    // Send the movie titles as the response
    res.status(200)
    res.send(data);
  } else {
    // If the titles are not found, send a 404 error response
    res.status(404).json({ error: "Titles not found" });
  }
});

// GET /titles/:name - Fetch a specific movie title
app.get("/titles/:name", (req, res) => {
  const movieTitle = req.params.name;
  // Retrieve the movie title from the database using the provided name
  // If the movie title is found:
  if (titles) {
    // Send the movie title data as the response
    res.status(200).json(foundTitle);
  } else {
    // If the movie title is not found, send a 404 error response
    res.status(404).json({ error: "Movie title not found" });
  }
});

// POST /titles/:name - create a new movie title contributed by the user
app.post("/titles/:name", (req, res) => {
  const movieTitle = req.params.name;
  const titleData = req.body;
  // Create a new movie title in the database using the provided name and title data
  // If the movie title is successfully created:
  if (createdTitle) {
    // Send a success response indicating the movie title was created
    res.status(201).json({ message: "Movie title created successfully" });
  } else {
    // If the movie title creation fails, send a 500 error response
    res.status(500).json({ error: "Failed to create movie title" });
  }
});

// DELETE /titles/:name - Remove a movie title
app.delete("/titles/:name", (req, res) => {
  const movieTitle = req.params.name;
  // Delete the movie title from the database based on the provided name
  // If the movie title is successfully deleted:
  if (deletedTitle) {
    // Send a success response indicating the movie title was deleted
    res.status(200).json({ message: "Movie title deleted successfully" });
  } else {
    // If the movie title deletion fails, send a 404 error response
    res.status(404).json({ error: "Movie title not found" });
  }
});

app.listen(PORT, () => {
  console.log(`Running on port ${PORT}`);
});
