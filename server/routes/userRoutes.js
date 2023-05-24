const express = require('express');
const userController = require('../controllers/userController');
const authController = require('../controllers/authController');

const router = express.Router();

// AUTHORIZATION
router.post('/signup', authController.signup);
router.post('/login', authController.login);
router.post('/forgotPassword', authController.forgotPassword);
router.patch('/resetPassword/:token', authController.resetPassword);
router.patch(
  '/updatePassword',
  authController.routeGuard,
  authController.updatePassword
);

// SELF SERVICE FOR USER
router.patch(
  '/updateMe',
  authController.routeGuard,
  userController.updateUserSelf
);

router.patch('/deleteMe', authController.routeGuard, userController.deleteSelf);

// ADMIN SERVICE
router.patch(
  '/updateUserRole/:id',
  authController.routeGuard,
  authController.exclusiveAccess('admin'),
  userController.changeRole
);

router
  .route('/')
  .get(
    authController.routeGuard,
    authController.exclusiveAccess('admin'),
    userController.getAllUsers
  )
  .post(
    authController.routeGuard,
    authController.exclusiveAccess('admin'),
    userController.createUser
  );
router.route('/:id').get(userController.getUser);

module.exports = router;
