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
      `update ${this.table} set name = ?, train_user_id = ?, area_id = ?,
       created_on = ?, updated_on = ?, published = ?, description = ?,
       description_info = ? where id = ?`,
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

  getJoin() {
    return this.connection
      .query(`SELECT t.name, t.description, t.created_on, t.updated_on,
              a.name,
              i.title, i.path, i.created_on, i.updated_on
              FROM train AS t
              INNER JOIN image_train AS i ON t.id=i.train_id
              INNER JOIN area AS a ON a.id=t.area_id;`);
  }
}

module.exports = TrainManager;
