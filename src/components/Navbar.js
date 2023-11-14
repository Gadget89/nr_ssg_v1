import React, { useState } from "react";
import { Link} from "gatsby";
import { useLocation } from '@reach/router';
import logo from "../img/brand_assets/pictoral_mark_main_black.svg";

const Navbar = () => {
  const [isActive, setIsActive] = useState(false);
  const location = useLocation();

  return (
    <nav
      className="navbar is-fixed-top"
      role="navigation"
      aria-label="main-navigation"
    >
      <div className="container">
        <div className="navbar-brand">
          <Link to="/" className="navbar-item" title="Return Home">
            <img src={logo} alt="Nic Roybal logo" />
          </Link>
          {/* Hamburger menu */}
          <button
            className={`navbar-burger burger ${isActive && "is-active"}`}
            aria-expanded={isActive}
            onClick={() => setIsActive(!isActive)}
          >
            <span aria-hidden="true" />
            <span aria-hidden="true" style={{height: "3px", width: "8px", left: "50%"}} />
            <span aria-hidden="true" />
          </button>
        </div>
        <ul id="navMenu" className={` navbar-end has-text-right navbar-menu ${isActive && "is-active"}`}>
            <li className="navbar-item">
              <Link className={location.pathname === '/about' ? 'isCurrentPage' : 'navbar-item'} to="/about">
                About
              </Link>
            </li>
            <li className="navbar-item">
            <Link className={location.pathname === '/portfolio' ? 'isCurrentPage' : 'navbar-item'} to="/portfolio">
              Portfolio
            </Link>
            </li>
            {/* <li className="navbar-item">
            <Link className={location.pathname === '/blog' ? 'isCurrentPage' : 'navbar-item'} to="/blog">
              Blog
            </Link>
            </li> */}
            <li className="navbar-item">
            <Link className={location.pathname === '/connect' ? 'isCurrentPage' : 'navbar-item'} to="/connect">
              Connect
            </Link>
            </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
