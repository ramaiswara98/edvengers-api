const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TakenClass = new Schema({
    classId: {
        type:String,
        require:true
    },
    className:{
        type:String,
        require:true
    },
    userId:{
        type:String,
        require:true
    },
    event:{
        type:Array,
        require:false
    },
    status:{
        type:String,
        require:true
    },
    certificateId:{
        type:String,
        require:false
    }
})

module.exports = mongoose.model('TakenClass',TakenClass);