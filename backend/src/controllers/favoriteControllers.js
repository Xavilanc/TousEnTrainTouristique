const models = require("../models");

const getAll = (req, res) => {
  models.favorite
    .findAll()
    .then((contacts) => {
      res.json(contacts[0]);
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

const read = (req, res) => {
  models.favorite
    .findFavorites(req.params.id)
    .then((favorite) => {
      if (favorite == null) {
        res.sendStatus(404);
      } else {
        res.json(favorite[0]);
      }
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

const add = (req, res) => {
  const favorite = req.body;

  models.favorite
    .insert(favorite)
    .then((result) => {
      res.location(`/favorite/${result.insertId}`).sendStatus(201);
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

const destroy = (req, res) => {
  models.favorite
    .deleteFavorite(req.params.id)
    .then((result) => {
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
  read,
  add,
  destroy,
};
