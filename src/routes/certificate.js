const express = require('express');
const {body} = require('express-validator');
const router = express.Router();
const certficateController = require('../controller/certificate');

router.post('/create',certficateController.createCertificate);
router.get('/getById/:id',certficateController.getCertificateById);
module.exports = router;