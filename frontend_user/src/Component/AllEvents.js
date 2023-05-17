import React, {useState, useEffect} from "react";
import axios from "axios";
import {useNavigate} from "react-router-dom";
import Swal from "sweetalert2";
import AdminDashbroad from "./AdminDashbroad";
import {deleteEventByID} from "../services/eventService";
import {Grid} from "@mui/material";
import Card from "@mui/material/Card";
import Box from "@mui/material/Box";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import CardActions from "@mui/material/CardActions";
import Button from "@mui/material/Button";
import CardMedia from "@mui/material/CardMedia";
import Navbar from "./NavBar";


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
        }).then((result) => {
            if (result.isConfirmed) {
                deleteEventByID(userId);
                Swal.fire("Deleted!", "Your item has been deleted.", "success");
                getEvents()

            }
        });


        // axios.delete(`http://localhost:8070/Hospital/delete/${userId}`).then((res) => {
        //
        //
        //     alert("Deleted")
        //
        //     res.json().then((res) => {
        //         console.warn(res)
        //     })
        // })
    }


    return (


        <div >

            <Navbar></Navbar>


            <div >
                <div className="container"><br/>
                    <h2>Event List</h2><br></br>

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



                    <br></br>
                    <Grid container spacing={2}>

                        {value.length > 0 ? tableFilter.map((event, id) => (
                                <Grid item xs={12} md={4}>

                                    <Card sx={{ display: 'flex' }}>
                                        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                                            <CardContent sx={{ flex: '1 0 auto' }}>
                                                <Typography component="div" variant="h5">
                                                    {event.subject}
                                                </Typography>
                                                <Typography variant="subtitle1" color="text.secondary" component="div">
                                                    {event.message}
                                                </Typography>
                                            </CardContent>
                                            {/*<CardActions>*/}
                                            {/*    <Button href={`/addDonation/${event._id}`} size="small">Donate</Button>*/}
                                            {/*</CardActions>*/}

                                        </Box>
                                        <CardMedia
                                            component="img"
                                            sx={{ width: 151 }}
                                            image={event.image}
                                            alt="Live from space album cover"
                                        />
                                    </Card>
                                </Grid>

                            ))
                            :
                            events.map((event, id) => (
                                <Grid item xs={12} md={4}>

                                    <Card sx={{ display: 'flex' }}>
                                        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                                            <CardContent sx={{ flex: '1 0 auto' }}>
                                                <Typography component="div" variant="h5">
                                                    {event.subject}
                                                </Typography>
                                                <Typography variant="subtitle1" color="text.secondary" component="div">
                                                    {event.message}
                                                </Typography>
                                            </CardContent>
                                            {/*<CardActions>*/}
                                            {/*    <Button href={`/addDonation/${event._id}`} size="small">Donate</Button>*/}
                                            {/*</CardActions>*/}

                                        </Box>
                                        <CardMedia
                                            component="img"
                                            sx={{ width: 151 }}
                                            image={event.image}
                                            alt="Live from space album cover"
                                        />
                                    </Card>
                                </Grid>

                            ))
                        }
                    </Grid>

                </div>
            </div>


        </div>

    )
}
