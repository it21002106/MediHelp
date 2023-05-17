import React, {useEffect, useState} from 'react'
import axios from 'axios';
import {Card, Container, Row, Col} from "react-bootstrap";
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
import {get} from 'lodash';
import {useNavigate, useParams} from 'react-router-dom';
import AdminDashbroad from "./AdminDashbroad";
import {updateHospital} from "../services/hospitalService";
import Swal from "sweetalert2";
import Navbar from "./NavBar";

function EditEvent(userId) {

    const [Event, setEvent] = useState([]);
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


    const params = useParams();
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

    useEffect(() => {
        getEventDetails();
    }, [])

    const getEventDetails = async () => {
        let result = await fetch(`http://localhost:8070/event/get/${params.id}`);
        const {user} = await result.json();
        setEventUserName(user.eventUserName)
        setMobileNumber(user.mobileNumber)
        setEmail(user.email)
        setProvince(user.province)
        setDistrict(user.district)
        setCity(user.city)
        setNic(user.nic)
        setTypeOfRequest(user.typeOfRequest)
        setSubject(user.subject)
        setMessage(user.message)

    }

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

    function updateEvent(e) {
        e.preventDefault();


        const updateEvent = {
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

        axios.put(`http://localhost:8070/event/update/${params.id}`, updateEvent).then((res) => {
            setEvent(res.data);
            Swal.fire({
                title: 'Sucess!',
                text: ' successfull',
                icon: 'success',
                showConfirmButton: false,
                timer: 1500
            })
            navigate('/allEvents')

        }).catch((err) => {
            alert(err.message);
        })
    }


    return (


        <div >

            <Navbar></Navbar>


            <div >
                <div className="maincontainer">


                    <div className="container">
                        <h2>Update Event Details</h2>

                        <form onSubmit={updateEvent}>

                            <MDBContainer fluid>
                                <MDBRow className='justify-content-center align-items-center m-5'>


                                    <MDBCard>


                                        <div className="col-auto">

                                            <MDBCol md='6'>
                                                <label>User Name</label>
                                                <input type="text" className="form-control" id="userName"
                                                       placeholder="Enter user name"

                                                       value={eventUserName}
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
                                                       value={mobileNumber}

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
                                                       value={email}

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
                                                       value={province}

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
                                                       value={district}

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
                                                       value={city}

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
                                                       value={nic}

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
                                                        value={typeOfRequest}

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
                                                       value={subject}

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
                                                              value={message}

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

export default EditEvent;
