import titles from "../models/titles";

//Make this route get title needs fix
export const getTitle = {
  index: (req, res) => {
    titles.find({}).then((titles) => {
      res.json(titles);
    });
  },
};


// GET /titles/ - Retrieve a selection of movie titles
app.get("/titles", (req, res) => {
  // Retrieve a selection of movie titles from the database
  // If the titles are found:
  if (titles) {
    // Send the movie titles as the response
    res.status(200);
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


//Make controller function for Delete Title
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