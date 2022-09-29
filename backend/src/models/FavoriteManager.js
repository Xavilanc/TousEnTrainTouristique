const AbstractManager = require("./AbstractManager");

class FavoriteManager extends AbstractManager {
  constructor() {
    super({ table: "favorite" });
  }

  findFavoritesByUserId(id) {
    return this.connection.query(
      `SELECT f.id, f.user_id, f.train_id, t.name, 
      json_objectagg(i.id, i.path) as path
      FROM favorite as f
            join train as t on t.id=f.train_id
            join image_train as i on i.train_id=f.train_id
            where f.user_id = ?
            group by f.id;`,
      [id]
    );
  }

  findFavoritesByTrainId(train, id) {
    return this.connection.query(
      `select id, user_id, train_id, added_on from  ${this.table} where train_id = ? and user_id = ?`,
      [train, id]
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
