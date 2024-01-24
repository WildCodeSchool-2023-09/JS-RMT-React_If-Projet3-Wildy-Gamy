// Import access to database tables
const tables = require("../tables");
const { transformTimeToMinute } = require("../services/time");

const browse = async (req, res, next) => {
  try {
    let party = [];
    if (req.query.stat === "played") {
      party = await tables.party.statByParty();
    } else if (req.query.stat === "is_won") {
      const stat = await tables.party.statByGame();
      party.push(
        { name: "won", value: +stat[0].victory },
        { name: "lost", value: +stat[0].defeat }
      );
    } else if (req.query.stat === "timeperplayer") {
      const stat = await tables.party.timePerPlayer();
      party = stat.map((el) => ({
        name: el.username,
        value: transformTimeToMinute(el.time),
      }));
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
