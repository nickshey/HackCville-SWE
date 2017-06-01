import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Blog from './components/Blog.js';
import Pageselect from './components/header.js';
import PhotoCarousel from './components/photoCarousel.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Pageselect/>
        <PhotoCarousel/>
      </div>
    );
  }
}

export default App;
