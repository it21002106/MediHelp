import React, { useRef } from 'react';
import { useEffect,useState } from 'react';
import { useReactToPrint } from 'react-to-print';
import axios from "axios"; 


export default function Hospitalreport({search,setSearch}){

    const [events,setevent] = useState([]);


     const[value , setValue] = useState('');
     const[tableFilter , setTableFilter]= useState([]);
    
    
  
  const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });


/*  const [hospital, setstaffde] = useState([
    {
        fristname:"",
        lastname:"",
        email:"",
        nationality:"",
        phone:"",
        tnds:""
    },
  ]);
*/
  useEffect(() => {

    function getevent()
    {
       
  
      axios.get("http://localhost:8070/event/").then((res) => {
  
  
      setevent(res.data);
  
      }).catch((err) => {
  
         alert(err.message);
      })
    }
  
    getevent();
    },[]); 

 /* const renderClass = (Hospital, id) => {
    return (
      <tr key={id}>
       
        <td>{Hospital.fristname}</td>
        <td>{Hospital.lastname}</td>
        <td>{Hospital.email}</td> 
        <td>{Hospital.nationality}</td>
        <td>{Hospital.phone}</td>
        <td>{Hospital.tnds}</td>
      </tr>
    );
  };*/

  return (
    <div className="newstaff">
    <div className="marginaling">
    <button onClick={handlePrint}>Download PDF</button>
    </div>
    <div className="scroll-bgn"/>
   <div className="scroll-divn"/>
   <div className="scroll-objectn"/>
   <div className="wrapper-flex "/>
   
  <div ref={componentRef}>
        <h2 className="aling topic-report">Annual Report</h2>

        <table className="table table-success table-striped">
              <thead>
                  <tr>
                  <th scope="col">ID</th>
                  <th scope="col">Requested By</th>
                 <th scope="col">Subject</th>
                 <th scope="col">Type of Request</th>
                 <th scope="col">Phone Number</th>
                 <th scope="col">Message</th>
                      
                      
                  </tr>
              </thead>
              <tbody>
              {value.length > 0 ? tableFilter.map((event,id) => (
                      <tr key={id}>
                          <td>{id}</td>
                          
                                    <td>{event.eventUserName}</td>
                                    <td>{event.subject}</td>
                                    <td>{event.typeOfRequest}</td>
                                    <td>{event.mobileNumber}</td>
                                    <td>{event.message}</td>
                          
                          
                      </tr>
                  ))
                :
                events.map((event,id) => (
                  <tr key={id}>
                    <td>{id}</td>
                    <td>{event.eventUserName}</td>
                    <td>{event.subject}</td>
                    <td>{event.typeOfRequest}</td>
                    <td>{event.mobileNumber}</td>
                    <td>{event.message}</td>
                      
                     
                  </tr>
              ))
                }
              </tbody>
           </table>
  </div>


  </div>

 )
};