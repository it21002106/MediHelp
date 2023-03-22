const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const eventschema = new Schema({

    
    firstname :{

        type : String,
        required : true 
    },

    lastname :{

        type : String,
        required : true 
    },

    email :{

        type : String,
        required : true 
    },

    phonenumber :{

        type : Number,
        required : true 
    },
 
    nic :{

        type : Number,
        required : true
    },

    province : {

        type : String,
        required : true
    }, 

    district : {

        type : String,
        required : true
    },

    city : {

        type : String,
        required : true
    },

    subject : {

        type : String,
        required : true
    },

    message : {

        type : String,
        required : true
    },

})

const Event = mongoose.model("Event",eventschema);

module.exports = Event;