const AbstractManager = require("./AbstractManager");

// Changer le nom de la class par VOTRE_TABLEManager
class ImageTrainManager extends AbstractManager {
  constructor() {
    // Modifier la table en dessous en fonction de votre table en string
    super({ table: "image_train" });
  }

  // Post ImageTrain data
  // Partie à modifier en fonction de la table que vous visez
  insert(ImageTrain) {
    return this.connection.query(
      `insert into ${this.table} (title, path, user_id, train_id, created_on, updated_on, published) values (?, ?, ?, ?, ?, ?, ?)`,
      // Dois correspondre à la table visé au dessus et en dessous,
      // ne pas oublier de verifier que le nombre de ? est egale au nombre de champs dans la base
      [
        ImageTrain.title,
        ImageTrain.path,
        ImageTrain.user_id,
        ImageTrain.train_id,
        ImageTrain.created_on,
        ImageTrain.updated_on,
        ImageTrain.published,
      ]
    );
  }

  // update ImageTrain
  // a changer en fonction de la table visé
  update(ImageTrain) {
    return this.connection.query(
      `update ${this.table} set title = ?, path = ?, user_id = ?, train_id = ?,
       created_on = ?, updated_on = ?, published = ? where id = ?`,
      // Ne Surtout pas oublié l'id en dernier
      [
        ImageTrain.title,
        ImageTrain.path,
        ImageTrain.user_id,
        ImageTrain.train_id,
        ImageTrain.created_on,
        ImageTrain.updated_on,
        ImageTrain.published,
        ImageTrain.id,
      ]
    );
  }
}

module.exports = ImageTrainManager;
