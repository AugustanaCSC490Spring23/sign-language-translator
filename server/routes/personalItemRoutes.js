const express = require("express");
const personalItemController = require("../controllers/personalItemController");
const authController = require("../controllers/authController");

const router = express.Router();

router
  .route("/")
  .get(authController.routeGuard, personalItemController.getAllPersonalItems);

module.exports = router;
