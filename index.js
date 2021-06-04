const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const app = express();
const userRoutes = require('./src/routes/users');
const authRoutes = require('./src/routes/auth');
const classRoute = require('./src/routes/class');
const takenclassRoute = require('./src/routes/takenclass');
const certificateRoute = require('./src/routes/certificate');
app.use(bodyParser.json());

//to avid cross origin
app.use((req,res,next)=>{
    res.setHeader('Access-Control-Allow-Origin','*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, PATCH, DELETE, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers','Content-Type, Authorization');
    next();
});
app.use('/v1/users', userRoutes);
app.use('/v1/auth', authRoutes);
app.use('/v1/class', classRoute);
app.use('/v1/takenclass', takenclassRoute);
app.use('/v1/certificate', certificateRoute);

//to handle error 
app.use((error,re,res,next)=>{
    const status = error.errorStatus || 500;
    const message = error.message;
    const data = error.data;
    res.status(status).json({message:message, data:data});
});

//connect to mongodb atlas
mongoose.connect("mongodb://24c562CB:24c562CB@cluster0-shard-00-00.ngfov.mongodb.net:27017,cluster0-shard-00-01.ngfov.mongodb.net:27017,cluster0-shard-00-02.ngfov.mongodb.net:27017/myFirstDatabase?ssl=true&replicaSet=atlas-6ymdkw-shard-0&authSource=admin&retryWrites=true&w=majority")
.then(()=>{
    app.listen(4000, () =>{
        console.log("connection Succes");
    });
})
.catch(err => console.log(console.error()));
