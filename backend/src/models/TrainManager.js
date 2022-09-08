const AbstractManager = require("./AbstractManager");

class TrainManager extends AbstractManager {
  constructor() {
    super({ table: "train" });
  }

  // Post train data
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

  // update train
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

  // Get all data from table train and join between train, image_train and area
  getJoin() {
    return this.connection
      .query(`SELECT t.name AS tname, t.description, t.created_on AS creat, t.updated_on AS updat,
    a.name AS areaName,
    i.title AS titl, i.path, i.created_on, i.updated_on,train_type.type_id,type.title AS types
    FROM train AS t
    LEFT JOIN image_train AS i ON i.train_id=t.id
    LEFT JOIN area AS a ON a.id=t.area_id
    LEFT JOIN train_type  ON t.id = train_type.train_id
    LEFT JOIN type ON type.id = train_type.type_id
    ;
              `);
  }
}

module.exports = TrainManager;
