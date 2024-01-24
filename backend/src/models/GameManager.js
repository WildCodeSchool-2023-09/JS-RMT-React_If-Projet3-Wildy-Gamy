const AbstractManager = require("./AbstractManager");

class GameManager extends AbstractManager {
  constructor() {
    super({ table: "game" });
  }

  async readAll() {
    const [rows] = await this.database.query(
      `select id, image, alt, description, name from ${this.table}`
    );

    return rows;
  }

  async read(id) {
    const [rows] = await this.database.query(
      `select * from ${this.table} where id = ?`,
      [id]
    );

    return rows[0];
  }
}

module.exports = GameManager;
