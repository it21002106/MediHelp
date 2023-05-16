import React, {useState, useEffect} from "react";
import AdminDashbroad from "./AdminDashbroad";

export default function AdminHome () {

    const [donations, setDonations] = useState([]);

    const [value, setValue] = useState('');
    const [tableFilter, setTableFilter] = useState([]);

    const filterData = (e) => {
        if (e.target.value != "") {
            setValue(e.target.value);
            const filterTable = donations.filter(o => Object.keys(o).some(k =>
                String(o[k]).toLowerCase().includes(e.target.value.toLowerCase())
            ));
            setTableFilter([...filterTable])
        } else {
            setValue(e.target.value);
            setDonations([...donations])
        }
    }

    return(
        <>
        <div className="row">
            <div className="col-md-3">
                <AdminDashbroad/>
            </div>
            <div className="col-md-9" >
            <div className="container"><br/>
                    <h2>MediHelp Home</h2><br></br>

                    <div className="input-group rounded">

                        <input type="search" className="form-control rounded" placeholder="Search" aria-label="Search"
                               aria-describedby="search-addon" value={value}
                               onChange={filterData}
                        />

                        <span className="input-group-text border-0" id="search-addon">
               <i className="fas fa-search"></i>
             </span>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
};