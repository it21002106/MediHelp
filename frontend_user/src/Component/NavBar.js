import React, { useEffect, useState } from "react";
import { BiMenuAltRight } from "react-icons/bi";
import { AiOutlineClose } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";
import './navbar.scss';


function Navbar() {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);
  const [size, setSize] = useState({
    width: 0,
    height: 0,
  });
  useEffect(() => {
    const handleResize = () => {
      setSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (size.width > 768 && menuOpen) {
      setMenuOpen(false);
    }
  }, [size.width, menuOpen]);

  const menuToggleHandler = () => {
    setMenuOpen((p) => !p);
  };

  return (
      <header className="header">
        <div className="header__content">
          <Link to="/home" className="header__content__logo">
            MediCare
          </Link>
          <nav
              className={`${"header__content__nav"} 
          ${menuOpen && size.width < 768 ? `${"isMenu"}` : ""} 
          }`}
          >
            <ul>
              <li>
                <Link to="/home">Home</Link>
              </li>
              <li>
                <Link to="/allPrescriptions">Prescription</Link>
              </li>
              <li>
                <Link to="/all">Hospitals</Link>
              </li>
              <li>
                <Link to="/allProjects">Health Project</Link>
              </li>
              <li>
                <Link to="/allEvents">Events</Link>
              </li>
              <li>
                <Link to="/myDonations">My Donations</Link>
              </li>
              <li>
                <Link to="/myPrescriptions">My Prescriptions</Link>
              </li>
              <li>
                <Link to="/">Logout</Link>
              </li>

            </ul>
          </nav>
          <div className="header__content__toggle">
            {!menuOpen ? (
                <BiMenuAltRight onClick={menuToggleHandler} />
            ) : (
                <AiOutlineClose onClick={menuToggleHandler} />
            )}
          </div>
        </div>
      </header>
  );
}

export default Navbar;
