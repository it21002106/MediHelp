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
import AllDonations from "./Component/AllDonations";
import Genevent from "./Component/GeneventRepo";



function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Login/>}/>
                <Route path="/all" element={<Allhospital/>}/>
                <Route path="/Update/:id" element={<EditHospital/>}/>
                <Route path="/SupReport" element={<GenRepo/>}/>
                <Route path="/add" element={<Addhospital/>}/>
                <Route path="/allProjects" element={<AllProject/>}/>
                <Route path="/addProjects" element={<AddProject/>}/>
                <Route path="/allEvents" element={<AllEvents/>}/>
                <Route path="/addEvents" element={<AddEvent/>}/>
                <Route path="/allPrescriptions" element={<AllPrescriptions/>}/>
                <Route path="/addPrescriptions" element={<AddPrescription/>}/>
                <Route path="/UpdateEvent/:id" element={<EditEvent/>}/>
                <Route path="/UpdatePrescription/:id" element={<EditPrescription/>}/>
                <Route path="/UpdateProject/:id" element={<EditProject/>}/>
                <Route path="/signUp" element={<Signup/>}/>
                <Route path="/allDonations" element={<AllDonations/>}/>
                <Route path="/eventRport" element={<Genevent/>}/>
            </Routes>
        </Router>
    );
}

export default App;