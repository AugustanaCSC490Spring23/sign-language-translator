const express = require("express");

const testController = require("../controllers/testController");

const router = express.Router();

router.route("/").post(testController.createQuiz);
router.route("/:id").get(testController.getQuiz).post(testController.gradeQuiz);

module.exports = router;
