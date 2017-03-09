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
      useMiddle: false,
    }
  }

  updateFirst = (event, newValue) =>{
    this.setState({
      first: newValue,
    });
  }

  updateMiddle = (event, newValue) =>{
    this.setState({
      middle: newValue,
    });
  }

  updateLast = (event, newValue) =>{
    this.setState({
      last: newValue,
    });
  }

  fill = (event) => {
    this.setState({
      first: FIRST_NAME,
      middle: MIDDLE_NAME,
      last: LAST_NAME,
    });
    
  }

  useMiddleName = (event, isChecked) => {
    this.setState({
      useMiddle: isChecked,
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
          Middle name: <TextField value={this.state.middle} onChange={this.updateMiddle} id="middle name"/>
          </div>
          <div>
          <Checkbox label="Middle name" onCheck={this.useMiddleName}/>
          </div>
          <div>
          Last name: <TextField value={this.state.last} onChange={this.updateLast} id="last name"/>
          </div>
          <div>
          <RaisedButton label="Autofill" style={{marginLeft: 250}} onClick={this.fill}/>
          </div>
          </Paper>
      </MuiThemeProvider>
    );
  }
}

export default App;
