import './App.css';

import Allhospital from "./Component/Allhospital";
import EditHospital from "./Component/Edit";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom"
import GenRepo from "./Component/GenHospitalRepo";
import Addhospital from "./Component/Addhospital";
import AllProject from "./Component/allProject";
import AddProject from "./Component/AddProject";


import EditProject from "./Component/EditProjects";

import AllDonations from "./Component/AllDonations";



function App() {
    return (
        <Router>
            <Routes>
                
                <Route path="/all" element={<Allhospital/>}/>
                <Route path="/Update/:id" element={<EditHospital/>}/>
                <Route path="/SupReport" element={<GenRepo/>}/>
                <Route path="/add" element={<Addhospital/>}/>
                <Route path="/allProjects" element={<AllProject/>}/>
                <Route path="/addProjects" element={<AddProject/>}/>
                
                
                
                <Route path="/UpdateProject/:id" element={<EditProject/>}/>
                
                <Route path="/allDonations" element={<AllDonations/>}/>
            </Routes>
        </Router>
    );
}

export default App;
