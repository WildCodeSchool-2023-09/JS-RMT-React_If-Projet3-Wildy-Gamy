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
}

module.exports = PartyManager;
