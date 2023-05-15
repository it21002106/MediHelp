import './App.css';
//import AdminDashbroad from "./Component/AdminDashbroad";
import Allhospital from "./Component/Allhospital";
import EditHospital from "./Component/Edit";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom"
import GenRepo from "./Component/GenHospitalRepo";
import Addhospital from "./Component/Addhospital";

import Login from "./Component/login";
import Signup from "./Component/signUp";

import AllPrescriptions from "./Component/AllPrescriptions";
import AddPrescription from "./Component/AddPrescription";
import EditPrescription from "./Component/EditPrescription";




function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Login/>}/>
                <Route path="/all" element={<Allhospital/>}/>
                <Route path="/Update/:id" element={<EditHospital/>}/>
                <Route path="/SupReport" element={<GenRepo/>}/>
                <Route path="/add" element={<Addhospital/>}/>

                <Route path="/allPrescriptions" element={<AllPrescriptions/>}/>
                <Route path="/addPrescriptions" element={<AddPrescription/>}/>
                <Route path="/UpdatePrescription/:id" element={<EditPrescription/>}/>
               
               
              
                <Route path="/signUp" element={<Signup/>}/>
               
            </Routes>
        </Router>
    );
}

export default App;
