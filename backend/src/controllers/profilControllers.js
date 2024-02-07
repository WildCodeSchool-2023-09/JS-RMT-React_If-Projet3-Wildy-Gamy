// Import access to database tables
const tables = require("../tables");

// The B of BREAD - Browse (Read All) operation
const browse = async (req, res, next) => {
  try {
    // Fetch all profils from the database
    const profils = await tables.profile.readAll();
    // Respond with the profils in JSON format
    res.json(profils);
  } catch (err) {
    // Pass any errors to the error-handling middleware
    next(err);
  }
};
const read = async (req, res, next) => {
  try {
    const profils = await tables.profile.readProfileId(req.params.id);

    if (profils == null) {
      res.sendStatus(404);
    } else {
      res.json(profils);
    }
  } catch (err) {
    next(err);
  }
};

module.exports = {
  browse,
  read,
};
