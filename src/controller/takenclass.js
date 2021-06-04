const {validationResult} = require('express-validator');
const { find } = require('../model/takenclass');
const TakenClass = require('../model/takenclass');

exports.createTakenClass = (req,res,next) =>{
    const classId = req.body.classId;
    const event = req.body.event;
    const userId = req.body.userId;
    const className = req.body.className;

    const takenClass = new TakenClass({
        classId:classId,
        userId:userId,
        event:event,
        status:'ungraduate',
        certificateId:'',
        className:className
    });
    takenClass.save()
    .then(result => {
        res.status(201).json({
            message:"Class Taken Successfully",
            data:result
        })
    })
    .catch(err =>{
        next(err);
    })
}

exports.getTakenClass = (req,res,next) =>{
    TakenClass.find()
    .then(result =>{
        res.status(200).json({
            message:"Get Taken Class Succesfuully",
            data:result
        });
    })
    .catch(err =>{
        next(err);
    })
}

exports.getTakenClassByUserId = (req,res,next) => {
    const userId = req.params.userId;
    console.log(userId);
    TakenClass.find({userId:userId})
    .then(result =>{
        res.status(200).json({
            message:"Taken Class Get Successfully",
            data:result
        })
    })
    .catch(err => {
        next(err);
    })
}

exports.getTakenClassById = (req,res,next) => {
    const ids = req.params.id;
    TakenClass.findById(ids)
    .then(result => {
        res.status(200).json({
            message:"Get Taken Class By Id Successfully",
            data:result
        })
    })
    .catch(err => {
        next(err)
    })
}

exports.updateEventStatus = (req,res,next) => {
    const id = req.body.id;
    const event = req.body.event;
    TakenClass.findById(id)
    .then(result => {
        var events = result.event;
        var newEvent = events.map(obj => event.find(o => o.id === obj.id)|| obj);
        result.event=newEvent;
        return result.save()
    })
    .then(rest => {
        res.status(201).json({
            message:"Update Status Event Succesfully",
            data:rest
        })
    })
    .catch(err => {
        next(err);
    });
}

exports.updateCertificate = (req,res,next)=>{
    const id = req.body.id;
    const certificateId = req.body.certificateId;
    TakenClass.findById(id)
    .then(result => {
        result.certificateId=certificateId;
        result.status="graduated"
        return result.save()
    })
    .then(rest => {
        res.status(201).json({
            message:"Update CertificateId Succesfully",
            data:rest
        })
    })
    .catch(err => {
        next(err);
    });
}