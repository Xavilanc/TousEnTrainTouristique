const express = require("express");

const router = express.Router();

const trainControllers = require("./controllers/trainControllers");
const imageTrainControllers = require("./controllers/imageTrainControllers");
const imageAvatarControllers = require("./controllers/imageAvatarControllers");
const reviewControllers = require("./controllers/reviewControllers");
const contactControllers = require("./controllers/contactControllers");
const areaControllers = require("./controllers/areaControllers");
const typeControllers = require("./controllers/typeControllers");

/* Routes concernant la table train */
router.get("/api/trains", trainControllers.getAllJoin); // Tous les trains (avec jointures)
router.get("/api/trains/images/", imageTrainControllers.getAll); // Toutes les images de trains
router.get("/api/trains/:id/images", trainControllers.getAllJoinWithImagesById); // Un train en particulier avec les images et la région
router.get(
  "/api/trains/:id/activities",
  trainControllers.getAllJoinWithActivitiesById
); // Un train en particulier avec les activitées
router.get("/api/trains/:id", trainControllers.readJoin); // Un train en particulier (avec jointures)
router.get(
  "/api/trains/filter/:area/:type",
  trainControllers.readWithAreaAndId
); // Un train avec une région et un type particulier
router.put("/api/trains/:id", trainControllers.edit); // Modifier un train
router.post("/api/trains", trainControllers.add); // Ajouter un train
router.delete("/api/trains/:id", trainControllers.destroy); // Supprimer un train

/* Routes concernant la table image_train */
router.get("/api/trains/images/:id", imageTrainControllers.read); // Une image de train de particulier
router.put("/api/trains/images/:id", imageTrainControllers.edit); // Modifier une image d'un train
router.post("/api/trains/images", imageTrainControllers.add); // Ajouter une image d'un train
router.delete("/api/trains/images/:id", imageTrainControllers.destroy); // Supprimer une image d'un train

/* Routes concernant la table image_avatar */
router.get("/api/imageavatars", imageAvatarControllers.getAll);
router.get("/api/imageavatars/:id", imageAvatarControllers.read);
router.put("/api/imageavatars/:id", imageAvatarControllers.edit);
router.post("/api/imageavatars", imageAvatarControllers.add);
router.delete("/api/imageavatars/:id", imageAvatarControllers.destroy);

/* Routes concernant la table review */
router.get("/api/reviews", reviewControllers.getAllJoin); // Tous les commentaires (publiés ou non)
router.get("/api/reviews/published", reviewControllers.getAllJoinPublished); // Uniquement les commentaires publiés
router.get(
  "/api/trains/:id/reviews",
  reviewControllers.getAllJoinPublishedByTrainId
); // Uniquement les commentaires d'un train en particulier
router.get(
  "/api/reviews/unpublished",
  reviewControllers.getAllJoinNotPublished
); // Uniquement les commentaires non publiés
router.get("/api/reviews/:id", reviewControllers.getJoinById); // Un commentaire en particulier
router.put("/api/reviews/:id", reviewControllers.putReview); // Éditer un commentaire
router.post("/api/reviews", reviewControllers.add); // Ajouter un commentaire
router.delete("/api/reviews/:id", reviewControllers.destroy); // Supprimer un commentaire

router.get("/api/contacts", contactControllers.getAll); // Tous les messages
router.get("/api/contacts/:id", contactControllers.read); // Un message en particulier
router.put("/api/contacts/:id", contactControllers.edit); // Éditer un message
router.post("/api/contacts", contactControllers.add); // Envoyer un message
router.delete("/api/contacts/:id", contactControllers.destroy); // Supprimer un message

router.get("/api/areas", areaControllers.getAll); // Toutes les régions
router.get("/api/areas/:id", areaControllers.read); // Une région en particulier
router.put("/api/areas/:id", areaControllers.edit); // Modifier une région
router.post("/api/areas", areaControllers.add); // Créer une région
router.delete("/api/areas/:id", areaControllers.destroy); // Supprimer une région

router.get("/api/types", typeControllers.getAll); // Tous les types de trains
router.get("/api/types/:id", typeControllers.read); // Un type de train en particulier
router.put("/api/types/:id", typeControllers.edit); // Modifier un type de train
router.post("/api/types", typeControllers.add); // Créer un type de train
router.delete("/api/types/:id", typeControllers.destroy); // Supprimer un type de train

module.exports = router;
