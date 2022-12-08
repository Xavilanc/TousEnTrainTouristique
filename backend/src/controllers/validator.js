const { body, validationResult } = require("express-validator");

const validateUser = [
  body("name")
    .isLength({ max: 255 })
    .notEmpty()
    .blacklist("<>")
    .blacklist("/")
    .blacklist("{}"),
  body("mail")
    .trim()
    .normalizeEmail()
    .isEmail()
    .withMessage("Invalid mail")
    .isLength({ max: 255 }),
  (req, res, next) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      res.status(422).json({ validationErrors: errors.array() });
    } else {
      next();
    }
  },
];

const validateReview = [
  body("review_comment")
    .isLength({ max: 255 })
    .notEmpty()
    .blacklist("<>")
    .blacklist("/")
    .blacklist("{}"),
  (req, res, next) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      res.status(422).json({ validationErrors: errors.array() });
    } else {
      next();
    }
  },
];

const validateTrain = [
  body("name")
    .isLength({ max: 50 })
    .notEmpty()
    .blacklist("<>")
    .blacklist("/")
    .blacklist("{}"),
  body("description")
    .isLength({ max: 255 })
    .notEmpty()
    .blacklist("<>")
    .blacklist("/")
    .blacklist("{}"),
  body("description_info")
    .isLength({ max: 255 })
    .notEmpty()
    .blacklist("<>")
    .blacklist("/")
    .blacklist("{}"),
  (req, res, next) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      res.status(422).json({ validationErrors: errors.array() });
    } else {
      next();
    }
  },
];

module.exports = {
  validateUser,
  validateReview,
  validateTrain,
};
