const models = require("../models");

// Le ImageAvatarController sert à faire la liaision avec le AbstractManager et le ImageAvatarController.

const getAll = (req, res) => {
  models.image_avatar
    .findAll()
    .then(([rows]) => {
      res.send(rows);
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

const read = (req, res) => {
  models.image_avatar
    .findByUserId(req.params.id)
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

const edit = (req, res) => {
  const ImageAvatar = req.body;

  // TODO validations (length, format...)

  ImageAvatar.id = parseInt(req.params.id, 10);

  models.image_avatar
    .update(ImageAvatar)
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

const add = (req, res) => {
  const ImageAvatar = req.body;

  // TODO validations (length, format...)

  models.image_avatar
    .insert(ImageAvatar)
    .then(([result]) => {
      res.location(`/imageavatar/${result.insertId}`).sendStatus(201);
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

const destroy = (req, res) => {
  models.image_avatar
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
  read,
  edit,
  add,
  destroy,
};
