const router = require('express').Router();
const controller = require('../controller/userController');

router.post('/', controller.create);

module.exports = router;