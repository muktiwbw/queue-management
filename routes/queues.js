var express = require('express');
var router = express.Router();
const queueController = require('./../controllers/queueController');

//* List all queues
router.get('/', queueController.all);

//* Post queue
router.post('/', queueController.store)

//* Get queue
router.get('/:queueID', queueController.get)

module.exports = router;
