const express = require("express");
const itemController = require("../controllers/itemController");
const authController = require("../controllers/authController");

const router = express.Router();

router
  .route("/")
  .get(itemController.getAllItems)
  .post(
    authController.routeGuard,
    authController.exclusiveAccess("admin"),
    itemController.createItem
  );

// get individual item by text
router.route("/text/:text").get(itemController.getItemByText);

// get individual item by sentence
router.route("/sentence/:text").get(itemController.getItemBySentence);

// topics
router.route("/topics").get(itemController.getAllTopics);

// get next or previous items
router.route("/nextorprevious/:id").get(itemController.getNextOrPreviousItem);

// letters
router.route("/letters").get(itemController.getAllLetters);

module.exports = router;
