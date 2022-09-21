const AbstractManager = require("./AbstractManager");

class UserManager extends AbstractManager {
  constructor() {
    super({ table: "user" });
  }

  getAllUser() {
    return this.connection.query(
      `SELECT name, mail, user_right, created_on, updated_on from ${this.table}`
    );
  }

  getAllUserFromId(id) {
    return this.connection.query(
      `SELECT name, mail, user_right, created_on, updated_on FROM ${this.table} WHERE id = ?`,
      [id]
    );
  }

  insert(user) {
    return this.connection.query(
      `insert into ${this.table} (name, password, mail, user_right, created_on, updated_on) values ( ?, ?, ?, ?, ?, ?)`,
      [
        user.name,
        user.password,
        user.mail,
        user.user_right,
        user.created_on,
        user.updated_on,
      ]
    );
  }

  update(user) {
    return this.connection.query(
      `update ${this.table} set name = ?, password = ?,mail = ?, user_right = ?, created_on = ?, updated_on = ? where id = ?`,
      [
        user.name,
        user.password,
        user.mail,
        user.user_right,
        user.created_on,
        user.updated_on,
        user.id,
      ]
    );
  }
}
module.exports = UserManager;
