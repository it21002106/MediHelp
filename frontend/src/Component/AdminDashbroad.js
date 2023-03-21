import React from 'react';
import './style.css';

function AdminDashbroad() {
  return (
    <div>
      <div className="sidebar">
        <div className="logo-details">
          <div className="logo_name">LifeCare</div>
          <i className='bx bx-menu' id="btn"></i>
        </div>
        <ul className="nav-list">
          <li>
            <a href="#">
              <i className='bx bx-grid-alt'></i>
              <span className="links_name">Request Stationary</span>
            </a>
            <span className="tooltip">Request Stationary</span>
          </li>
          <li>
            <a href="#">
              <i className='bx bx-user'></i>
              <span className="links_name">My Updates</span>
            </a>
            <span className="tooltip">My Updates</span>
          </li>
        </ul>
      </div>
      <section className="home-section">
        <div className="text">
        <img src="./images/lgo.jpg" alt="" width="120" height="100" />
          <center><input type="text" name="search" placeholder="Search.." /></center>
        </div>
        <br /><br /><br /><br /><br /><br />
        <div>
          <center>
            <table>
              <thead>
                <tr>
                  <th>ID</th>
                  <th>NAME</th>
                  <th>STOCK</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1.</td>
                  <td>Machines</td>
                  <td>350</td>
                </tr>
                <tr>
                  <td>2.</td>
                  <td>Poseps</td>
                  <td>500</td>
                </tr>
                <tr>
                  <td>3.</td>
                  <td>Siccor</td>
                  <td>8000</td>
                </tr>
                <tr>
                  <td>4.</td>
                  <td>Cylinder</td>
                  <td>100</td>
                </tr>
                <tr>
                  <td>5.</td>
                  <td>Syringes</td>
                  <td>7000</td>
                </tr>
              </tbody>
            </table>
          </center>
        </div>
      </section>
    </div>
  );
}

export default AdminDashbroad;
