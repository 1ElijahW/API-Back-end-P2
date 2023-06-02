import titles from "../models/titles";

export const getTitle = {
  index: (req, res) => {
    titles.find({})
      .then((titles) => {
        res.json(titles);
      })
      .catch((error) => {
        res.status(500).json({ error: "Failed to retrieve titles" });
      });
  },
};

export const getSingleTitle = (req, res) => {
  const movieTitle = req.params.name;
  // Retrieve the movie title from the database using the provided name
  titles.findOne({ name: movieTitle })
    .then((foundTitle) => {
      if (foundTitle) {
        // Send the movie title data as the response
        res.status(200).json(foundTitle);
      } else {
        // If the movie title is not found, send a 404 error response
        res.status(404).json({ error: "Movie title not found" });
      }
    })
    .catch((error) => {
      res.status(500).json({ error: "Failed to retrieve movie title" });
    });
};

export const createTitle = (req, res) => {
  const movieTitle = req.params.name;
  const titleData = req.body;
  // Create a new movie title in the database using the provided name and title data
  titles.create({ name: movieTitle, ...titleData })
    .then((createdTitle) => {
      // Send a success response indicating the movie title was created
      res.status(201).json({ message: "Movie title created successfully" });
    })
    .catch((error) => {
      res.status(500).json({ error: "Failed to create movie title" });
    });
};

export const deleteTitle = (req, res) => {
  const movieTitle = req.params.name;
  // Delete the movie title from the database based on the provided name
  titles.deleteOne({ name: movieTitle })
    .then((deletedTitle) => {
      if (deletedTitle.deletedCount > 0) {
        // Send a success response indicating the movie title was deleted
        res.status(200).json({ message: "Movie title deleted successfully" });
      } else {
        // If the movie title is not found, send a 404 error response
        res.status(404).json({ error: "Movie title not found" });
      }
    })
    .catch((error) => {
      res.status(500).json({ error: "Failed to delete movie title" });
    });
};