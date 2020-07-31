import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import Header from './components/layout/Header.js';
import Content from './components/layout/Content.js'
import Footer from './components/layout/Footer.js';
import './App.css';

const routesMetadata = {
  "/": {
    backgroundColor: "rgb(241, 253, 247)",
  },
  "/about": {
    backgroundColor: "rgb(241, 253, 247)",
  },
  "/get-help": {
    backgroundColor: "rgb(247, 246, 255)",
  },
  "default": {
    backgroundColor: "rgb(256, 256, 256)",
  }
};

const App = ({ history }) => {
  // console.debug("History :::", history)
  const [style, setStyle] = useState(routesMetadata.default)

  // Similar to componentDidMount and componentDidUpdate:
  useEffect(() => {
    // console.debug("EFFECT - History :::", history)
    const currentRouteStyle = routesMetadata[history.location.pathname]
    if (currentRouteStyle) {
      setStyle(currentRouteStyle)
    } else {
      console.error("Error while setting background color: invalid history location")
    }
  })

  return (
    <div id="app-container">
      <Header routesMetadata={routesMetadata} style={style} history={history} />
      <Content />
      <Footer />
    </div>
  );
}

App.propTypes = {
  history: PropTypes.shape({
    location: PropTypes.shape({
      pathname: PropTypes.string.isRequired
    })
  }),
}


export default withRouter(App);
