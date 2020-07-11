import React from 'react';
import { Link } from 'react-router-dom'

function Header() {
  return (
    <header>
      <nav>
          <Link to="/">Clinton Hill Fort Greene Mutual Aid</Link>
          {/* <Link to="/about">About</Link> */}
          {/* <Link to="/get-help">Get Help</Link> */}
          {/* <Link to="/give-help">Give Help</Link> */}
          {/* <Link to="/donate">Donate</Link> */}
          {/* <Link to="/search">Donate</Link> */}
      </nav>
    </header>
  )
}

export default Header;