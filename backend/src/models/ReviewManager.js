const AbstractManager = require("./AbstractManager");

// Changer le nom de la class par VOTRE_TABLEManager
class ReviewManager extends AbstractManager {
  constructor() {
    // Modifier la table en dessous en fonction de votre table en string
    super({ table: "review" });
  }

  // Tous les commentaires (avec jointures)
  findAllJoin() {
    return this.connection
      .query(`SELECT r.review_comment comment, r.created_on created_on, r.updated_on updated_on, r.published published, 
    u.name user_name, t.name train_name FROM review r
    JOIN user u ON u.id = r.review_user_id
    JOIN train t on t.id = r.review_train_id;`);
  }

  // Tous les commentaires publiés
  findAllPublished() {
    return this.connection.query(
      `select * from  ${this.table} where published=1`
    );
  }

  // Tous les commentaires non publiés
  findAllNotPublished() {
    return this.connection.query(
      `select * from  ${this.table} where published=0`
    );
  }

  // Tous les commentaires d'un train en particulier
  findAllPublishedByTrainId(id) {
    return this.connection.query(
      `select * from  ${this.table} where review_train_id = ? and published = 1`,
      [id]
    );
  }

  // Partie à modifier en fonction de la table que vous visez

  // Ajouter un commentaire
  insert(review) {
    return this.connection.query(
      `insert into ${this.table} (review_user_id, review_train_id, review_note, review_comment, created_on, updated_on, published) values (?, ?, ?, ?, ?, ?, ?)`,
      // Dois correspondre à la table visé au dessus et en dessous,
      // ne pas oublier de verifier que le nombre de ? est egale au nombre de champs dans la base
      [
        review.review_user_id,
        review.review_train_id,
        review.review_note,
        review.review_comment,
        review.created_on,
        review.updated_on,
        review.published,
      ]
    );
  }

  // a changer en fonction de la table visé

  // Modifier un commentaire
  update(review) {
    return this.connection.query(
      `update ${this.table} set review_user_id = ?, review_train_id = ?, review_note = ?, review_comment = ?,
       created_on = ?, updated_on = ?, published = ? where id = ?`,
      // Ne Surtout pas oublié l'id en dernier
      [
        review.review_user_id,
        review.review_train_id,
        review.review_note,
        review.review_comment,
        review.created_on,
        review.updated_on,
        review.published,
        review.id,
      ]
    );
  }
}

module.exports = ReviewManager;
