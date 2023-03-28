const express = require("express");
const userController = require("../controllers/userController");
const authController = require("../controllers/authController");

const router = express.Router();

router.post("/signup", authController.signup);
router.post("/login", authController.login);
router.post("/forgotPassword", authController.forgotPassword);
router.patch("/resetPassword/:token", authController.resetPassword);
router.patch(
  "/updatePassword",
  authController.routeGuard,
  authController.updatePassword
);

router.patch(
  "/updateMe",
  authController.routeGuard,
  userController.updateUserSelf
);

router.patch("/deleteMe", authController.routeGuard, userController.deleteSelf);

router.patch(
  "/updateUserRole/:id",
  authController.routeGuard,
  authController.exclusiveAccess("admin"),
  userController.changeRole
);

router
  .route("/")
  .get(userController.getAllUsers)
  .post(userController.createUser);
router.route("/:id").get(userController.getUser);

module.exports = router;
