import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Switch, withRouter } from 'react-router-dom';

import About from '../pages/About.js'
import Header from '../layout/Header.js'

function Content({history}) {
    const [colorScheme, setColorScheme] = useState({backgroundColor: "rgb(241, 253, 247)"})

    // Similar to componentDidMount and componentDidUpdate:
    useEffect(() => {
      console.log(history)
      if (history.location === "/about") {
        setColorScheme("rgb(241, 253, 247)")
      }
    })
    return(
        <div className="container" style={{...containerStyle}}>
          <Header style={colorScheme}/>
          <Switch>
            <Route exact path="/" component={About} />
            <Route exact path="/about" component={About}/>
            <Route exact path="/get-help">Get Help Placeholder</Route>
            <Route exact path="/give-help">Give Help Placeholder</Route>
            <Route exact path="/donate">Donate Placeholder</Route>
            <Route component={About}/>
          </Switch>
        </div>
    )
}

const containerStyle = {
    display: "flex",
    flexDirection: "column",
    paddingTop: "80px",
}

export default withRouter(Content);