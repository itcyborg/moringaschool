var express = require('express');
var router = express.Router();
const controller = require('../controllers/logs')

/**
 * Logs Routes
 */

router.get('/' , controller.list);
router.post('/' , controller.store);
router.get('/:log' , controller.show);
router.put('/:log' , controller.update);
router.patch('/:log' , controller.update);
router.delete('/:log' , controller.delete);


module.exports = router;
