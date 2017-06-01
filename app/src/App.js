import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Blog from './components/Blog.js';
import Pageselect from './components/header.js';
import PhotoCarousel from './components/photoCarousel.js';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import Paper from 'material-ui/Paper';
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';
import FlatButton from 'material-ui/FlatButton';
class App extends Component {
  render() {
    return (
      <div className="App">
        <Pageselect/>
        <MuiThemeProvider>
         <AppBar  style={{
      width: '100%',
      margin: '0 auto',
      backgroundColor: "#3287C8",
      textAlign: "right",
      textColor: "white",
    }}
  />
  </MuiThemeProvider>
      </div>
    );
  }
}

export default App;
