const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Users = new Schema({
    name:{
        type: String,
        require: true,
    },
    email: {
        type: String,
        require: true,
    },
    password :{
        type: String,
        require: true,
    },
    myclass:{
        type:Array,
        require:false

    }
}, {
    timestamps: true
});

module.exports = mongoose.model('Users',Users);