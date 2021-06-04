const { Router } = require('express');
const express = require('express');
const router = express.Router();
const takenClassController = require('../controller/takenclass');

router.post('/create',takenClassController.createTakenClass);
router.get('/getbyid/:id', takenClassController.getTakenClassById);
router.get('/get',takenClassController.getTakenClass);
router.get('/getbyuserid/:userId',takenClassController.getTakenClassByUserId);
router.post('/updateeventstatus', takenClassController.updateEventStatus);
router.post('/updatecertificateid', takenClassController.updateCertificate);

module.exports = router;