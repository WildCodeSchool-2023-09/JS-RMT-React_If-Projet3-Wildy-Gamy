const tables = require("../tables");

// The B of BREAD - Browse (Read All) operation
const browse = async (req, res, next) => {
  try {
    // Fetch all items from the database
    const players = await tables.player.readAll();

    // Respond with the items in JSON format
    res.json(players);
  } catch (err) {
    // Pass any errors to the error-handling middleware
    next(err);
  }
};

// The D of BREAD - Destroy (Delete) operation
const destroy = async (req, res, next) => {
  const deleteId = req.params.id;
  try {
    // Fetch a specific agents from the database based on the provided ID
    const result = await tables.player.delete(deleteId);

    // If the agents is not found, respond with HTTP 404 (Not Found)
    // Otherwise, respond with the agents in JSON format

    if (result.affectedRows > 0) {
      res.sendStatus(204);
    } else {
      res.sendStatus(404);
    }
  } catch (err) {
    next(err);
  }
};

module.exports = {
  browse,
  destroy,
};
