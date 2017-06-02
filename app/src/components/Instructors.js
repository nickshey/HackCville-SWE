import React, { Component } from 'react';
import mike from './images/mike.jpg';
import jack from './images/jackross.jpg';
import brent from './images/brent.jpg'

class Instructors extends Component {
  render() {
    return (
      <div className="Instructors">
      Instructors
      <img src={mike}></img>
      </div>
    );
  }
}

export default Instructors;