const express = require("express");

const router = express.Router();

const trainControllers = require("./controllers/trainControllers");
const imageTrainControllers = require("./controllers/imageTrainControllers");
const imageAvatarControllers = require("./controllers/imageAvatarControllers");
const reviewControllers = require("./controllers/reviewControllers");

/* Routes concernant la table train */
router.get("/api/train", trainControllers.browseJoin);
router.get("/api/train/:id", trainControllers.read);
router.put("/api/train/:id", trainControllers.edit);
router.post("/api/train", trainControllers.add);
router.delete("/api/train/:id", trainControllers.destroy);

/* Routes concernant la table image_train */
router.get("/api/imagetrain", imageTrainControllers.browse);
router.get("/api/imagetrain/:id", imageTrainControllers.read);
router.put("/api/imagetrain/:id", imageTrainControllers.edit);
router.post("/api/imagetrain", imageTrainControllers.add);
router.delete("/api/imagetrain/:id", imageTrainControllers.destroy);

/* Routes concernant la table image_avatar */
router.get("/api/imageavatar", imageAvatarControllers.browse);
router.get("/api/imageavatar/:id", imageAvatarControllers.read);
router.put("/api/imageavatar/:id", imageAvatarControllers.edit);
router.post("/api/imageavatar", imageAvatarControllers.add);
router.delete("/api/imageavatar/:id", imageAvatarControllers.destroy);

/* Routes concernant la table review */
router.get("/api/review", reviewControllers.getAll); // Tous les commentaires (publiés ou non)
router.get("/api/review/publiched", reviewControllers.getAllPubliched); // Uniquement les commentaires publiés
module.exports = router;
