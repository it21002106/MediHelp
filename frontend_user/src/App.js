import './App.css';
import AdminDashbroad from "./Component/AdminDashbroad";
import Allhospital from "./Component/Allhospital";
import EditHospital from "./Component/Edit";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom"
import GenRepo from "./Component/GenHospitalRepo";
import Addhospital from "./Component/Addhospital";
import AllProject from "./Component/allProject";
import AddProject from "./Component/AddProject";
import AllEvents from "./Component/AllEvents";
import AddEvent from "./Component/AddEvent";
import AllPrescriptions from "./Component/AllPrescriptions";
import AddPrescription from "./Component/AddPrescription";
import EditEvent from "./Component/EditEvent";
import EditPrescription from "./Component/EditPrescription";
import EditProject from "./Component/EditProjects";
import Login from "./Component/login";
import Signup from "./Component/signUp";
import AddDoanation from "./Component/AddDonation";
import AllDonations from "./Component/AllDonations";
import Home from "./Component/Home";
import MyPrescriptions from "./Component/MyPrescriptions";



function App() {
    return (
        <Router>
            <Routes>
                
                
                
                
                
                <Route path="/allProjects" element={<AllProject/>}/>
                <Route path="/addProjects" element={<AddProject/>}/>
                
                
                
                
                
                
                <Route path="/UpdateProject/:id" element={<EditProject/>}/>
                
                <Route path="/addDonation/:id" element={<AddDoanation/>}/>
                <Route path="/myDonations" element={<AllDonations/>}/>
                
                
            </Routes>
        </Router>
    );
}

export default App;
