import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Card, Container, Row, Col} from "react-bootstrap";
import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBInput,
  MDBSelect,
  MDBRadio
}
from 'mdb-react-ui-kit';
import { get } from 'lodash';
import {useParams} from 'react-router-dom';

function EditHospital(userId) {

    const [Hospital, setHospital] = useState([]);
  const[hospitalname , sethospitalname] = useState("");
   const[mobilenumber , setmobilenumber] = useState("");
   const[email, setemail] = useState("");
   const[fax, setfax] = useState("");
   const[hospitaltype, sethospitaltype] = useState("");
   const [description, setdescription] = useState("");

   const params = useParams();


  useEffect(()=>{
    getHospitalDetails();
  },[])

  const getHospitalDetails = async()=>{
    // console.warn(params)
    let result = await fetch(`http://localhost:8070/Hospital/get/${params.id}`);
    // setHospital(user.)
    const {user} = await result.json();
    console.log(user)
    // setHospital(user.data);
    sethospitalname(user.hospitalname)
    setmobilenumber(user.mobilenumber)
    setemail(user.email)
    setfax(user.fax)
    sethospitaltype(user.hospitaltype)
    setdescription(user.description)
   
   /* setName(result.name);
    setPassport(result.passport);
    setAge(result.age);
    setGender(result.gender);
    setMobile(result.mobile);
    setEmail(result.email); */
  }

  function updateHospital (e) {
    e.preventDefault();

    // console.log(params.id);

    const updateHospital = {
      hospitalname,
      mobilenumber,
      email,
      fax,
      hospitaltype,
      description,
    }
        axios.put(`http://localhost:8070/Hospital/update/${params.id}`,updateHospital).then((res) => {
            alert("Customer Details Updated");
            setHospital(res.data);
            // setmobilenumber(res.mobilenumber)
            // setemail(res.email)
            // setfax(fax)
            // sethospitaltype(hospitaltype)
            // setdescription(description)
            
        }).catch((err) => {
            alert(err.message);
        })
}

      
    return(

        <div className="container">
        <br></br>
        <br></br>
        <br></br>

  
  <form onSubmit={updateHospital} >
    <div class="mb-3">
  
      <label for="name" class="form-label" >Hospital Name</label>
      <input type="text" class="form-control" id="name" placeholder="Enter Your hospitalname" value={hospitalname}
      onChange={(e) =>{
  
  
       sethospitalname(e.target.value);
  
      }}/>
  
    </div>
  
    <div className="mb-3"> 

  
      <label for="name" class="form-label">Mobile Number</label>
      <input type="text" class="form-control" id="name" placeholder="Enter Your mobilenumber" value={mobilenumber}
      onChange={(e) =>{
  
  
        setmobilenumber(e.target.value);
   
       }}/>
  
    </div>
  
  <div className="mb-3">
  
      <label for="exampleInputEmail1" class="form-label">Email</label>
      <input type="email" class="form-control" id="email" placeholder="Enter Email" value={email}
      onChange={(e) =>{
  
  
        setemail(e.target.value);
   
       }}/>
    </div>
  
    <div className="mb-3">
  
      <label for="name" class="form-label">fax</label>
      <input type="text" class="form-control" id="fax" placeholder="Enter Your fax" value={fax}
      onChange={(e) =>{
  
  
        setfax(e.target.value);
   
       }}/>
  
    </div>
  
    <div className="mb-3">
  
      <label for="name" class="form-label">hospitaltype</label>
      <input type="text" class="form-control" id="hospitaltype" placeholder="Enter hospitaltype Number" value={hospitaltype}
      onChange={(e) =>{
  
  
        sethospitaltype(e.target.value);
   
       }}/>
  
    </div>
  
    <div className="mb-3">
  
      <label for="name" class="form-label">Description</label>
      <input type="text" class="form-control" id="description" placeholder="Enter Total No Of Days in Sri Lanka" value={description}
      onChange={(e) =>{
  
  
        setdescription(e.target.value);
   
       }} />
  
    </div>
    
  
   
    <button type="submit" class="btn btn-primary">Upadte</button>
  </form>
  
  
  
  
          </div>
  
        
      )
     
       
}

export default EditHospital;