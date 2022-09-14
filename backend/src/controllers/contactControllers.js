const models = require("../models");

const getAll = (req, res) => {
  models.contact
    .findAll()
    .then((contacts) => {
      res.json(contacts);
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

const read = (req, res) => {
  models.contact
    .find(req.params.id)
    .then((contacts) => {
      if (contacts == null) {
        res.sendStatus(404);
      } else {
        res.json(contacts);
      }
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

const edit = (req, res) => {
  const contact = req.body;

  contact.id = parseInt(req.params.id, 10);

  models.contact
    .update(contact)
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

const add = (req, res) => {
  const contact = req.body;

  models.contact
    .insert(contact)
    .then((result) => {
      res.location(`/contacts/${result.insertId}`).sendStatus(201);
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

const destroy = (req, res) => {
  models.contact
    .delete(req.params.id)
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
  edit,
  add,
  destroy,
};
