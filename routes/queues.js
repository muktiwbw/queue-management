var express = require('express');
var router = express.Router();

/* List all queues */
router.get('/', function(req, res, next) {
  return res
        .status(200)
        .json({
          status: 'ok',
          data: {
            message: "List all queues"
          }
        });
});

/** Post queue */

/** Get queue */

module.exports = router;
