const express = require('express');
const itemController = require('../controllers/itemController');
const authController = require('../controllers/authController');

const router = express.Router();

router
  .route('/')
  .get(itemController.getAllItems)
  .post(
    authController.routeGuard,
    authController.exclusiveAccess('admin'),
    itemController.createItem
  );

// get individual item by text
router.route('/text/:text').get(itemController.getItemByText);

// get individual item by sentence
router.route('/sentence').post(itemController.getItemBySentence);

// topics
router.route('/topics').get(itemController.getAllTopics);

// get next or previous items by topics
router.route('/nextorprevious/:id').get(itemController.getNextOrPreviousItem);

//get next or previous items in dictionary
router
  .route('/dictionary/nextorprevious/:id')
  .get(itemController.getNextOrPreviousItemByLetter);

// letters
router.route('/letters').get(itemController.getAllLetters);

module.exports = router;
