import React, {useState} from "react";
import axios from "axios";
import {useNavigate, useParams} from "react-router-dom";
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
import {Card, Container, Row, Col} from "react-bootstrap";
import {addHospital} from "../services/hospitalService";
import AdminDashbroad from "./AdminDashbroad";
import {addevent} from "../services/eventService";
import Swal from "sweetalert2";
import Navbar from "./NavBar";



export default function AddEvent() {

    const [eventUserName, setEventUserName] = useState("");
    const [mobileNumber, setMobileNumber] = useState("");
    const [email, setEmail] = useState("");
    const [province, setProvince] = useState("");
    const [district, setDistrict] = useState("");
    const [nic, setNic] = useState("");
    const [city, setCity] = useState("");
    const [typeOfRequest, setTypeOfRequest] = useState("");
    const [subject, setSubject] = useState("");
    const [message, setMessage] = useState("");
    const [image, setImage] = useState("");



    const navigate = useNavigate();

    function onChangeImage(e)  {
        if (e.target.type === "file") {
            const scope = this;
            let reader = new FileReader();
            reader.readAsDataURL(e.target.files[0]);
            reader.onload = function () {
                setImage(reader.result)
            };
        } else {
            setImage(e.target.value)

        }
    };

    function  senddata(e) {
        e.preventDefault();
        const event = {
            eventUserName,
            mobileNumber,
            email,
            province,
            district,
            nic,
            city,
            typeOfRequest,
            subject,
            message,
            image

        }

        const eve =  addevent(event);

            Swal.fire({
                title: 'Sucess!',
                text: ' successfull',
                icon: 'success',
                showConfirmButton: false,
                timer: 1500
            })

            navigate("/allEvents");

    }


    return (

        <div >

            <Navbar></Navbar>


            <div >
                <div className="maincontainer">


                    <div className="container"><br></br>
                        <h2>Add Event Details</h2>

                        <form className="row g-2" onSubmit={senddata}>


                            <MDBContainer fluid>
                                <MDBRow className='justify-content-center align-items-center m-5'>
                                    <MDBCard>


                                        <div className="col-auto">

                                            <MDBCol md='6'>
                                                <label>User Name</label>
                                                <input type="text" className="form-control" id="userName"
                                                       placeholder="Enter user name"

                                                       onChange={(e) => {

                                                           setEventUserName(e.target.value);

                                                       }} required/>
                                                <br></br>
                                            </MDBCol>
                                        </div>

                                        <div className="form-group">
                                            <MDBCol md='6'>
                                                <label htmlFor="modelNumber">Mobile Number</label>
                                                <input type="text" className="form-control" id="modelNumber"
                                                       placeholder="Enter Model Number"

                                                       onChange={(e) => {

                                                           setMobileNumber(e.target.value);

                                                       }} required/>
                                                <br></br>
                                            </MDBCol>
                                        </div>

                                        <div className="form-group">
                                            <MDBCol md='6'>
                                                <label htmlFor="email">Email</label>
                                                <input type="email" className="form-control" id="email"
                                                       aria-describedby="emailHelp" placeholder="Enter Email"

                                                       onChange={(e) => {

                                                           setEmail(e.target.value);

                                                       }} required/>
                                                <br></br>
                                            </MDBCol>
                                        </div>

                                        <div className="form-group">
                                            <MDBCol md='6'>
                                                <label htmlFor="province">Province</label>
                                                <input type="text" className="form-control" id="province"
                                                       aria-describedby="emailHelp" placeholder="Enter province"

                                                       onChange={(e) => {

                                                           setProvince(e.target.value);

                                                       }} required/>
                                                <br></br>
                                            </MDBCol>
                                        </div>

                                        <div className="form-group">
                                            <MDBCol md='6'>
                                                <label htmlFor="district">District</label>
                                                <input type="text" className="form-control" id="district"
                                                       aria-describedby="emailHelp" placeholder="Enter district"

                                                       onChange={(e) => {

                                                           setDistrict(e.target.value);

                                                       }} required/>
                                                <br></br>
                                            </MDBCol>
                                        </div>

                                        <div className="form-group">
                                            <MDBCol md='6'>
                                                <label htmlFor="city">City</label>
                                                <input type="text" className="form-control" id="city"
                                                       aria-describedby="emailHelp" placeholder="Enter city"

                                                       onChange={(e) => {

                                                           setCity(e.target.value);

                                                       }} required/>
                                                <br></br>
                                            </MDBCol>
                                        </div>

                                        <div className="form-group">
                                            <MDBCol md='6'>
                                                <label htmlFor="nic">NIC</label>
                                                <input type="text" className="form-control" id="nic"
                                                       aria-describedby="emailHelp" placeholder="Enter nic"

                                                       onChange={(e) => {

                                                           setNic(e.target.value);

                                                       }} required/>
                                                <br></br>
                                            </MDBCol>
                                        </div>

                                        <div className="form-group">
                                            <MDBCol md='6'>
                                                <label htmlFor="nationality">Type of Request</label>
                                                <select className="form-control"
                                                        onChange={(e) => {

                                                            setTypeOfRequest(e.target.value);

                                                        }}>
                                                    <option value='Need Spectacles'>
                                                        Need Spectacles
                                                    </option>
                                                    <option value='Need Blood'>
                                                        Need Blood
                                                    </option>
                                                </select>
                                                <br/>
                                            </MDBCol>
                                        </div>

                                        <div className="form-group">
                                            <MDBCol md='6'>
                                                <label htmlFor="subject">Subject</label>
                                                <input type="text" className="form-control" id="subject"
                                                       aria-describedby="emailHelp" placeholder="Enter subject"

                                                       onChange={(e) => {

                                                           setSubject(e.target.value);

                                                       }} required/>
                                                <br></br>
                                            </MDBCol>
                                        </div>


                                        <div className="form-group">
                                            <MDBRow>
                                                <Col md='6'>
                                                    <label htmlFor="description">Message</label>
                                                    <textarea type="text" className="form-control" id="description"
                                                              max="100"
                                                              required

                                                              onChange={(e) => {

                                                                  setMessage(e.target.value);

                                                              }}/>
                                                    <br></br>
                                                </Col>
                                            </MDBRow>

                                        </div>

                                        <div className="form-group">
                                            <MDBRow>
                                                <Col md='6'>
                                                    <label htmlFor="description">Attachment</label>
                                                    <input type="file" className="form-control" id="fax"
                                                           aria-describedby="emailHelp" placeholder="Enter fax"
                                                           onChange={onChangeImage}
                                                           required/>
                                                    <br></br>
                                                </Col>
                                            </MDBRow>

                                        </div>

                                        <button type="submit" className="btn btn-success">Submit</button>

                                    </MDBCard>
                                </MDBRow>
                            </MDBContainer>


                        </form>
                    </div>


                </div>

            </div>


        </div>


    )

}
