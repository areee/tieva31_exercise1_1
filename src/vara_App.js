import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

import React, { Component } from 'react';
import './App.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Paper from 'material-ui/Paper'
import TextField from 'material-ui/TextField'
import Checkbox from 'material-ui/Checkbox'
import RaisedButton from 'material-ui/RaisedButton'

// default constants for app:
const FIRST_NAME = "Pekka";
const MIDDLE_NAME = "Matti";
const LAST_NAME = "Virtanen";

class App extends Component {

  constructor(){
    super();
    this.state={
      first: "",
      middle: "",
      last: "",
      doNotUseMiddle: true,
    }
  }

  updateFirst = (event, newValue) => {
    this.setState({
      first: newValue,
    });
  }

  updateMiddle = (event, newValue) => {
    // If value of 'do not use middle name' is false, then set the new value for middle name:
    if(!this.state.doNotUseMiddle){
      this.setState({
        middle: newValue,
      });
    }
  }

  updateLast = (event, newValue) => {
    this.setState({
      last: newValue,
    });
  }

  autoFill = (event) => {
     // If value of 'do not use middle name' is false, then set the default constant for the middle name:
    if(!this.state.doNotUseMiddle){
      this.setState({
      middle: MIDDLE_NAME,
    });
    }
    this.setState({
      first: FIRST_NAME,
      last: LAST_NAME,
    });
    
  }

  useMiddleName = (event, isChecked) => {
    this.setState({
      doNotUseMiddle: !isChecked, //when 'use middle name' checkbox is checked, it returns false argument
    });
  }


  render() {

    return (
      <MuiThemeProvider>
        <Paper style={{width: 400, padding: 20}}>
          <div>
          First name: <TextField value={this.state.first} onChange={this.updateFirst} id="first name"/>
          </div>
          <div>
          Middle name: <TextField disabled={this.state.doNotUseMiddle} value={this.state.middle} onChange={this.updateMiddle} id="middle name"/>
          </div>
          <div>
            {/*onCheck property fires when the checkbox is checked*/}
          <Checkbox label="Middle name" onCheck={this.useMiddleName}/>
          </div>
          <div>
          Last name: <TextField value={this.state.last} onChange={this.updateLast} id="last name"/>
          </div>
          <div>
          <RaisedButton label="Autofill" style={{marginLeft: 250}} onClick={this.autoFill}/>
          </div>
          </Paper>
      </MuiThemeProvider>
    );
  }
}

export default App;
