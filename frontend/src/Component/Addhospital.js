import React,{useState} from "react";
import axios from "axios"; 
import { useNavigate,useParams } from "react-router-dom";
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
import { Card, Container, Row, Col} from "react-bootstrap";
import Swal from "sweetalert2";






export default function Addhospital(){

    const [fristname, setfristname] = useState("");
    const [lastname, setlastname] = useState("");
    const [email, setemail] = useState("");
    const [nationality, setnationality] = useState("");
    const [phone, setphone] = useState("");
    const [tnds, settnds] = useState("");
    


   const navigate = useNavigate(); 

   const params = useParams();

   let price 

   switch (params.pacname) {
    case "Family Tour":
    price = 569.00
      break;

      case "4 Days Essence Of Sri Lanka":
    price = 539.00
      break;

      case "Sri Lankan South Beach Tour Package":
    price = 396.00
      break;

      case "7 Days Sri Lanka Nature Private Tour":
    price = 1100.00
      break;

      case "Adventure Tours in Sri lanka":
    price = 650.00
      break;

    default:
      break;
   }



    

    function senddata(e)
    {
        
     
     
      e.preventDefault();
      
      const newcustomerinfo ={
        
          fristname,
          lastname,
          email,
          nationality,
          phone,
          tnds,
          "price":price * tnds, 
          "pname":params.pacname

      }

      
       axios.post("http://localhost:8070/Payment/add",newcustomerinfo).then(()=>{

        Swal.fire({
          title: 'Sucess!',
          text: ' successfull', 
          icon: 'success', 
          showConfirmButton: false, 
          timer: 1500})
        
        navigate("#");

       })


    }


    return (

      <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <a className="navbar-brand" href="#" style={{color:"red"}}>LSR </a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="/">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/add">Customer Info</a>
            </li>
           
          </ul>
        </div>
      </div>
    </nav>

   
    <div className="maincontainer">

      
      <div className="container"><br></br>
      <h2>Add Customer Details</h2>

      <form class="row g-2" onSubmit={senddata}>

      
      <MDBContainer fluid>
        <MDBRow className='justify-content-center align-items-center m-5'>
        <MDBCard>
        
          
            <div className= "col-auto" >

          <MDBCol md='6'>
           <label for="name">Frist Name</label>
           <input type="text" className="form-control" id="fristname" aria-describedby="emailHelp" placeholder="Enter frist name" 
           
           onChange={(e)=>{

               setfristname(e.target.value);

           }} required />
           <br></br>
           </MDBCol>
        </div>
        
        <div className="form-group">
        <MDBCol md='6'>
           <label for="name">Last Name</label>
           <input type="text" className="form-control" id="lastname" aria-describedby="emailHelp" placeholder="Enter last name"
           
           onChange={(e)=>{

               setlastname(e.target.value);

           }}required />
           <br></br>
           </MDBCol>
        </div>
        
        <div className="form-group">
        <MDBCol md='6'>
             <label for="email">Email</label>
             <input type="email" className="form-control" id="email" aria-describedby="emailHelp" placeholder="Enter Email"
             
             onChange={(e)=>{

                 setemail(e.target.value);

             }}required/>
             <br></br>
             </MDBCol> 
             </div>

              <div className="form-group">
        <MDBCol md='6'>
             <label for="nationality">Nationality</label>
             <input type="text" className="form-control" id="nationality" aria-describedby="emailHelp" placeholder="Enter nationality"
             
             onChange={(e)=>{

                 setnationality(e.target.value);

             }}required/>
             <br></br>
             </MDBCol>   
             </div>
    

        <div className="form-group">
        <MDBRow>
        <Col md='6'>
           <label for="mobile">phone</label>
           <input type="tel" className="form-control" id="mobile" aria-describedby="emailHelp"  max="100" placeholder="Enter Your Telephone Number" pattern="[0-9]{10}" required
          
           onChange={(e)=>{

               setphone(e.target.value);

           }} />
           <br></br>
           </Col>
           </MDBRow>
        
        <Col md='6'>
           <label for="tnds">Number of Days In Sri Lanka</label>
           <input type="number" className="form-control" id="tnds" aria-describedby="emailHelp" min="1" max="100" placeholder="Number of Days In Sri Lanka"
           
           onChange={(e)=>{

               settnds(e.target.value);

           }} required/>
           <br></br>
           </Col>
           
           
        </div>
        
      

        
      <div class="row" >
            <div class="col-md-4 order-md-2 mb-4">
              <h4 class="d-flex justify-content-between align-items-center mb-3">
                <span class="text-muted">Your cart</span>
                <span class="badge badge-secondary badge-pill">3</span>
              </h4>
              <ul class="list-group mb-3">
                <li class="list-group-item d-flex justify-content-between lh-condensed">
                  <div>
                    <h6 class="my-0">Product name</h6>
                    <small class="text-muted">Brief description</small>
                  </div>
                  <span class="text-muted">{params.pacname}</span>
                </li>
                <li class="list-group-item d-flex justify-content-between lh-condensed">
                  <div>
                    <h6 class="my-0">Price</h6>
                    <small class="text-muted">Brief description</small>
                  </div>
                  <span class="text-muted">${price}</span>
                </li>
                <li class="list-group-item d-flex justify-content-between lh-condensed">
                  <div>
                    <h6 class="my-0">Third item</h6>
                    <small class="text-muted">Brief description</small>
                  </div>
                  <span class="text-muted">$5</span>
                </li>
                <li class="list-group-item d-flex justify-content-between bg-light">
                  <div class="text-success">
                    <h6 class="my-0">Promo code</h6>
                    <small>EXAMPLECODE</small>
                  </div>
                  <span class="text-success">-$5</span>
                </li>
                <li class="list-group-item d-flex justify-content-between">
                  <span>Total (USD)</span>
                  <strong>${price * tnds }</strong>
                </li>
              </ul>
         </div>
         </div>
        
         <button type="submit" className="btn btn-success">Submit</button>

      </MDBCard>
      </MDBRow>
      </MDBContainer>


      </form>
      </div>
      
      

</div>
</div>



      
  )

 }