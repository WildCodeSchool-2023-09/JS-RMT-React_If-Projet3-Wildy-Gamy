const AbstractManager = require("./AbstractManager");

class ProfilManager extends AbstractManager {
  constructor() {
    super({ table: "profile" });
  }

  async readAll() {
    const [rows] = await this.database.query(`select * from ${this.table}`);
    return rows;
  }

  async readProfileId(id) {
    const [rows] = await this.database.query(
      `select * from ${this.table} where player_id=?`,
      [id]
    );
    return rows[0];
  }
}

module.exports = ProfilManager;
