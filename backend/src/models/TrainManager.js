const AbstractManager = require("./AbstractManager");

class TrainManager extends AbstractManager {
  constructor() {
    super({ table: "train" });
  }

  insert(train) {
    return this.connection.query(
      `insert into ${this.table} (title) values (?)`,
      [train.title]
    );
  }

  update(train) {
    return this.connection.query(
      `update ${this.table} set title = ? where id = ?`,
      [train.title, train.id]
    );
  }
}

module.exports = TrainManager;
