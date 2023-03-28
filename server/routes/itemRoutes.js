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
router.route("/:text").get(itemController.getItem);

module.exports = router;
