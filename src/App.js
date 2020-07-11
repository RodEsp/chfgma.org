import React from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';

import Header from './components/layout/Header.js'
import Home from './components/pages/Home.js'

// import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <Router>
    <div className="App">
      <div className="container">
        <Header/>
        {/* TODO: path should be "/" || "home" */}
        <Route exact path="/" component={Home}/>
        {/* <Route exact path="/about" component={About}/> */}
        {/* <Route exact path="/get-help" component={GetHelp}/> */}
        {/* <Route exact path="/give-help" component={GiveHelp}/> */}
        {/* <Route exact path="/donate" component={Donate}/> */}
      </div>
    </div>
    </Router>
  );
}

export default App;
