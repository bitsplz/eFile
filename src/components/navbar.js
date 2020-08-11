import React, { useState } from 'react';
import './css/styles.css';
import './css/bootstrap.min.css';
import './css/w3.css';
import { Link } from 'react-router-dom';
import { auth } from '../config/fbconfig';
//import './font-awesome.min.css';

const Navbar = ({ currentUser }) => {

  const [isNavCollapsed, setIsNavCollapsed] = useState(true);
  const handleNavCollapse = () => setIsNavCollapsed(!isNavCollapsed);
  return (
    <nav className="navbar navbar-expand-lg navbar-light">
      <h1>
        <Link id="name" to="/home"><span className="brand-d">e</span>File.pk</Link>
        </h1>
      <button className="navbar-toggler" aria-expanded={!isNavCollapsed ? true : false} onClick={handleNavCollapse} aria-controls="navbarNavDropdown" aria-label="Toggle navigation"
        type="button" data-target="#navbarNavDropdown" data-toggle="collapse">
        <span className="navbar-toggler-icon" />
      </button>
      <div className={`${isNavCollapsed ? 'collapse' : ''} navbar-collapse`} id="navbarNavDropdown">
        <ul className="navbar-nav ml-auto">

          <Link to="/home" className="nav-link scroll">
            <li className="nav-item active">HOME
              {/*<a className="nav-link scroll" href="home.html">HOME <span className="sr-only">(current)</span></a>*/}
            </li>
          </Link>

          <li className="nav-item">
            <a className="nav-link scroll" href="fileonline.html">FILE ONLINE</a>
          </li>

          <Link to="ThirdSection" className="nav-link scroll">
            <li className="nav-item">OUR SERVICES
              {/*<a className="nav-link scroll" href="#services">OUR SERVICES</a>*/}
            </li>
          </Link>

          <Link to="/aboutus" className="nav-link scroll">
            <li className="nav-item">ABOUT US
             {/*<a className="nav-link scroll" href="aboutus.html">ABOUT</a>*/}
            </li>
          </Link>

          <Link to="/contactus" className="nav-link scroll">
            <li className="nav-item">CONTACT US
              {/*<a className="nav-link scroll" href="contactus.html">CONTACT</a>*/}
            </li>
          </Link>

          {
            currentUser ?
              <div className='nav-link scroll w3-white register-button w3-hover-light-green' style={{ borderRadius: '40px' }} onClick={() => auth.signOut()}>
                SIGN OUT
              </div>
              :
              <Link to="/signup" className="nav-link scroll w3-white register-button w3-hover-light-green" style={{ borderRadius: '40px' }}>GET STARTED
              <li >
                </li>
              </Link>
          }
        </ul>
      </div>
    </nav>);
}

export default Navbar;