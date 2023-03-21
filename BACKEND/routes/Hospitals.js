const router = require("express").Router();
const { response } = require("express");
let Hospital = require("../models/Hospital");

http://Localhost:8070/Hospital/add

router.route("/add").post((req,res)=>{


    const hospitalname = req.body.hospitalname;
    const mobilenumber = Number(req.body.mobilenumber);
    const email = req.body.email;
    const fax = Number(req.body.fax);
    const hospitaltype = req.body.hospitaltyp;
    const description = req.body.description;

    const newHospital = new Hospital({

        hospitalname,
        mobilenumber,
        email,
        fax,
        hospitaltype,
        description,

       

    })

    newHospital.save().then(()=>{

        res.json("Hospital Success Addes")
    }).catch((err)=>{

        console.log(err);
    })
})    


http://localhost:8070/Hospital

router.route("/").get((req,res)=>{

    Hospital.find().then((Hospital)=>{
        res.json(Hospital)

    }).catch((err)=>{

        console.log(err);
    })

})




http://localhost:8070/Hospital/update/5ffffffhf

router.route("/update/:id").put(async (req,res) => {

    let userId = req.params.id;
    const {hospitalname, mobilenumber,email, fax, hospitaltype, description} = req.body;

    const upadatepdetails = {

        hospitalname,
        mobilenumber,
        email,
        fax,
        hospitaltype,
        description,
    }

    const update = await Hospital.findByIdAndUpdate(userId, upadatepdetails).then(() =>{

        res.status(200).send({status: "user updated"})

    }).catch((err)=>{

        console.log(err);
        res.status(500).send({status: "Error with updating date", error:err.message})
    })


   })


   http://localhost:8070/delete/5ffffffhf

   router.route("/delete/:id").delete(async (req,res) => {

    let userId = req.params.id;

    await Hospital.findByIdAndDelete(userId).then(() => {

        res.status(200).send({status: "user deleted"});

    }).catch((err)=>{

        console.log(err.message);
        res.status(500).send({status: "Error with Delete user", error:err.message})
    })

   })


   router.route("/get/:id").get(async (req,res) => {

    let userId = req.params.id;
    const user = await Hospital.findById(userId).then( (Hospital) =>{

        res.status(200).send({status: "user fetched", user : Hospital})

    }).catch((err)=>{
 
        console.log(err.message);
        res.status(500).send({status: "Erroe with get user", error:err.message})
    })

})


router.route("/get/:id").get(async(req,res)=>{
    let userId = req.params.id;

    const user = await Hospital.findById(userId).then(()=>{
        res.status(200).send({status:"User fetched", user:user});
    }).catch((err)=>{
        console.log(err.message);
        res.status(500).send({status:"Error with delete user", error:err.message});
  })
})



module.exports = router;