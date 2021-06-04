const express = require('express');
const router = express.Router();
const classController = require('../controller/class');

router.post('/create',classController.createClass);
router.get('/get',classController.getClass);
module.exports = router;