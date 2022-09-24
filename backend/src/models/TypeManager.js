const AbstractManager = require("./AbstractManager");

class TypeManager extends AbstractManager {
  constructor() {
    super({ table: "type" });
  }

  insert(type) {
    return this.connection.query(
      `insert into ${this.table} (title) values ( ?)`,
      [type.title]
    );
  }

  update(type) {
    return this.connection.query(
      `update ${this.table} set title = ? where id = ?`,
      [type.title, type.id]
    );
  }
}
module.exports = TypeManager;
