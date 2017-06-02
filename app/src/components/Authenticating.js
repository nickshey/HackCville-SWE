import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import React, { Component } from 'react';
import Blog from './Blog.js'
class Authenticating extends Component {
constructor(props){
  super(props);
  this.state={
  username:'',
  password:'',
  users: {username: "Taylor", password: "cat"},
  authenticated: false,
}

}
 handleUsernameChange = event => {
    this.setState({...this.state, username: event.target.value});
  }
  handlePasswordChange = event => {
    this.setState({...this.state, password: event.target.value});
  }
handleSubmit=event=> {
    if (this.state.username === this.state.users.username && this.state.password === this.state.users.password){
        this.setState(
            {...this.state,
            authenticated: true
            }
        ) 
    }
    else{
        alert("User doesn't Exist")
    }
   
    event.preventDefault();
  }

render() {
    
    return (
      <div className= "authenticator">
          {!this.state.authenticated &&
        <MuiThemeProvider>
          <div>
          <AppBar
         style={{
      width: '100%',
      margin: '0 auto',
      backgroundColor: "#3287C8",
      textColor: "white",
    }}
             title="Login"
           />
           <TextField
             hintText="Enter your Username"
             floatingLabelText="Username"
             value={this.state.username}
             onChange={this.handleUsernameChange}
             />
           <br/>
             <TextField
               type="password"
               hintText="Enter your Password"
               floatingLabelText="Password"
              value={this.state.password}
              onChange={this.handlePasswordChange}
               />
             <br/>
             <RaisedButton label="Submit" primary={true} style={style} onClick={(event) => this.handleSubmit(event)}/>
         </div>
         </MuiThemeProvider>
          }
          {this.state.authenticated && <Blog/>}
      </div>
    );
  }
}
const style = {
 margin: 15,
};
export default Authenticating;