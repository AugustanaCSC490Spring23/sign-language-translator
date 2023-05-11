const express = require("express");
const flashcardsCollectionController = require("../controllers/flashcardCollectionController");
const authController = require("../controllers/authController");

const router = express.Router();

router
  .route("/")
  .post(authController.routeGuard, flashcardsCollectionController.addCollection)
  .get(
    authController.routeGuard,
    flashcardsCollectionController.getAllCollections
  );
router
  .route("/:slug")
  .get(
    authController.routeGuard,
    flashcardsCollectionController.getCollectionBySlug
  )
  .delete(
    authController.routeGuard,
    flashcardsCollectionController.removeCollection
  );
router
  .route("/addFlashcards/:slug")
  .patch(
    authController.routeGuard,
    flashcardsCollectionController.addFlashcards
  );
router
  .route("/removeFlashcards/:slug")
  .patch(
    authController.routeGuard,
    flashcardsCollectionController.removeFlashcards
  );

module.exports = router;
