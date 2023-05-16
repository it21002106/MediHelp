import React, {useState, useEffect} from "react";
import axios from "axios";
import {useNavigate} from "react-router-dom";
import Swal from "sweetalert2";
import AdminDashbroad from "./AdminDashbroad";
import {deleteEventByID} from "../services/eventService";


export default function AllEvents() {

    const navigate = useNavigate();

    const [events, setEvents] = useState([]);

    const [value, setValue] = useState('');
    const [tableFilter, setTableFilter] = useState([]);


    const filterData = (e) => {
        if (e.target.value != "") {
            setValue(e.target.value);
            const filterTable = events.filter(o => Object.keys(o).some(k =>
                String(o[k]).toLowerCase().includes(e.target.value.toLowerCase())
            ));
            setTableFilter([...filterTable])
        } else {
            setValue(e.target.value);
            setEvents([...events])
        }
    }

    useEffect(() => {


        getEvents();
    }, []);

    function getEvents() {


        axios.get("http://localhost:8070/event/").then((res) => {

            setEvents(res.data);

        }).catch((err) => {

            alert(err.message);
        })
    }

    function deleteEvent(userId) {


        Swal.fire({
            title: "Are you sure?",
            text: "You will not be able to recover this item!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonText: "Yes, delete it!",
            cancelButtonText: "Cancel",
        }).then(async (result) => {
            if (result.isConfirmed) {
                await deleteEventByID(userId);
                Swal.fire("Deleted!", "Your item has been deleted.", "success");
                getEvents()

            }
        });

    }


    return (


        <div className="row">

            <div className="col-md-3" >

                <AdminDashbroad></AdminDashbroad>
            </div>



            <div className="col-md-9" >
                <div className="container"><br/>
                    <h2>Event Management</h2><br></br>

                    <div className="input-group rounded">

                        <input type="search" className="form-control rounded" placeholder="Search" aria-label="Search"
                               aria-describedby="search-addon" value={value}
                               onChange={filterData}
                        />

                        <span className="input-group-text border-0" id="search-addon">
               <i className="fas fa-search"></i>
             </span>
                    </div>

                    <br></br>

                    <button className="btn btn-success mr-1"><a href="/addEvents"
                                                                style={{textDecoration: 'none', color: 'white'}}>Add New
                        Event</a></button>


                    {/*<button className="btn btn-success"><a href="/SupReport"*/}
                    {/*                                       style={{textDecoration: 'none', color: 'white'}}>Genarate*/}
                    {/*    Report</a></button>*/}
                    <br></br>


                    <br></br>
                    <table className="table table-success table-striped">
                        <thead>
                        <tr>
                            {/*<th scope="col">ID</th>*/}
                            <th scope="col">Requested By</th>
                            <th scope="col">Subject</th>
                            <th scope="col">Type of Request</th>
                            <th scope="col">Phone Number</th>
                            <th scope="col">Message</th>
                            <th scope="col">Action</th>
                        </tr>
                        </thead>
                        <tbody>
                        {value.length > 0 ? tableFilter.map((event, id) => (
                                <tr key={id}>
                                    {/*<td>{id}</td>*/}
                                    <td>{event.eventUserName}</td>
                                    <td>{event.subject}</td>
                                    <td>{event.typeOfRequest}</td>
                                    <td>{event.mobileNumber}</td>
                                    <td>{event.message}</td>

                                    <td>
                                        <a className="btn btn-warning" href={'/UpdateEvent/:id'}>
                                            <i className="fas fa-edit"></i>&nbsp;Edit
                                        </a>
                                        &nbsp;
                                        <button className="btn btn-danger" onClick={() => deleteEvent(event._id)}>
                                            <i className="far fa-trash-alt"></i>&nbsp;Delete

                                        </button>
                                    </td>
                                </tr>
                            ))
                            :
                            events.map((event, id) => (
                                <tr key={id}>
                                    {/*<td>{id}</td>*/}
                                    <td>{event.eventUserName}</td>
                                    <td>{event.subject}</td>
                                    <td>{event.typeOfRequest}</td>
                                    <td>{event.mobileNumber}</td>
                                    <td>{event.message}</td>

                                    <td>
                                        <a className="btn btn-warning" href={`/UpdateEvent/${event._id}`}>
                                            <i className="fas fa-edit"></i>&nbsp;Edit
                                        </a>
                                        &nbsp;
                                        <button className="btn btn-danger" onClick={() => deleteEvent(event._id)}>
                                            <i className="far fa-trash-alt"></i>&nbsp;Delete

                                        </button>
                                    </td>
                                </tr>
                            ))
                        }
                        </tbody>
                    </table>
                </div>
            </div>


        </div>

    )
}
