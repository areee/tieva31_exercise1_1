import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

import React, { Component } from 'react';
import './App.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Paper from 'material-ui/Paper'
import TextField from 'material-ui/TextField'
import Checkbox from 'material-ui/Checkbox'
import RaisedButton from 'material-ui/RaisedButton'

class App extends Component {


  render() {

    return (
      <MuiThemeProvider>
        <Paper style={{width: 400, padding: 20}}>
          <div>
          First name: <TextField defaultValue={""} id="first name"/>
          </div>
          <div>
          Middle name: <TextField defaultValue={""} id="middle name"/>
          </div>
          <div>
          <Checkbox label="Middle name"/>
          </div>
          <div>
          Last name: <TextField defaultValue={""} id="last name"/>
          </div>
          <div>
          <RaisedButton label="Autofill" style={{marginLeft: 250}}/>
          </div>
          </Paper>
      </MuiThemeProvider>
    );
  }
}

export default App;
