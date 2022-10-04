const AbstractManager = require("./AbstractManager");

// Changer le nom de la class par VOTRE_TABLEManager
class ImageAvatarManager extends AbstractManager {
  constructor() {
    // Modifier la table en dessous en fonction de votre table en string
    super({ table: "image_avatar" });
  }

  findByUserId(id) {
    return this.connection.query(
      `select * from  ${this.table} where user_id = ?`,
      [id]
    );
  }

  findWithUser() {
    return this.connection.query(
      `select i.id, i.path, u.name from  ${this.table} as i
      JOIN user AS u ON i.user_id = u.id`
    );
  }

  // Post ImageAvatar data
  // Partie à modifier en fonction de la table que vous visez
  insert(ImageAvatar) {
    return this.connection.query(
      `insert into ${this.table} ( path, user_id) values (?, ?)`,
      // Dois correspondre à la table visé au dessus et en dessous,
      // ne pas oublier de verifier que le nombre de ? est egale au nombre de champs dans la base
      [ImageAvatar.path, ImageAvatar.user_id]
    );
  }

  // update ImageAvatar
  // a changer en fonction de la table visé
  update(ImageAvatar) {
    return this.connection.query(
      `update ${this.table} set path = ?, user_id = ?
       where id = ?`,
      // Ne Surtout pas oublié l'id en dernier
      [ImageAvatar.path, ImageAvatar.user_id, ImageAvatar.id]
    );
  }

  deleteAvatar(id) {
    return this.connection.query(`delete from ${this.table} where id = ?`, [
      id,
    ]);
  }
}

module.exports = ImageAvatarManager;
