import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
const quotes = ["Stop crying. Fucking code.", "Knock Knock. Who's There? Fuck you. Work.", "Show some fucking heart",
        "React isn't that fucking hard, just do it.", "Eat some healthy fucking food.", "Try being a little fucking social.",
        "Fucking smile.", "Make people fucking like you."]

const style = {
  margin: 12,
};
var x = 0;
var z = 0;
var counter = z;
var arrayIndex = x;
const AppBarExampleIcon = () => (
  <AppBar
    title="Fucking Header"
    iconClassNameRight="muidocs-icon-navigation-expand-more"
  />
);

const RaisedButtonExampleSimple = () => (
  <div>
    <RaisedButton label="Next Quote" style={style} />
  </div>
);

const RaisedButtonExampleSimple2 = () => (
  <div>
    <RaisedButton label="Random Quote" primary={true} style={style} />
  </div>
);
class Motivation extends Component {
  state = {...this.state,
      arrayIndex: x,
      counter: z
    };
    
   theSwitch= () => {
    if(this.state.arrayIndex === quotes.length - 1){
      x = 0;
      
      this.setState({
      arrayIndex: x,
      counter: z++
    })
    }
    else {
    this.setState({
      arrayIndex: x++,
      counter: z++
    })
  }
}

  Randomizer = () => {
    this.setState({
      arrayIndex: Math.floor(Math.random() * (quotes.length)),
      counter: z++
    })
  }
  render() {
    return (
      <div className="Motivation">
      <div >
          
        </div>
        <h1 className="App-intro">
          {quotes[this.state.arrayIndex]}
        </h1>
          <MuiThemeProvider>
            <div onClick={this.theSwitch}>
            < RaisedButtonExampleSimple />
            </div>
          </MuiThemeProvider>
          <MuiThemeProvider>
          <div onClick={this.Randomizer}>
            < RaisedButtonExampleSimple2 />
            </div>
          </MuiThemeProvider>
        <h1 className = "subscript" >  A project by Taylor and Nojan </h1>
        <footer>
          <p>Fucking Motivation Counter: {this.state.counter}</p>
        </footer>
      </div>
    );
  }
}

export default Motivation;