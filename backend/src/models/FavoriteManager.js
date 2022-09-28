const AbstractManager = require("./AbstractManager");

class FavoriteManager extends AbstractManager {
  constructor() {
    super({ table: "favorite" });
  }

  findFavorites(trainId) {
    return this.connection.query(
      `select id, user_id, train_id, added_on from  ${this.table} where train_id = ?`,
      [trainId]
    );
  }

  insert(favorite) {
    return this.connection.query(
      `insert into ${this.table} (user_id, train_id, added_on) values ( ?, ?, ?)`,
      [favorite.user_id, favorite.train_id, favorite.added_on]
    );
  }
}
module.exports = FavoriteManager;
