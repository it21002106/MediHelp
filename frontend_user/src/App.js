import './App.css';
import AdminDashbroad from "./Component/AdminDashbroad";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom"
import AllEvents from "./Component/AllEvents";
import AddEvent from "./Component/AddEvent";
import EditEvent from "./Component/EditEvent";



function App() {
    return (
        <Router>
            <Routes>
                <Route path="/allEvents" element={<AllEvents/>}/>
                <Route path="/addEvents" element={<AddEvent/>}/>
                <Route path="/UpdateEvent/:id" element={<EditEvent/>}/>
            </Routes>
        </Router>
    );
}

export default App;
