import actors from "../models/actors";

export const actorController = {
  index: (req, res) => {
    actors.find({}).then((actors) => {
      res.json(actors);
    });
  },
};

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
