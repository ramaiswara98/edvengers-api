const {validationResult} = require('express-validator');
const Classes = require('../model/class');

exports.createClass = (req,res,next) =>{
    const name=req.body.name;
    const event = req.body.event;

    const Myclass = new Classes({
        name:name,
        event:event
    });
    Myclass.save().then(result =>{
        res.status(201).json({message:"Class created Succesfully",data:result});
    })
    .catch(err =>{
        next(err);
    })
}
exports.getClass = (req,res,next) =>{
    Classes.find()
    .then(result =>{
        res.status(200).json({message:"Success get All Class Data",data:result})
    })
    .catch(err =>{
        next(err);
    })
}