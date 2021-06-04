const {validationResult} = require('express-validator');
const Certificate = require('../model/certificate');

exports.createCertificate =  (req,res,next) =>{
    const certificate_title = req.body.certificate_title;
    const userId = req.body.userId;
    const userName = req.body.userName;
    const organization_id = "14572153"; //codeforasia company code on linkedin
    const issueYear = req.body.issueYear;
    const issueMonth = req.body.issueMonth;
    const expirationYear = req.body.expirationYear;
    const expirationMonth = req.body.expirationMonth;
    
    //assign data to model
    const mCertificate = new Certificate({
        userId:userId,
        userName:userName,
        certificate_title:certificate_title,
        organization_id:organization_id,
        issueYear:issueYear,
        issueMonth:issueMonth,
        expirationYear:expirationYear,
        expirationMonth:expirationMonth
    });
    mCertificate.save()
    .then(result=>{
        res.status(201).json({
            message:"Certficate Created",
            data:result
        });
    })
    .catch(err =>{
        next(err);
    })
}

exports.getCertificateById = (req,res,next) => {
    const cId = req.params.id;
    Certificate.findById(cId)
    .then(result => {
        res.status(200).json({
            message:"Success get Certificate",
            data:result
        })
    })
    .catch(err => {
        next(err);
    })
}