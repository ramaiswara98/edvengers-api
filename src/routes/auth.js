const express = require('express');
const {body} = require('express-validator');
const router = express.Router();
const authController = require('../controller/auth');

//endpoint login
router.post('/login',
[body('email').isEmail().withMessage("Email must Valid"),
body('password').isLength({min:6}).withMessage("Password must have minimal 6 character")
],
authController.loginAuth);

//endpoint register
router.post('/register',
[
    body('email').isEmail().withMessage("This must valid email"),
    body('password').isLength({min:6}).withMessage("Password must 6 cvharacter or more")
],
authController.regsiterAuth);
module.exports = router;