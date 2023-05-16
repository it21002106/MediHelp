import './App.css';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom"
import AdminDashbroad from "./Component/AdminDashbroad";
import Login from "./Component/login";
import Signup from "./Component/signUp";

import Allhospital from "./Component/Allhospital";
import EditHospital from "./Component/Edit";
import GenRepo from "./Component/GenHospitalRepo";
import Addhospital from "./Component/Addhospital";




function App() {
    return (
        <Router>
            <Routes>
          
                <Route path="/" element={<Login/>}/>
                <Route path="/signUp" element={<Signup/>}/>

                <Route path="/all" element={<Allhospital/>}/>
                <Route path="/Update/:id" element={<EditHospital/>}/>
                <Route path="/SupReport" element={<GenRepo/>}/>
                <Route path="/add" element={<Addhospital/>}/>

              
               
            </Routes>
        </Router>
    );
}

export default App;
