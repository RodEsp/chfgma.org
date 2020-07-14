import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Switch, withRouter } from 'react-router-dom';

import Header from './components/layout/Header.js'
import Content from './components/layout/Content.js'


import './App.css';

const App = () => {


  return (
    <Router>
      <div className="App">
        {/* <Header /> */}
        <Content />
      </div>
    </Router>
  );
}



export default App;
