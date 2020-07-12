import React from 'react';
import { NavLink } from 'react-router-dom'

import "./Header.css"
import { ReactComponent as MagnifyingGlass } from "../../assets/magnifying-glass.svg"

function Header() {
  return (
    <header className="header">
      <nav className="nav">
        <ul className="nav-container">
          <li className="home"><NavLink to="/" exact={true}>Clinton Hill Fort Greene Mutual Aid</NavLink></li>
          <li className="link"><NavLink to="/" exact={true} activeClassName='is-active'>About</NavLink></li>
          <li className="link"><NavLink to="/get-help"  activeClassName='is-active'>Get Help</NavLink></li>
          <li className="link"><NavLink to="/give-help"  activeClassName='is-active'>Give Help</NavLink></li>
          <li className="link"><NavLink to="/donate"  activeClassName='is-active'>Donate</NavLink></li>
          <li className="link"><NavLink to="/search" className="link"><MagnifyingGlass style={{margin: "7px 0 0 0"}}/></NavLink></li>
        </ul>
      </nav>
    </header>
  )
}

export default Header;