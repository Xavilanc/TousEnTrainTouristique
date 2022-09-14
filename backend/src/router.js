const express = require("express");

const router = express.Router();

const trainControllers = require("./controllers/trainControllers");
const imageTrainControllers = require("./controllers/imageTrainControllers");
const imageAvatarControllers = require("./controllers/imageAvatarControllers");
const reviewControllers = require("./controllers/reviewControllers");

/* Routes concernant la table train */
router.get("/api/trains", trainControllers.browseJoin);
router.get("/api/trains/:id", trainControllers.read);
router.put("/api/trains/:id", trainControllers.edit);
router.post("/api/trains", trainControllers.add);
router.delete("/api/trains/:id", trainControllers.destroy);

/* Routes concernant la table image_train */
router.get("/api/imagetrains", imageTrainControllers.browse);
router.get("/api/imagetrains/:id", imageTrainControllers.read);
router.put("/api/imagetrains/:id", imageTrainControllers.edit);
router.post("/api/imagetrains", imageTrainControllers.add);
router.delete("/api/imagetrains/:id", imageTrainControllers.destroy);

/* Routes concernant la table image_avatar */
router.get("/api/imageavatars", imageAvatarControllers.browse);
router.get("/api/imageavatars/:id", imageAvatarControllers.read);
router.put("/api/imageavatars/:id", imageAvatarControllers.edit);
router.post("/api/imageavatars", imageAvatarControllers.add);
router.delete("/api/imageavatars/:id", imageAvatarControllers.destroy);

/* Routes concernant la table review */
router.get("/api/reviews", reviewControllers.getAll); // Tous les commentaires (publiés ou non)
router.get("/api/reviews/published", reviewControllers.getAllPublished); // Uniquement les commentaires publiés
router.get("/api/reviews/:id", reviewControllers.read); // Un commentaire en particulier
router.get("/api/reviews/notpublished", reviewControllers.getAllNotPublished); // Uniquement les commentaires non publiés
router.put("/api/reviews/:id", reviewControllers.edit); // Éditer un commentaire
router.post("/api/reviews", reviewControllers.add); // Ajouter un commentaire
router.delete("/api/reviews/:id", reviewControllers.destroy); // Supprimer un commentaire

module.exports = router;
