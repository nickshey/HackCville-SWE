import React, { Component } from 'react';

var index = 0;
class Blog extends React.Component {
  constructor(props) {
    super(props);
    this.state = {temporary_thing: '', temporary_date: '', temporary_time: '', temporary_location: '', thing: '', date: '', time: '', location: '', events:[]};
    this.handleThingChange = this.handleThingChange.bind(this);
    this.handleDateChange = this.handleDateChange.bind(this);
    this.handleTimeChange = this.handleTimeChange.bind(this);
    this.handleLocationChange = this.handleLocationChange.bind(this);
    this.handleThingEdit = this.handleThingEdit.bind(this);
    this.handleDateEdit = this.handleDateEdit.bind(this);
    this.handleTimeEdit = this.handleTimeEdit.bind(this);
    this.handleLocationEdit = this.handleLocationEdit.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleEdit = this.handleEdit.bind(this);
  }

  handleThingChange(event) {
    this.setState({...this.state, thing: event.target.value});
  }
    handleDateChange(event) {
    this.setState({...this.state, date: event.target.value});
  }
    handleTimeChange(event) {
    this.setState({...this.state, time: event.target.value});
  }
    handleLocationChange(event) {
    this.setState({...this.state, location: event.target.value});
    }
  handleThingEdit(event) {
    this.setState({...this.state, temporary_thing: event.target.value});
  }
    handleDateEdit(event) {
    this.setState({...this.state, temporary_date: event.target.value});
  }
    handleTimeEdit(event) {
    this.setState({...this.state, temporary_time: event.target.value});
  }
    handleLocationEdit(event) {
    this.setState({...this.state, temporary_location: event.target.value})
    }
 
  handleSubmit(event) {
    var array1=this.state.events,
    updatedEvents = array1.concat([{index: index, thing: this.state.thing, date: this.state.date, time: this.state.time, location: this.state.location }]);
    index++;
    this.setState({
      ...this.state,
      events: updatedEvents
    })
  
    event.preventDefault();
  }
  handleEditSubmit(anEvent) {
    const updatedEvents = this.state.events.slice(0);
    updatedEvents[anEvent.index].editing = false;
    updatedEvents[anEvent.index].thing = this.state.temporary_thing + " "
    updatedEvents[anEvent.index].date = this.state.temporary_date + " "
    updatedEvents[anEvent.index].time = this.state.temporary_time + " "
    updatedEvents[anEvent.index].location = this.state.temporary_location + " "
    this.setState({
      ...this.state,
      events: updatedEvents
    })
  }

  handleEdit(anEvent) {
     const updatedEvents = this.state.events.slice(0);
     updatedEvents[anEvent.index].editing = true;
     this.setState({
      ...this.state,
      events: updatedEvents
    })

  
    }

  render() {
    return (
      <div>
      <form onSubmit={this.handleSubmit}>
        <div classthing= "header">
        Event Tracker
        </div>
        <label classthing = "info">
          Event:
          <input type="text" value={this.state.thing} onChange={this.handleThingChange} />
          Date:
          <input type="text" value={this.state.date} onChange={this.handleDateChange} />
          Time:
          <input type="text" value={this.state.time} onChange={this.handleTimeChange} />
          Location:
          <input type="text" value={this.state.location} onChange={this.handleLocationChange} />
        </label>
        <input type="submit" value="Submit" />
      </form>
      <ul>
      {this.state.events.map(anEvent => {
   return <li> 
     Event: {anEvent.thing} |
     {anEvent.editing &&  <input type="text" value={this.state.temporary_thing} onChange={this.handleThingEdit} />} Date: {anEvent.date} |
     {anEvent.editing &&  <input type="text" value={this.state.temporary_date} onChange={this.handleDateEdit} />} Time: {anEvent.time} |
      {anEvent.editing &&  <input type="text" value={this.state.temporary_time} onChange={this.handleTimeEdit} />} Location: {anEvent.location} 
      {anEvent.editing &&  <input type="text" value={this.state.temporary_location} onChange={this.handleLocationEdit} />}
       <button onClick = {() => {this.handleEdit(anEvent)}}> Edit</button > <button onClick = {() => {this.handleEditSubmit(anEvent)}}> Done </button></li>;
})}
     </ul>
      </div>
    
    );
  }
}

export default Blog;