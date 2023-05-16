import React from 'react';
import './style.css';
import HomeButton from './Home';
import './Homebtn.css';

function AdminDashbroad() {
  return (
    <>

<div className="sidebar">
        <div className="logo-details">
          <span>
            <div className="homeBtn"> <HomeButton/> </div>
          <div className="logo_name">
            MediHelp
          </div>
          </span>
          
          <i className='bx bx-menu' id="btn"></i>
        </div>
        
        <ul className="nav-list">
          {/*<li>*/}
          {/*  <a href="#">*/}
          {/*    <i className='bx bx-grid-alt'></i>*/}
          {/*    <span className="links_name">Dashboard</span>*/}
          {/*  </a>*/}

          {/*</li>*/}
          <li>
            <a href="/allPrescriptions">
              <i className='bx bx-user'></i>
              <span className="links_name">Prescription</span>
            </a>

          </li>
          <li>
            <a href="/allProjects">
              <i className='bx bx-grid-alt'></i>
              <span className="links_name">Health Project</span>
            </a>

          </li>
          <li>
            <a href="/all">
              <i className='bx bx-grid-alt'></i>
              <span className="links_name">Hospitals</span>
            </a>

          </li>
          <li>
            <a href="/allEvents">
              <i className='bx bx-grid-alt'></i>
              <span className="links_name">Events</span>
            </a>

          </li>
          <li>
            <a href="/allDonations">
              <i className='bx bx-grid-alt'></i>
              <span className="links_name">Donations</span>
            </a>

          </li>
        </ul>
      </div>


    </>
  );
}

export default AdminDashbroad;
