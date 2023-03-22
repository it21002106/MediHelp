import './App.css';
import AdminDashbroad from "./Component/AdminDashbroad";
import Allhospital from "./Component/Allhospital";
import EditHospital from "./Component/Edit";
import {BrowserRouter as Router, Route , Routes} from "react-router-dom"
import GenRepo from "./Component/GenHospitalRepo";

function App() {
  return (
    <Router>  
         
      <Routes>
      
        <Route path = "/" element = {<AdminDashbroad/>} />
        <Route path = "/all" element = {<Allhospital/>} />
        <Route path = "/Update/:id" element = {<EditHospital/>} />
        <Route path = "/SupReport" element ={<GenRepo/>} />
        
        </Routes>     
</Router>
  );
}

export default App;
