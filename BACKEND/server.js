 
 
 
 const express = require("express"); 
 const mongoose = require("mongoose");
 const bodyParser = require("body-parser");
 const cors = require("cors");
 const dotenv = require("dotenv");
 const app = express();
 require("dotenv").config();



 const stripe = require('stripe')(process.env.SECRET_KET);

 

 const PORT = process.env.PORT || 8070;

 app.use(cors());
 app.use(bodyParser.json()); 

 app.use(bodyParser.urlencoded({ extended: true})); 

 const URL = process.env.MONGODB_URL;

 mongoose.connect(URL, {

    //useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
    //useFindAndModify: false

 });
     
 const connection = mongoose.connection;
 connection.once("open", () => {
    console.log("Mongodb Conection Success!");
 })

 const HospitalRouter = require("./routes/Hospitals.js");
const { route } = require("./routes/Hospitals.js");
//const userRouter = require("./routes/auth.js");

 app.use("/Hospital",HospitalRouter);
 //app.use("/users",userRouter);

 const donationRouter = require("./routes/donations.js");
 const projectRouter = require("./routes/projects.js");
 
 app.use("/donation",donationRouter);
 app.use("/project",projectRouter);

 const prescriptionRouter = require("./routes/prescription.js");
 app.use("/prescription",prescriptionRouter);
 


 app.listen(PORT, () => {
     console.log(`Server is up and runing on port number : ${PORT}`)
 })


