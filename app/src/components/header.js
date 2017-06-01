import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import Paper from 'material-ui/Paper';
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';
import FlatButton from 'material-ui/FlatButton';
import Blog from './Blog.js';
import logo from './images/hackcville.png'
import PhotoCarousel from './photoCarousel.js';
import Instructors from './Instructors.js';
import Motivation from './Motivation.js';
import Students from './Students.js';
class Pageselect extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedLanguage: 'Blog',
    };

    
  }
  updateLanguage=lang=> {
    this.setState(function () {
      return {
        selectedLanguage: lang,
      }
    });
  }
  
  render() {
    var languages = ['Blog'];
    
    return (
      <Router>
      <div className = 'top'>
         <MuiThemeProvider>
           <div>
         <AppBar  style={{
      width: '100%',
      margin: '0 auto',
      backgroundColor: "#333",
      textAlign: "right",
      textColor: "white",
    }}
       title= {<div>
      <Link to="Blog"><FlatButton style = {{color: "white"}}label ="Blog"  /></Link>
      <Link to="Instructors"><FlatButton style = {{color: "white"}}label ="Instructors"  /></Link>
      <Link to="Students"><FlatButton style = {{color: "white"}}label ="Students"  /></Link>
      <Link to="Motivation"><FlatButton style = {{color: "white"}}label ="Motivation"  /></Link>
      </div>}
      iconElementLeft= {<Link to="/"><img src ={logo} alt = '' className = 'logo_img'/></Link>}
  />

  </div>
        </MuiThemeProvider>
      <Route exact path="/Blog" component={Blog}/> 
      <Route exact path="/" component={PhotoCarousel}/> 
      <Route exact path="/Instructors" component={Instructors}/> 
      <Route exact path="/Students" component={Students}/> 
      <Route exact path="/Motivation" component={Motivation}/> 
      </div>
      </Router>
    )
  }
}


export default Pageselect;