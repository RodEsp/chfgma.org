import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Content from './components/layout/Content.js'
import './App.css';
import Header from './components/layout/Header.js';

const App = () => {
  return (
    <div id="app-container">
    <Router>
      <Header/>
      <Content/>
    </Router>
    </div>
  );
}



export default App;
