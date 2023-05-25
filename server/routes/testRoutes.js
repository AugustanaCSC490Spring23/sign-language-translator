const express = require("express");

const testController = require("../controllers/testController");
const authController = require("../controllers/authController");

const router = express.Router();

router.route("/").post(authController.routeGuard, testController.createTest);
router
  .route("/delete")
  .delete(authController.exclusiveAccess("admin"), testController.deleteAll);
router
  .route("/testReview/:id")
  .get(authController.routeGuard, testController.getTest)
  .post(testController.gradeTest);
router
  .route("/testDisplay/:id")
  .get(authController.routeGuard, testController.getTestWithoutAnswers);

module.exports = router;
