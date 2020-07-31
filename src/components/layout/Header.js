import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import "./Header.css"

function Header() {
  console.debug("Header")
  const location = useLocation();
  const [styles, setStyles] = useState(getColorScheme(location.pathname))
  
  // Similar to componentDidMount and componentDidUpdate:
  useEffect(() => {
    console.log("EFFECT - location", location)
    setStyles(getColorScheme(location.pathname))
  }, [location])
  
  return (
    <header className={`header`} style={{
      backgroundColor: styles.primary
    }}>
      <nav className="nav" >
        <ul className="nav-container">
          <li className="home"><NavLink to="/" exact={true}>Clinton Hill Fort Greene Mutual Aid</NavLink></li>
          <li className="link"><NavLink to="/" exact={true} className="about-link" activeClassName='is-active'>About</NavLink></li>
          <li className="link"><NavLink to="/get-help" className="get-help-link" activeClassName='is-active'>Get Help</NavLink></li>
          {/* <li className="link"><NavLink to="/give-help"  activeClassName='is-active'>Give Help</NavLink></li> */}
          {/* <li className="link"><NavLink to="/donate"  activeClassName='is-active'>Donate</NavLink></li> */}
          {/* <li className="link"><NavLink to="/" className="link"><MagnifyingGlassSVG style={{margin: "7px 0 0 0"}}/></NavLink></li> */}
        </ul>
      </nav>
    </header>
  )
}

Header.propTypes = {
  style: PropTypes.shape({
    backgroundColor: PropTypes.string.isRequired,
  }),
}

export default  Header;

function getColorScheme(pathname) {
  console.log("getColorScheme :::", pathname)
  const defaultColorScheme = {
    primary: "rgb(241, 253, 247)",
    secondary: "#009E78"
  }
  if (pathname === "/about" || pathname === "/") {
    return defaultColorScheme
  } else if (pathname === "/get-help") {
    return {
      primary: "rgb(247, 246, 255)",
      secondary: "#432BFA",
    }
  } else {
    console.error("Error while setting background color: invalid history location")
    return defaultColorScheme
  }
}

