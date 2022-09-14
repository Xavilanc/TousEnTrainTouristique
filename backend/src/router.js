const express = require("express");

const router = express.Router();

const trainControllers = require("./controllers/trainControllers");
const imageTrainControllers = require("./controllers/imageTrainControllers");
const imageAvatarControllers = require("./controllers/imageAvatarControllers");
const reviewControllers = require("./controllers/reviewControllers");
const contactControllers = require("./controllers/contactControllers");

/* Routes concernant la table train */
router.get("/api/trains", trainControllers.getAllJoin); // Tous les trains (avec jointures)
router.get("/api/trains/:id", trainControllers.readJoin); // Un train en particulier (avec jointures)
router.put("/api/trains/:id", trainControllers.edit); // Modifier un train
router.post("/api/trains", trainControllers.add); // Ajouter un train
router.delete("/api/trains/:id", trainControllers.destroy); // Supprimer un train

/* Routes concernant la table image_train */
router.get("/api/imagetrains", imageTrainControllers.getAll);
router.get("/api/imagetrains/:id", imageTrainControllers.read);
router.put("/api/imagetrains/:id", imageTrainControllers.edit);
router.post("/api/imagetrains", imageTrainControllers.add);
router.delete("/api/imagetrains/:id", imageTrainControllers.destroy);

/* Routes concernant la table image_avatar */
router.get("/api/imageavatars", imageAvatarControllers.getAll);
router.get("/api/imageavatars/:id", imageAvatarControllers.read);
router.put("/api/imageavatars/:id", imageAvatarControllers.edit);
router.post("/api/imageavatars", imageAvatarControllers.add);
router.delete("/api/imageavatars/:id", imageAvatarControllers.destroy);

/* Routes concernant la table review */
router.get("/api/trains/comments", reviewControllers.getAll); // Tous les commentaires (publiés ou non)
router.get("/api/trains/comments/published", reviewControllers.getAllPublished); // Uniquement les commentaires publiés
router.get("/api/trains/comments/:id", reviewControllers.read); // Un commentaire en particulier
router.get(
  "/api/trains/comments/notpublished",
  reviewControllers.getAllNotPublished
); // Uniquement les commentaires non publiés
router.put("/api/trains/comments/:id", reviewControllers.edit); // Éditer un commentaire
router.post("/api/trains/comments", reviewControllers.add); // Ajouter un commentaire
router.delete("/api/trains/comments/:id", reviewControllers.destroy); // Supprimer un commentaire

router.get("/api/contacts", contactControllers.getAll);
router.get("/api/contacts/:id", contactControllers.read);
router.put("/api/contacts/:id", contactControllers.edit);
router.post("/api/contacts", contactControllers.add);
router.delete("/api/contacts/:id", contactControllers.destroy);

module.exports = router;
