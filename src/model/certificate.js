const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Certificate = new Schema({
    userId:{
        type:String,
        require:true
    },
    userName:{
        type:String,
        require:true
    },
    certificate_title:{
        type:String,
        require:true
    },
    organization_id:{
        type:String,
        require:true
    },
    issueYear:{
        type:String,
        require:true
    },
    issueMonth:{
        type:String,
        require:true
    },
    expirationYear:{
        type:String,
        require:true
    },
    expirationMonth:{
        type:String,
        require:true
    }
})

module.exports = mongoose.model('Certificate',Certificate);