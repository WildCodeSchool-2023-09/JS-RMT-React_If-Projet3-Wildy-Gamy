const AbstractManager = require("./AbstractManager");

class PartyManager extends AbstractManager {
  constructor() {
    super({ table: "party" });
  }

  async readAll() {
    // Execute the SQL SELECT query to retrieve all partys from the "party" table
    const [rows] = await this.database.query(`select * from ${this.table}`);

    // Return the array of partys
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

  async timeperplayer() {
    const [rows] = await this.database.query(`
    select player_id, sec_to_time(sum(time_to_sec(diff))) as
    timePerPlayer from(select player_id, timediff(end_time, start_time) as diff from ${this.table})
    as subquery group by player_id order by time_to_sec(timePerPlayer) desc
    `);
    return rows;
  }
}

module.exports = PartyManager;
