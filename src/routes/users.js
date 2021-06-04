const express = require('express');
const {body} = require('express-validator');
const router = express.Router();

const userController = require('../controller/users');

//Create -> Post Methode
router.post('/create',[
    body('name').isLength({min:5}).withMessage("Name must more than 5 character"),
    body('email').isEmail().withMessage("This must be an valid email")], 
    userController.createUser);
router.get('/get', userController.getUsers);
router.put('/user',userController.updateUsers);
module.exports = router;