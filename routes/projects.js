var express = require('express');
var router = express.Router();

const controller = require('../controllers/project')

/**
 * Project Routes
 */
router.get('/',controller.list);
router.post('/',controller.store);
router.get('/:project',controller.show);
router.put('/:project',controller.update);
router.patch('/:project',controller.update);
router.delete('/:project',controller.delete);


module.exports = router;
