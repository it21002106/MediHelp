import logo from './logo.svg';
import './App.css';
import AdminDashbroad from "./Component/AdminDashbroad";
import {BrowserRouter as Router, Route , Routes} from "react-router-dom"

function App() {
  return (
    <Router>  
         
      <Routes>
      
        <Route path = "/" element = {<AdminDashbroad/>} />
        
        </Routes>     
</Router>
  );
}

export default App;
