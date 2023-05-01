const express = require("express");

const testController = require("../controllers/testController");
const authController = require("../controllers/authController");

const router = express.Router();

router.route("/").post(testController.createQuiz);
router.route("/:id").get(testController.getQuiz);

module.exports = router;
