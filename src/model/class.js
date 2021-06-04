const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Class = new Schema({
    name:{
            type:String,
            require:true
    },
    event:{
        type:Array,
        require:true
    }
});
module.exports = mongoose.model('Class',Class);