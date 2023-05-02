const express = require("express");

const testController = require("../controllers/testController");
const authController = require("../controllers/authController");

const router = express.Router();

router.route("/").post(authController.routeGuard, testController.createTest);
router.route("/delete").delete(testController.deleteAll);
router.route("/:id").get(testController.getTest).post(testController.gradeTest);

module.exports = router;
