import React,{useState , useEffect} from "react";
import axios from "axios"; 
import { useNavigate } from "react-router-dom";


export default function Allhospital(){

    const navigate = useNavigate();

const [hospitals,sethospital] = useState([]);

const[value , setValue] = useState('');
const[tableFilter , setTableFilter]= useState([]);



const filterData = (e) =>{
  if(e.target.value != ""){
      setValue(e.target.value);
      const filterTable = hospitals.filter(o=>Object.keys(o).some(k=>
          String(o[k]).toLowerCase().includes(e.target.value.toLowerCase())
          ));
          setTableFilter([...filterTable])
  }else{
      setValue(e.target.value);
      sethospital([...hospitals])
  }
}

useEffect(() => {

  function gethospital()
  {
     

    axios.get("http://localhost:8070/Hospital/").then((res) => {


       sethospital(res.data);

    }).catch((err) => {

       alert(err.message);
    })
  }

  gethospital();
  },[]); 

  function deleteHospital(userId)
  {
    axios.delete(`http://localhost:8070/Hospital/delete/${userId}`).then((res) => {
        
    
    alert("Deleted") 
    navigate("/all");
    
       res.json().then((res) => {
            console.warn(res)
        })
    })
}


    return(

        <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <a className="navbar-brand" href="#" style={{color:"red"}}>MediHelp </a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
     
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="/">Home</a>
            </li>
          
           
          </ul>
        </div>
      
      </div>
    </nav>

      <div className="container"><br/>
      <h2>Hospital Management</h2><br></br>

      <div class="input-group rounded">

            <input type="search" class="form-control rounded" placeholder="Search" aria-label="Search" aria-describedby="search-addon" value={value}
                onChange={filterData}
             />
             
             <span class="input-group-text border-0" id="search-addon">
               <i class="fas fa-search"></i>
             </span>
            </div>

            <br></br>

            <button className="btn btn-success"><a href="/add" style={{textDecoration:'none',color:'white'}}>Add New Hospital</a></button>

            

      <button className="btn btn-success"><a href="/SupReport" style={{textDecoration:'none',color:'white'}}>Genarate Report</a></button> <br></br>

     
      

           <br></br><table className="table table-success table-striped">
              <thead>
                  <tr>
                      <th scope="col">ID</th>
                      <th scope="col">Hospital Name</th>
                      <th scope="col">Mobile Number</th>
                      <th scope="col">Email</th>
                      <th scope="col">Fax</th>
                      <th scope="col">Hospital Type</th>
                      <th scope="col">Description</th>
                      <th scope="col">Action</th>
                  </tr>
              </thead>
              <tbody>
              {value.length > 0 ? tableFilter.map((Hospital,id) => (
                      <tr key={id}>
                          <td>{id}</td>
                          <td>{Hospital.hospitalname}</td>
                          <td>{Hospital.mobilenumber}</td>
                          <td>{Hospital.email}</td>
                          <td>{Hospital.fax}</td>
                          <td>{Hospital.hospitaltype}</td>
                          <td>{Hospital.description}</td>
                      
                          <td>
                              <a className="btn btn-warning" href={'/Update/:id'}>
                                  <i className="fas fa-edit"></i>&nbsp;Edit
                              </a>
                              &nbsp;
                              <button className="btn btn-danger" onClick={()=> deleteHospital(Hospital._id)}>
                              <i className="far fa-trash-alt" ></i>&nbsp;Delete

                          </button>
                          </td>
                      </tr>
                  ))
                :
                hospitals.map((Hospital,id) => (
                  <tr key={id}>
                      <td>{id}</td>
                      <td>{Hospital.hospitalname}</td>
                      <td>{Hospital.mobilenumber}</td>
                      <td>{Hospital.email}</td>
                      <td>{Hospital.fax}</td>
                      <td>{Hospital.hospitaltype}</td>
                      <td>{Hospital.description}</td>

                      <td>
                          <a className="btn btn-warning" href={`/update/${Hospital._id}`}>
                              <i className="fas fa-edit"></i>&nbsp;Edit
                          </a>
                          &nbsp;
                          <button className="btn btn-danger" onClick={()=> deleteHospital(Hospital._id)}>
                          <i className="far fa-trash-alt" ></i>&nbsp;Delete

                      </button>
                      </td>
                  </tr>
              ))
                }
              </tbody>
           </table>
         </div>   
  </div>
      
    )
}