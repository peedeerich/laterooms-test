import React, { Component } from 'react';

import HotelControls from './components/HotelControls';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <HotelControls />
        </header>
      </div>
    );
  }
}

export default App;
