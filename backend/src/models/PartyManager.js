const AbstractManager = require("./AbstractManager");

class PartyManager extends AbstractManager {
  constructor() {
    super({ table: "party" });
  }

  async readAll() {
    const [rows] = await this.database.query(`select * from ${this.table}`);
    return rows;
  }

  async statByParty() {
    const [rows] = await this.database.query(
      `select count(party.game_id) as value , g.name from ${this.table} inner join game as g on g.id = ${this.table}.game_id group by g.name`
    );
    return rows;
  }

  async statByGame() {
    const [rows] = await this.database.query(`
      select
      sum(case when is_won = 1 then 1 else 0 end) as victory, 
      sum(case when is_won = 0 then 1 else 0 end) as defeat
      from ${this.table} 
    `);
    return rows;
  }

  async timePerPlayer() {
    const [rows] = await this.database.query(`
    SELECT p.player_id, pl.username, SEC_TO_TIME(SUM(TIME_TO_SEC(TIMEDIFF(p.end_time, p.start_time)))) AS time
    FROM party p
    JOIN player pl ON p.player_id = pl.id
    GROUP BY p.player_id, pl.username
    ORDER BY TIME_TO_SEC(time) DESC;
    `);
    return rows;
  }
}

module.exports = PartyManager;
