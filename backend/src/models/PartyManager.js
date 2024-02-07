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

  async timePerPlayerByid(id) {
    const [rows] = await this.database.query(
      `
          SELECT p.player_id, pl.username, SEC_TO_TIME(SUM(TIME_TO_SEC(TIMEDIFF(p.end_time, p.start_time)))) AS time
          FROM party p
          JOIN player pl ON p.player_id = pl.id
          WHERE p.player_id = ?
          GROUP BY p.player_id, pl.username
          ORDER BY TIME_TO_SEC(time) DESC;
      `,
      [id]
    );

    if (Array.isArray(rows) && rows.length > 0) {
      return rows[0];
    }
    return null;
  }

  async victory(id) {
    const [wonRows] = await this.database.query(
      `SELECT COUNT(*) as won_count
          FROM ${this.table}
          WHERE player_id = ? AND is_won = 1;`,
      [id]
    );

    const [totalRows] = await this.database.query(
      `SELECT COUNT(*) as total_count
          FROM ${this.table}
          WHERE player_id = ?;`,
      [id]
    );

    return {
      wonGames: wonRows[0].won_count,
      totalGames: totalRows[0].total_count,
    };
  }
}

module.exports = PartyManager;
