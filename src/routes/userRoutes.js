const router = require('express').Router();
const controller = require('../controller/userController');

router.post('/create', controller.create);
router.get('/search_key', controller.getKey);
// router.get('/search_attribute', controller.)

module.exports = router;