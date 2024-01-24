const AbstractManager = require("./AbstractManager");

class GameManager extends AbstractManager {
  constructor() {
    super({ table: "game" });
  }

  async readAll() {
    const [rows] = await this.database.query(
      `select id, image, alt from ${this.table}`
    );

    return rows;
  }
}

module.exports = GameManager;
