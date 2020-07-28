import React from 'react';
import { Route, Switch } from 'react-router-dom';

import About from '../pages/About.js'

function Content() {
    return(
      <div className="container">
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

export default Content;