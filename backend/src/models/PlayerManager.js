const AbstractManager = require("./AbstractManager");

class PlayerManager extends AbstractManager {
  constructor() {
    // Call the constructor of the parent class (AbstractManager)
    // and pass the table name "item" as configuration
    super({ table: "player" });
  }

  async readAll() {
    // Execute the SQL SELECT query to retrieve all items from the "item" table
    const [rows] = await this.database.query(
      `select id, username, email from ${this.table}`
    );
    // Return the array of items
    return rows;
  }

  async searchByUserName(search) {
    const [rows] = await this.database.query(
      `select id, username, email from ${this.table} where username LIKE ?`,
      [`%${search}%`]
    );
    return rows;
  }

  async delete(id) {
    const [result] = await this.database.query(
      `delete from ${this.table} where id = ?`,
      [id]
    );
    return result;
  }

  async create(player) {
    const [result] = await this.database.query(
      `insert into ${this.table} (username, email, password) values (?, ?, ?)`,
      [player.username, player.email, player.password]
    );

    return result.insertId;
  }

  async readEmail(mail) {
    const [rows] = await this.database.query(
      `select * from ${this.table} where email = ?`,
      [mail]
    );
    return rows[0];
  }
}
module.exports = PlayerManager;
