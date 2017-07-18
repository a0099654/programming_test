import React, {Component} from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';

import './App.css';

class App extends Component {

  render() {
    return (
      <MuiThemeProvider>
        <div className="App">
          <div className="App-header">
            <h2>Welcome to React</h2>
          </div>
          <p className="App-intro">
            To get started, edit
            <code>src/App.js</code>
            and save to reload.
          </p>
          <RaisedButton label="Default"/>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
