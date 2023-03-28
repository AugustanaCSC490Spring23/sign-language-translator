const express = require("express");
const itemController = require("../controllers/itemController");

const router = express.Router();

router
  .route("/")
  .get(itemController.getAllItems)
  .post(itemController.createItem);
router.route("/:text").get(itemController.getItem);

module.exports = router;
