import React, { Component } from 'react';
import { Container } from 'reactstrap';
import Header from './components/Header';
import Map from './components/Map';

import './App.css';
require('dotenv').config()

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            applicationName: "Edmonton Traffic Incidents",
                }
    }

  render() {
    return (
      <div className="App">
        <Header appName={this.state.applicationName} />
          <div align="left">
          <Container>
              <Map />
          </Container>
          </div>
      </div>
    );
  }
}

export default App;
