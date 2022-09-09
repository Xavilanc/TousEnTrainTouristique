const AbstractManager = require("./AbstractManager");

// Changer le nom de la class par VOTRE_TABLEManager
class ImageAvatarManager extends AbstractManager {
  constructor() {
    // Modifier la table en dessous en fonction de votre table en string
    super({ table: "image_avatar" });
  }

  // Post ImageAvatar data
  // Partie à modifier en fonction de la table que vous visez
  insert(ImageAvatar) {
    return this.connection.query(
      `insert into ${this.table} (title, path, user_id) values (?, ?, ?)`,
      // Dois correspondre à la table visé au dessus et en dessous,
      // ne pas oublier de verifier que le nombre de ? est egale au nombre de champs dans la base
      [
        ImageAvatar.title,
        ImageAvatar.path,
        ImageAvatar.user_id,
        ImageAvatar.created_on,
        ImageAvatar.updated_on,
        ImageAvatar.published,
      ]
    );
  }

  // update ImageAvatar
  // a changer en fonction de la table visé
  update(ImageAvatar) {
    return this.connection.query(
      `update ${this.table} set title = ?, path = ?, user_id = ?
       where id = ?`,
      // Ne Surtout pas oublié l'id en dernier
      [ImageAvatar.title, ImageAvatar.path, ImageAvatar.user_id, ImageAvatar.id]
    );
  }
}

module.exports = ImageAvatarManager;
