import React, { Component } from 'react';
import * as firebase from "firebase";
var config = {
    apiKey: "AIzaSyCyWUV-HmVRAXUWd5ENVn6VLK87fBJaxR4",
    authDomain: "contacts-cda6f.firebaseapp.com",
    databaseURL: "https://contacts-cda6f.firebaseio.com/",
    projectId: "contacts-cda6f",
    storageBucket: "contacts-cda6f.appspot.com",
    messagingSenderId: "468700621018"
  };
firebase.initializeApp(config);
var readData = firebase.database().ref('events/');
var index = 0;
class Blog extends React.Component {
  constructor(props) {
    super(props);
    this.state = {temporary_thing: '', temporary_date: '', temporary_time: '', temporary_location: '', thing: '', date: '', time: '', location: '', events:[]};
    
  }

  handleThingChange = event => {
    this.setState({...this.state, thing: event.target.value});
  }
    handleDateChange = event => {
    this.setState({...this.state, date: event.target.value});
  }
    handleTimeChange = event => {
    this.setState({...this.state, time: event.target.value});
  }
    handleLocationChange=event=> {
    this.setState({...this.state, location: event.target.value});
    }
  handleThingEdit=event=> {
    this.setState({...this.state, temporary_thing: event.target.value});
  }
    handleDateEdit=event=> {
    this.setState({...this.state, temporary_date: event.target.value});
  }
    handleTimeEdit=event=> {
    this.setState({...this.state, temporary_time: event.target.value});
  }
    handleLocationEdit=event=> {
    this.setState({...this.state, temporary_location: event.target.value})
    }
 
  handleSubmit=event=> {
    var array1=this.state.events,
    updatedEvents = array1.concat([{index: index, thing: this.state.thing, date: this.state.date, time: this.state.time, location: this.state.location }]);
    index++;
    this.writeUserData(updatedEvents)
    event.preventDefault();
  }
  handleEditSubmit=anEvent=> {
    const updatedEvents = this.state.events.slice(0);
    updatedEvents[anEvent.index].editing = false;
    updatedEvents[anEvent.index].thing = this.state.temporary_thing + " "
    updatedEvents[anEvent.index].date = this.state.temporary_date + " "
    updatedEvents[anEvent.index].time = this.state.temporary_time + " "
    updatedEvents[anEvent.index].location = this.state.temporary_location + " "
    /*
    this.setState({
      ...this.state,
      events: updatedEvents
    })
    */
    this.writeUserData(updatedEvents)
  }

  handleEdit=anEvent=> {
     const updatedEvents = this.state.events.slice(0);
     updatedEvents[anEvent.index].editing = true;
     /*
     this.setState({
      ...this.state,
      events: updatedEvents
    })*/
    this.writeUserData(updatedEvents)
    
    }
writeUserData=events=> {
  firebase.database().ref('events/').set({
   events
  });
}

handleDelete=anEvent=> {
    const updatedEvents = this.state.events.slice(0);
    updatedEvents[anEvent.index].deleted = true;
    this.writeUserData(updatedEvents)
}

componentWillMount(){
    var readData = firebase.database().ref('events/');
      readData.on('value',(snapshot) => {
        if (snapshot.val() === null) {
        this.setState({
          ...this.state,
          events: [],
        })}
        else {
        this.setState({
          ...this.state,
          events: snapshot.val().events,
        })}
      })
    } 
  render() {
    return (
      <div>
        
      <form className = "submitter" onSubmit={this.handleSubmit}>
        <div classthing= "header">
        Event Tracker
        </div>
        <ul>
        <label classthing = "info">
          <li>
          Event:
          <input type="text" value={this.state.thing} onChange={this.handleThingChange} /></li>
          <li>
          Date:
          <input type="text" value={this.state.date} onChange={this.handleDateChange} /></li>
          <li>
          Time:
          <input type="text" value={this.state.time} onChange={this.handleTimeChange} /></li>
          <li>
          Location:
          <input type="text" value={this.state.location} onChange={this.handleLocationChange} /></li>
        </label>
        </ul>
        <input className = "input" type="submit" value="Submit" />
      </form>
      
      <ul>
      {this.state.events.map(anEvent => {
   return <div> {!anEvent.deleted && <li className = "events"> 
     Event: {!anEvent.editing && anEvent.thing+ ' |'} 
     {anEvent.editing &&  <input type="text" value={this.state.temporary_thing} onChange={this.handleThingEdit} />} Date: {!anEvent.editing && anEvent.date + ' |'} 
     {anEvent.editing &&  <input type="text" value={this.state.temporary_date} onChange={this.handleDateEdit} />} Time: {!anEvent.editing && anEvent.time + ' |'} 
      {anEvent.editing &&  <input type="text" value={this.state.temporary_time} onChange={this.handleTimeEdit} />} Location: {!anEvent.editing && anEvent.location + ""} 
      {anEvent.editing &&  <input type="text" value={this.state.temporary_location} onChange={this.handleLocationEdit} />}
       {!anEvent.editing && <button onClick = {() => {this.handleEdit(anEvent)}}> Edit</button >} 
       {anEvent.editing && <button onClick = {() => {this.handleEditSubmit(anEvent)}}> Done </button>}
       {!anEvent.editing && <button onClick = {() => {this.handleDelete(anEvent)}}> Delete</button >}
       </li>}</div>;
})}
     </ul>
      </div>
    
    );
  }
}

export default Blog;