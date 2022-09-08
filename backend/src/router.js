const express = require("express");

const router = express.Router();

const trainControllers = require("./controllers/trainControllers");

router.get("/api/train", trainControllers.browse);
router.get("/api/train/:id", trainControllers.read);
router.put("/api/train/:id", trainControllers.edit);
router.post("/api/train", trainControllers.add);
router.delete("/api/train/:id", trainControllers.destroy);

module.exports = router;
