import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom'
import Home from './views/home'
import './App.css';
class App extends Component {
  render() {
    return (
      <div className="App">
      <Router>
               <Home />
            </Router>
      </div>
    );
  }
}
export default App;
