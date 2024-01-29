const AbstractManager = require("./AbstractManager");

class CommentManager extends AbstractManager {
  constructor() {
    // Call the constructor of the parent class (AbstractManager)
    // and pass the table name "comment" as configuration
    super({ table: "comment" });
  }

  // The C of CRUD - Create operation

  async create(comment) {
    const { avis } = comment;
    // Execute the SQL INSERT query to add a new comment to the "comment" table
    const [result] = await this.database.query(
      `insert into ${this.table} (avis) values (?)`,
      [avis]
    );

    // Return the ID of the newly inserted comment
    return result.insertId;
  }

  // The Rs of CRUD - Read operations

  async read(id) {
    // Execute the SQL SELECT query to retrieve a specific comment by its ID
    const [rows] = await this.database.query(
      `select * from ${this.table} where id = ?`,
      [id]
    );

    // Return the first row of the result, which represents the comment
    return rows[0];
  }

  async readAll() {
    // Execute the SQL SELECT query to retrieve all comments from the "comment" table
    const [rows] = await this.database.query(`select * from ${this.table}`);

    // Return the array of comments
    return rows;
  }

  // The U of CRUD - Update operation
  // TODO: Implement the update operation to modify an existing comment

  async update(comment, id) {
    // Execute the SQL INSERT query to update the row with tie id on the "comment" table
    const result = await this.database.query(
      `update ${this.table} set ? where id = ?`,
      [comment, id]
    );

    return result;
  }

  // The D of CRUD - Delete operation
  // TODO: Implement the delete operation to remove an comment by its ID
  async delete(id) {
    const result = await this.database.query(
      `delete from ${this.table} where id = ?`,
      [id]
    );

    return result;
  }
}

module.exports = CommentManager;
