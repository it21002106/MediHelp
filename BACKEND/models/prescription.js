const mongoose = require ('mongoose');

const Schema = mongoose.Schema;
const ImageSchema = mongoose.Schema;

const prescriptionSchema = new Schema({
    clientName:{
        type: String,
        required: true
    },

    province:{
        type: String,
        required: true
    },

    district:{
        type: String,
        required: true
    },

    email:{
        type: String,
        required: true
    },

    mobile:{
        type: Number,
        required: true
    },

    prescriptionImage:{
        data: Buffer,
        contentType: String
    },

    aboutPrescription:{
        type: String,
        required: true
    },

})
module.exports = ImageModel = mongoose.model('imageModel', ImageSchema)