const models = require("../models");

// Le reviewController sert à faire la liaision avec le AbstractManager et le ReviewManager.

// Tous les commentaires
const getAll = (req, res) => {
  models.review
    .findAll()
    .then(([rows]) => {
      res.send(rows);
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

// Tous les commentaires (avec jointures)
const getAllJoin = (req, res) => {
  models.review
    .findAllJoin()
    .then(([rows]) => {
      res.send(rows);
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

// Uniquement les commentaires publiés
const getAllPublished = (req, res) => {
  models.review
    .findAllPublished()
    .then(([rows]) => {
      res.send(rows);
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

// Uniquement les commentaires publiés (avec jointures)
const getAllJoinPublished = (req, res) => {
  models.review
    .findAllJoinPublished()
    .then(([rows]) => {
      res.send(rows);
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

// Uniquement les commentaires non publiés
const getAllNotPublished = (req, res) => {
  models.review
    .findAllNotPublished()
    .then(([rows]) => {
      res.send(rows);
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

// Uniquement les commentaires non publiés (avec jointures)
const getAllJoinNotPublished = (req, res) => {
  models.review
    .findAllJoinNotPublished()
    .then(([rows]) => {
      res.send(rows);
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};
// Un commentaire en particulier
const read = (req, res) => {
  models.review
    .find(req.params.id)
    .then(([rows]) => {
      if (rows[0] == null) {
        res.sendStatus(404);
      } else {
        res.send(rows[0]);
      }
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

// Uniquement les commentaires publiés sur un train en particulier
const getAllPublishedByTrainId = (req, res) => {
  models.review
    .findAllPublishedByTrainId(req.params.id)
    .then(([rows]) => {
      if (rows[0] == null) {
        res.sendStatus(404);
      } else {
        res.send(rows[0]);
      }
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

// Uniquement les commentaires publiés sur un train en particulier
const getAllJoinPublishedByTrainId = (req, res) => {
  models.review
    .findAllJoinPublishedByTrainId(req.params.id)
    .then(([rows]) => {
      if (rows[0] == null) {
        res.sendStatus(404);
      } else {
        res.send(rows[0]);
      }
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

// Modifier un commentaire
const edit = (req, res) => {
  const review = req.body;

  // TODO validations (length, format...)

  review.id = parseInt(req.params.id, 10);

  models.review
    .update(review)
    .then(([result]) => {
      if (result.affectedRows === 0) {
        res.sendStatus(404);
      } else {
        res.sendStatus(204);
      }
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

// Ajouter un commentaire
const add = (req, res) => {
  const review = req.body;

  // TODO validations (length, format...)

  models.review
    .insert(review)
    .then(([result]) => {
      res.location(`/imageTrain/${result.insertId}`).sendStatus(201);
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

// Supprimer un commentaire
const destroy = (req, res) => {
  models.review
    .delete(req.params.id)
    .then(([result]) => {
      if (result.affectedRows === 0) {
        res.sendStatus(404);
      } else {
        res.sendStatus(204);
      }
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

module.exports = {
  getAll,
  getAllJoin,
  getAllJoinPublished,
  getAllPublished,
  getAllJoinNotPublished,
  getAllNotPublished,
  getAllJoinPublishedByTrainId,
  getAllPublishedByTrainId,
  read,
  edit,
  add,
  destroy,
};
