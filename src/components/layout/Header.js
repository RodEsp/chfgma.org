import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import "./Header.css"
import magnifyingGlassSVG from "../../assets/icons/icon-magnifying-glass.svg"

// TODO: responsive header for mobile with hamburger

function Header() {
  console.log("Responsive Header")
  
  const location = useLocation();
  const [headerClass, setHeaderClass] = useState(getHeaderClass(location.pathname))

  useEffect(() => {
    setHeaderClass(getHeaderClass(location.pathname))
  }, [location])

  return (
    <header className={`responsive-header ${headerClass}`}>
      <h1 className="logo logo-long"><NavLink to="/" exact={true}>Clinton Hill Fort Greene Mutual Aid</NavLink></h1>
      <h1 className="logo logo-short"><NavLink to="/" exact={true}>Mutual Aid</NavLink></h1>
      <input type="checkbox" id="nav-toggle" className="nav-toggle"/>
      <nav>
        <ul>
          <li><NavLink to="/" exact={true} className="about-link" activeClassName='is-active'>About</NavLink></li>
          <li><NavLink to="/get-help" className="get-help-link" activeClassName='is-active'>Get Help</NavLink></li>
          <li><NavLink to="/give-help" className="give-help-link" activeClassName='is-active'>Give Help</NavLink></li>
          <li><NavLink to="/donate" className="donate-link" activeClassName='is-active'>Donate</NavLink></li>
          {/* <li><NavLink to="/search" className="search-link"><img src={magnifyingGlassSVG} alt="search icon"/></NavLink></li> */}
        </ul>
      </nav>
      <label for="nav-toggle" className="nav-toggle-label">
        <span></span>
      </label>
    </header>
  )
}

function getHeaderClass(pathname) {
  console.log("getPageClass :::", pathname)
  switch (pathname) {
    case "/": 
      return "about";
    case "/about":
      return "about";
    case "/get-help":
      return "get-help";
    case "/give-help":
      return "give-help"
    case "/donate": 
      return "donate"
    default:
      break;
  }
}

export default Header;
