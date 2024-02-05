const argon2 = require("argon2");
const tables = require("../tables");
const { createToken } = require("../services/jwt");

// The B of BREAD - Browse (Read All) operation
const browse = async (req, res, next) => {
  try {
    let user = [];
    if (req.query.search) {
      user = await tables.player.searchByUserName(req.query.search);
    } else {
      // Fetch all items from the database
      user = await tables.player.readAll();
    }
    // Respond with the items in JSON format
    res.status(200).json(user);
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

// The A of BREAD - Add (Create) operation
const add = async (req, res, next) => {
  // Extract the item data from the request body
  const player = req.body;
  try {
    // Insert the item into the database
    const insertId = await tables.player.create(player);

    // Respond with HTTP 201 (Created) and the ID of the newly inserted item
    res.status(201).json({ insertId });
  } catch (err) {
    // Pass any errors to the error-handling middleware
    next(err);
  }
};

const log = async (req, res, next) => {
  try {
    const login = await tables.player.readEmail(req.body.email);
    if (login) {
      const passwordMatch = await argon2.verify(
        login.password,
        req.body.password
      );

      if (passwordMatch) {
        const profil = await tables.profile.readProfileId(login.id);
        delete login.password;
        res
          .cookie("auth", createToken(login), { httpOnly: true })
          .status(200)
          .json({
            login,
            profil,
          });
      } else {
        res.sendStatus(403);
      }
    } else {
      res.sendStatus(403);
    }
  } catch (err) {
    next(err);
  }
};

const logout = (req, res) => {
  // Effacer le cookie d'authentification côté client
  res.clearCookie("auth");

  // Répondre avec succès
  res.sendStatus(200);
};

module.exports = {
  browse,
  destroy,
  add,
  log,
  logout,
};
