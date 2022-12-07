const { body, validationResult, check } = require("express-validator");

const validateUser = [
  body("name").isLength({ max: 255 }).notEmpty().isString(),
  check("mail")
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
module.exports = {
  validateUser,
};
