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
  .route("/:id")
  .get(
    authController.routeGuard,
    flashcardsCollectionController.getCollectionById
  )
  .patch(
    authController.routeGuard,
    flashcardsCollectionController.addFlashcards
  )
  .patch(
    authController.routeGuard,
    flashcardsCollectionController.removeFlashcards
  )
  .delete(
    authController.routeGuard,
    flashcardsCollectionController.removeCollection
  );

module.exports = router;
