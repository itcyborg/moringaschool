var express = require('express');
var router = express.Router();
const controller = require('../controllers/issues')

/**
 * Issue management Routes
 */
router.get('/' , controller.list);
router.post('/' , controller.store);
router.get('/:issue' , controller.show);
router.put('/:issue' , controller.update);
router.patch('/:issue' , controller.update);
router.delete('/:issue' , controller.delete);


module.exports = router;
