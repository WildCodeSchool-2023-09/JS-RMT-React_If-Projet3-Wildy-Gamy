const tables = require("../tables");

// The B of BREAD - Browse (Read All) operation
const browse = async (req, res, next) => {
  try {
    // Fetch all items from the database
    const games = await tables.game.readAll();

    // Respond with the items in JSON format
    res.json(games);
  } catch (err) {
    // Pass any errors to the error-handling middleware
    next(err);
  }
};

const read = async (req, res, next) => {
  try {
    const games = await tables.game.read(req.params.id);

    if (games == null) {
      res.sendStatus(404);
    } else {
      res.status(200).json(games);
    }
  } catch (err) {
    next(err);
  }
};

module.exports = {
  browse,
  read,
};
