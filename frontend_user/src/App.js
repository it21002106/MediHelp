import './App.css';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom"

import Login from "./Component/login";
import Signup from "./Component/signUp";



function App() {
    return (
        <Router>
            <Routes>
          
                <Route path="/" element={<Login/>}/>
                <Route path="/signUp" element={<Signup/>}/>
               
            </Routes>
        </Router>
    );
}

export default App;
