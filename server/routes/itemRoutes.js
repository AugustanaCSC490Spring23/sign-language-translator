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

// topics
router.route("/topics").get(itemController.getAllTopics);

// letters
router.route("/letters").get(itemController.getAllLetters);

module.exports = router;
