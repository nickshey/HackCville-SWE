import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Blog from './components/Blog.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <Blog/>
        <div>
        </div>
      </div>
    );
  }
}

export default App;
