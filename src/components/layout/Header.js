import React, { useEffect, useState } from 'react';
import { NavLink, BrowserRouter as Route, Switch, withRouter } from 'react-router-dom';

import "./Header.css"

function Header({style, history}) {
  const [colorScheme, setColorScheme] = useState({backgroundColor: "rgb(241, 253, 247)"})

    // Similar to componentDidMount and componentDidUpdate:
    useEffect(() => {
      console.log(history)
      if (history.location === "/about") {
        debugger
        setColorScheme("rgb(241, 253, 247)")
      }
    })
  return (
    <header className="header" style={colorScheme}>
      <nav className="nav" >
        <ul className="nav-container">
          <li className="home"><NavLink to="/" exact={true}>Clinton Hill Fort Greene Mutual Aid</NavLink></li>
          <li className="link"><NavLink to="/" exact={true} activeClassName='is-active'>About</NavLink></li>
          <li className="link"><NavLink to="/get-help"  activeClassName='is-active'>Get Help</NavLink></li>
          {/* <li className="link"><NavLink to="/give-help"  activeClassName='is-active'>Give Help</NavLink></li> */}
          {/* <li className="link"><NavLink to="/donate"  activeClassName='is-active'>Donate</NavLink></li> */}
          {/* <li className="link"><NavLink to="/" className="link"><MagnifyingGlass style={{margin: "7px 0 0 0"}}/></NavLink></li> */}
        </ul>
      </nav>
    </header>
  )
}

export default withRouter(Header);