const {validationResult} = require('express-validator');
const Users = require('../model/users');

exports.createUser = (req,res,next) =>{
    const name = req.body.name;
    const email = req.body.email;
    const password = req.body.password;
    const myclass = req.body.myclass;
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        const err = new Error('Invalid value');
        err.errorStatus = 400;
        err.data = errors.array();
        throw err;
    }
    const UsersItem = new Users({
        name:name,
        email:email,
        password:password,
        myclass:myclass
    });
    UsersItem.save()
    .then( result =>{
        res.status(201).json({
            message: "User Created Successfully",
            data: result
        });
    })
    .catch(err=>{
        console.log('err : ',err);
    });
    
    // next();
    
}

exports.getUsers = (req,res,next)=>{
    Users.findOne({email:req.body.email,password:req.body.password})
    .then(result =>{
        res.status(200)
        .json({
            message:'Data get Succesfullu',
            data:result
        })
    })
    .catch(err =>{
        next(err);
    })
    
}

exports.updateUsers = (req,res,next)=>{
    const id = req.body.userId;
    const myClass = req.body.myclass;
    Users.findById(id).find({classId:"145a34242cc"})
    .then(user =>{       
        var uClass = user.myclass;
        uClass.unshift(myClass);
        user.myclass = uClass;
        // user.myclass[0].event.meeting1 = "attend"
         return user.save();
       
    })
    .then(result =>{
        res.status(201).json({message:"Update Succesfully",data:result})
    })
    .catch(err =>{
        next(err)
    })
}