import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from './components/layout/Header.js';
import Content from './components/layout/Content.js'
import Footer from './components/layout/Footer.js';
import './App.css';


const App = () => {
  // console.debug("App")
  return (
    <div id="app-container">
      <Router>
        <Header />
        <Content />
      </Router>
      <Footer />
    </div>
  );
}

// App.propTypes = {}


export default App;
