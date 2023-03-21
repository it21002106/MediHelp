const routes = require("express").Router();
let prescription = require("../models/prescription");

Router.route("/add").post((req,res)=>{
    const clientName = req.body.clientName;
    const province = req.body.province;
    const district = req.body.district;
    const email = req.body.email;
    const mobile = Number(req.body.mobile); 
    const image = req.body.image;

    const newprescription = new prescription({
        clientName,
        province,
        district,
        email,
        mobile,
        image
    })
    newprescription.save().then(()=>{
        res.json("Prescription Added")
    }).catch((err)=>{
        console.log(err);
    })


})