// Import access to database tables
const tables = require("../tables");

// The B of BREAD - Browse (Read All) operation
const browse = async (req, res, next) => {
  try {
    // Fetch all comments from the database
    const comments = await tables.comment.readAll();

    // Respond with the comments in JSON format
    res.status(200).json(comments);
  } catch (err) {
    // Pass any errors to the error-handling middleware
    next(err);
  }
};

// The R of BREAD - Read operation
const read = async (req, res, next) => {
  try {
    // Fetch a specific comment from the database based on the provided ID
    const comment = await tables.comment.read(req.params.id);

    // If the comment is not found, respond with HTTP 404 (Not Found)
    // Otherwise, respond with the comment in JSON format
    if (comment == null) {
      res.sendStatus(404);
    } else {
      res.status(200).json(comment);
    }
  } catch (err) {
    // Pass any errors to the error-handling middleware
    next(err);
  }
};

// The E of BREAD - Edit (Update) operation
// This operation is not yet implemented
const edit = async (req, res, next) => {
  // Extract the comment data from the request body
  const comment = req.body;

  try {
    // Insert the comment into the database
    await tables.comment.update(comment, req.params.id);

    // Respond with HTTP 204 (No Content)
    res.sendStatus(204);
  } catch (err) {
    // Pass any errors to the error-handling middleware
    next(err);
  }
};

// The A of BREAD - Add (Create) operation
const add = async (req, res, next) => {
  // Extract the comment data from the request body
  const comment = req.body;

  try {
    // Insert the comment into the database
    const insertId = await tables.comment.create(comment);

    // Respond with HTTP 201 (Created) and the ID of the newly inserted comment
    res.status(201).json({ ...req.body, id: insertId });
  } catch (err) {
    // Pass any errors to the error-handling middleware
    next(err);
  }
};

// The D of BREAD - Destroy (Delete) operation
// This operation is not yet implemented
const destroy = async (req, res, next) => {
  // Extract the comment data from the request body
  try {
    // Insert the comment into the database
    await tables.comment.delete(req.params.id);

    // Respond with HTTP 204 (No Content)
    res.sendStatus(204);
  } catch (err) {
    // Pass any errors to the error-handling middleware
    next(err);
  }
};

// Ready to export the controller functions
module.exports = {
  browse,
  read,
  edit,
  add,
  destroy,
};
