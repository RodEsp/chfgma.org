import React, { useEffect, useState, useRef } from 'react';
import { useLocation } from 'react-router-dom';
// import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import "./Header.css"
// import magnifyingGlassSVG from "../../assets/icons/icon-magnifying-glass.svg"
// import homeIMG from "../../assets/icons/home.png"

// TODO: responsive header for mobile with hamburger




function Header() {
  console.log("Responsive Header", this)

  // Location
  const location = useLocation();
  const [headerClass, setHeaderClass] = useState(getHeaderClass(location.pathname))
  const [prevLocation, setLocation] = useState(location.pathname)
  useEffect(() => {
    setHeaderClass(getHeaderClass(location.pathname))
    if (location !== prevLocation) {
      document.querySelector('body').scrollTo(0, 0)
      setLocation(location)
      setNav(false)
    }
  }, [location, prevLocation, useRef])

  // Nav
  const [navExpanded, setNav] = useState(false)
  const ref = useRef(null)
  // handleOutsideNavEvent(headerRef, () => setNav(false))
  useEffect(() => {
    function handleClickOutside(event) {
      if (ref.current && !ref.current.contains(event.target)) {
        setNav(false)
      }
    }
    
    document.addEventListener("mousedown", handleClickOutside);
    const body = document.querySelector('body');
    body.addEventListener("scroll", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      body.removeEventListener("scroll", handleClickOutside);
    };

  }, [ref]);
  

  return (
    <header className={`responsive-header ${headerClass}`} ref={ref}>
      <h1 className="logo logo-long"><NavLink to="/" exact={true}>Clinton Hill Fort Greene Mutual Aid</NavLink></h1>
      <h1 className="logo logo-short"><NavLink to="/" exact={true}>CHFGMA</NavLink></h1>
      {/* <h1 className="logo logo-short"><NavLink to="/" exact={true}><img src={homeIMG} alt="home icon"/></NavLink></h1> */}

      <input type="checkbox" id="nav-toggle" className="nav-toggle" checked={navExpanded} onClick={() => setNav(!navExpanded)} />
      <nav>
        <ul>
          <li><NavLink to="/" exact={true} className="about-link" activeClassName='is-active'>About</NavLink></li>
          <li><NavLink to="/get-help" className="get-help-link" activeClassName='is-active'>Get Help</NavLink></li>
          <li><NavLink to="/give-help" className="give-help-link" activeClassName='is-active'>Give Help</NavLink></li>
          <li><NavLink to="/donate" className="donate-link" activeClassName='is-active'>Donate</NavLink></li>
          {/* <li><NavLink to="/search" className="search-link"><img src={magnifyingGlassSVG} alt="search icon"/></NavLink></li> */}
        </ul>
      </nav>
      <label htmlFor="nav-toggle" className="nav-toggle-label">
        <span></span>
      </label>
    </header>
  )
}

// function handleOutsideNavEvent(ref, callback) {
  
// }

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
