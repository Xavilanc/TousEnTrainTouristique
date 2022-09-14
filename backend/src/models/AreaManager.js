const AbstractManager = require("./AbstractManager");

class AreaManager extends AbstractManager {
  constructor() {
    super({ table: "area" });
  }

  insert(area) {
    return this.connection.query(
      `insert into ${this.table} (name) values ( ?, ?)`,
      [area.name]
    );
  }

  update(area) {
    return this.connection.query(
      `update ${this.table} set name = ? where id = ?`,
      [area.name, area.id]
    );
  }
}
module.exports = AreaManager;
