const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const ProjectSchema = new Schema({
    pName : {
        type : String,
        require : true
    },
    pDescription : {
        type : String,
        require : true
    },
    pOrganisation : {
        type: String,
        require : true
    },
    pStartDate : {
        type: String,
        require : true
    },
    pEndDate : {
        type : String,
        require : true
    },
    pLocation : {
        type : String,
        require : true
    }
})

const Project = mongoose.model("Project Details",ProjectSchema);

module.exports = Project;