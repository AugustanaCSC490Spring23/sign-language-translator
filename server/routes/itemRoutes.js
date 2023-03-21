const express = require('express');
const itemController = require('../controllers/itemController');

const router = express.Router();

router
  .route("/")
  .get(itemController.getAllItems)
  .post(itemController.createItem);
router.route("/:text").get(itemController.getItem);
//   .patch(tourController.updateTour)
//   .delete(tourController.deleteTour);

module.exports = router;