const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const hospitalschema = new Schema({

    
    hospitalname :{

        type : String,
        required : true 
    },

    mobilenumber :{

        type : Number,
        required : true 
    },

    email :{

        type : String,
        required : true 
    },

     fax :{

        type : Number,
        required : true 
    },
 
    hospitaltype :{

        type : String,
        required : true
    },

    description : {

        type : String,
        required : true
    }, 

    imageurls : []

})

const Hospital = mongoose.model("Hospital",hospitalschema);

module.exports = Hospital;