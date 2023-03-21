const router = require("express").Router();
let Project = require("../models/Project");

router.route("/add").post((req, res)=>{
    const pName = req.body.pName;
    const pDescription = req.body.pDescription;
    const pOrganisation = req.body.pOrganisation;
    const pStartDate = req.body.pStartDate;
    const pEndDate = req.body.pEndDate;
    const pLocation = req.body.pLocation;

    const newProject = new Project({
        pName,
        pDescription,
        pOrganisation,
        pStartDate,
        pEndDate,
        pLocation
    });

    newProject.save().then(()=>{
        res.json("Project saved")
    }).catch((err)=>{
        console.log(err);
    })
})

router.route("/").get((req,res)=>{
    Project.find().then((projects)=>{
        res.json(projects)
    }).catch((err)=>{
        console.log(err)
    })
})

router.route("/update/:id").put(async(req, res) => {
    let userID = req.params.id;
    const { pName, pDescription, pOrganisation, pStartDate, pEndDate, pLocation } = req.body;
    
    const updateProject = {
        pName,
        pDescription,
        pOrganisation,
        pStartDate,
        pEndDate,
        pLocation
    }

    const update = await Project.findByIdAndUpdate(userID, updateProject)
    .then(()=>{
        res.status(200).send({status:"Details Updated"});
        }).catch((err)=>{
            console.log(err.message);
            res.status(500).send({status:"Error with updating details", error: err.message});
        })
})

router.route("/delete/:id").delete(async(req, res) => {
    let userID = req.params.id;
    
    await Project.findByIdAndDelete(userID)
    .then(()=>{
        res.status(200).send({status:"Details Deleted"}); 
    }).catch((err)=>{
        console.log(err.message);
        res.status(500).send({status:"Error with deleting details", error: err.message});
    })
})

router.route("/get/:id").get(async(req, res)=>{
    let userID = req.params.id;
    const user = await Project.findById(userID).then(()=>{
        res.status(200).send({status:"Details fetched", user:user})
    }).catch((err)=>{
        console.log(err);
        res.status(500).send({status:"Error with fetching details", error: err.message});
    })
})

module.exports = router;