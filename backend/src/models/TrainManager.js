const AbstractManager = require("./AbstractManager");

class TrainManager extends AbstractManager {
  constructor() {
    super({ table: "train" });
  }

  insert(train) {
    return this.connection.query(
      `insert into ${this.table} (name, train_user_id, area_id, created_on, updated_on, published, description, description_info) values (?, ?, ?, ?, ?, ?, ?, ?)`,
      [
        train.name,
        train.train_user_id,
        train.area_id,
        train.created_on,
        train.updated_on,
        train.published,
        train.description,
        train.description_info,
      ]
    );
  }

  // update(train) {
  //   return this.connection.query(
  //     `update ${this.table} set title = ? where id = ?`,
  //     [train.name, train.id]
  //   );
  // }
  update(train) {
    return this.connection.query(
      `update ${this.table} set name = ?, train_user_id = ?, area_id = ?, created_on = ?, updated_on = ?, published = ?, description = ?, description_info = ? where id = ?`,
      [
        train.name,
        train.train_user_id,
        train.area_id,
        train.created_on,
        train.updated_on,
        train.published,
        train.description,
        train.description_info,
        train.id,
      ]
    );
  }
}

module.exports = TrainManager;
