// Import access to database tables
const tables = require("../tables");

const browse = async (req, res, next) => {
  try {
    let party = [];
    if (req.query.stat === "played") {
      party = await tables.party.statByParty();
    } else if (req.query.stat === "is_won") {
      party = await tables.party.statByGame();
    } else {
      party = await tables.party.readAll();
    }
    res.status(200).json(party);
  } catch (err) {
    next(err);
  }
};
module.exports = {
  browse,
};
