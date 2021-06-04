const {validationResult} = require('express-validator');
const Users = require('../model/users');

exports.loginAuth = (req,res,next) =>{
    const email = req.body.email;
    const password = req.body.password;
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        const err = new Error('Invalid value');
        err.errorStatus = 400;
        err.data = errors.array();
        throw err;
    }
    
    Users.findOne({email:email,password:password})
    .then(result=>{
        if(result == null){
            res.status(200)
        .json({
            message:"Login Failed",
            data:result
        })
        }
        res.status(200)
        .json({
            message:"Login Success",
            data:result
        })
    })
    .catch(err=>{
        next(err);
    })
}

exports.regsiterAuth = (req,res,next)=>{
    const name = req.body.name;
    const email = req.body.email;
    const password = req.body.password;
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        const err = new Error('Invalid value');
        err.errorStatus = 400;
        err.data = errors.array();
        throw err;
    }
    Users.findOne({email:email})
    .then(result=>{
        if(result == null){
            const UserItems = new Users({
                name:name,
                email:email,
                password:password,
                myclass:[]
            });
            UserItems.save()
            .then(rest=>{
                res.status(201)
                .json(
                    {
                        message:"User Created Successfully",data:rest
                    });
            })
            .catch(err =>{
                next(err);
            })
        }
        else{
            res.status(200).json({message:"Email has been Used",data:null});
        }
        
    })
    .catch(err =>{
        next(err);
    })
}