import React from 'react';
import { Route, Switch } from 'react-router-dom';
import About from '../pages/About.js'
import GetHelp from '../pages/GetHelp.js'
import './Content.css'

function Content() {
    return(
      <div className={`content`}>
        <Switch>
          <Route exact path="/"><About/></Route>
          <Route exact path="/about"><About/></Route>
          <Route exact path="/get-help" component={GetHelp}/>
          <Route exact path="/give-help">Give Help Placeholder</Route>
          <Route exact path="/donate">Donate Placeholder</Route>
          <Route component={About}/>
        </Switch>
      </div>
    )
}

export default Content;