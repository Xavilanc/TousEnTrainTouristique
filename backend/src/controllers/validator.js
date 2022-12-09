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
    .isEmail()
    .withMessage("Invalid mail")
    .isLength({ max: 255 }),
  body("password")
    .isStrongPassword({
      minLength: 8,
      minLowercase: 1,
      minUppercase: 1,
      minNumbers: 1,
      minSymbols: 1,
    })
    .notEmpty(),
  body("confirmPassword").custom((value, { req }) => {
    if (value !== req.body.password) {
      throw new Error("Password confirmation does not match password");
    }
    return true;
  }),
  (req, res, next) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      res.status(422).json({ validationErrors: errors.array() });
    } else {
      delete req.body.confirmPassword;
      next();
    }
  },
];

const validateUpdateUser = [
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
  body("review_user_id").isInt().notEmpty(),
  body("review_train_id").isInt().notEmpty(),
  body("review_note").isFloat(),
  body("review_comment")
    .isLength({ max: 255 })
    .notEmpty()
    .blacklist("<>")
    .blacklist("/")
    .blacklist("{}"),
  body("created_on").notEmpty(),
  body("published").isBoolean().notEmpty(),
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
  validateUpdateUser,
  validateReview,
  validateTrain,
};
