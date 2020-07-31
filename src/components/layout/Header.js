import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import "./Header.css"

function Header({ style }) {
  // console.debug("Header Props :::", { style })
  return (
    <header className="header" style={style}>
      <nav className="nav" >
        <ul className="nav-container">
          <li className="home"><NavLink to="/" exact={true}>Clinton Hill Fort Greene Mutual Aid</NavLink></li>
          <li className="link"><NavLink to="/" exact={true} activeClassName='is-active'>About</NavLink></li>
          <li className="link"><NavLink to="/get-help" activeClassName='is-active'>Get Help</NavLink></li>
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