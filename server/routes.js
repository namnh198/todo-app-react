const router = require('express').Router();
const controller = require('./controller');

router.post('/create', controller.create);
router.get('/', controller.getAll);
router.post('/delete/:todoId', controller.delete);
router.post('/complete/:todoId', controller.complete);

module.exports = router;