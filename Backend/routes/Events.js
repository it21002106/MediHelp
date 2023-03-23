const router = require("express").Router();
const { response } = require("express");
let Event = require("../models/Event");

http://Localhost:8070/Event/add

router.route("/add").post((req,res)=>{


    const firstname = req.body.firstname;
    const lastname = req.body.lastname;
    const email = req.body.email;
    const phonenumber = Number(req.body.phonenumber);
    const nic = Number(req.body.nic);
    const province = req.body.province;
    const district = req.body.district;
    const city = req.body.city;
    const subject = req.body.subject;
    const message = req.body.message;

    const newEvent = new Event({

        firstname,
        lastname,
        email,
        phonenumber,
        nic,
        province,
        district,
        city,
        subject,
        message


        
    })

    newEvent.save().then(()=>{

        res.json("Event Details Added Successful")
    }).catch((err)=>{

        console.log(err);
    })
})    


http://localhost:8070/Event

router.route("/").get((req,res)=>{

    Event.find().then((Event)=>{
        res.json(Event)

    }).catch((err)=>{

        console.log(err);
    })

})




http://localhost:8070/Event/update/5ffffffhf

//Update
router.route("/update/:id").put(async (req,res) => {

    let userId = req.params.id;
    const {firstname, lastname,email, phonenumber, nic, province,district,city,subject,message} = req.body;

    const upadatepdetails = {

        firstname,
        lastname,
        email,
        phonenumber,
        nic,
        province,
        district,
        city,
        subject,
        message
    }

    const update = await Event.findByIdAndUpdate(userId, upadatepdetails).then(() =>{

        res.status(200).send({status: "Event Details Updated Successful"})

    }).catch((err)=>{

        console.log(err);
        res.status(500).send({status: "Error with updating date", error:err.message})
    })


   })


   http://localhost:8070/Event/delete/5ffffffhf

   //Delete
   router.route("/delete/:id").delete(async (req,res) => {

    let userId = req.params.id;

    await Event.findByIdAndDelete(userId).then(() => {

        res.status(200).send({status: "Event Details Deleted Successful"});

    }).catch((err)=>{

        console.log(err.message);
        res.status(500).send({status: "Error with Delete user", error:err.message})
    })

   })


   router.route("/get/:id").get(async (req,res) => {

    let userId = req.params.id;
    const user = await Event.findById(userId).then( (Event) =>{

        res.status(200).send({status: "user fetched", user : Event})

    }).catch((err)=>{
 
        console.log(err.message);
        res.status(500).send({status: "Erroe with get user", error:err.message})
    })

})


router.route("/get/:id").get(async(req,res)=>{
    let userId = req.params.id;

    const user = await Event.findById(userId).then(()=>{
        res.status(200).send({status:"User fetched", user:user});
    }).catch((err)=>{
        console.log(err.message);
        res.status(500).send({status:"Error with delete user", error:err.message});
  })
})



module.exports = router;