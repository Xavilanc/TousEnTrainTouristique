const AbstractManager = require("./AbstractManager");

class FavoriteManager extends AbstractManager {
  constructor() {
    super({ table: "favorite" });
  }

  findFavoritesByUserId(id) {
    return this.connection.query(
      `select id, user_id, train_id, added_on from  ${this.table} where user_id = ?`,
      [id]
    );
  }

  findFavoritesByTrainId(id) {
    return this.connection.query(
      `select id, user_id, train_id, added_on from  ${this.table} where train_id = ?`,
      [id]
    );
  }

  insert(favorite) {
    return this.connection.query(
      `insert into ${this.table} (user_id, train_id, added_on) values ( ?, ?, ?)`,
      [favorite.user_id, favorite.train_id, favorite.added_on]
    );
  }

  deleteFavorite(id) {
    return this.connection.query(
      `delete from ${this.table} where train_id = ?`,
      [id]
    );
  }
}
module.exports = FavoriteManager;
