const models = require("../models");

const browse = (req, res) => {
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
    .then((contact) => {
      if (contact == null) {
        res.sendStatus(404);
      } else {
        res.json(contact);
      }
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

const edit = (req, res) => {
  const Contact = req.body;

  Contact.id = parseInt(req.params.id, 10);

  models.contact
    .update(Contact)
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
  const Contact = req.body;

  models.contact
    .insert(Contact)
    .then((result) => {
      res.location(`/contact/${result.insertId}`).sendStatus(201);
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
  browse,
  read,
  edit,
  add,
  destroy,
};
