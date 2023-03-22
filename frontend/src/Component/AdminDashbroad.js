import React from 'react';
import './style.css';

function AdminDashbroad() {
  return (
    <div>
      <div className="sidebar">
        <div className="logo-details">
          <div className="logo_name">MediHelp</div>
          <i className='bx bx-menu' id="btn"></i>
        </div>
        <ul className="nav-list">
          <li>
            <a href="#">
              <i className='bx bx-grid-alt'></i>
              <span className="links_name">Dashboard</span>
            </a>
            <span className="tooltip">Dashboard</span>
          </li>
          <li>
            <a href="#">
              <i className='bx bx-user'></i>
              <span className="links_name">Prescription</span>
            </a>
            <span className="tooltip">Prescription</span>
          </li>
          <li>
            <a href="#">
              <i className='bx bx-grid-alt'></i>
              <span className="links_name">Health Project</span>
            </a>
            <span className="tooltip">Health Project</span>
          </li>
          <li>
            <a href="/all">
              <i className='bx bx-grid-alt'></i>
              <span className="links_name">Hospitals</span>
            </a>
            <span className="tooltip">Hospitals</span>
          </li>
          <li>
            <a href="#">
              <i className='bx bx-grid-alt'></i>
              <span className="links_name">Events</span>
            </a>
            <span className="tooltip">Events</span>
          </li>
        </ul>
      </div>
      <section className="home-section">
        <div className="text">
        <img src="./images/lgo.jpg" alt="" width="120" height="100" />
          <center><input type="text" name="search" placeholder="Search.." /></center>
        </div>
        <br /><br /><br /><br /><br /><br />
       
        
      </section>
    </div>
  );
}

export default AdminDashbroad;
