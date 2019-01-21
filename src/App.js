import React, { Component } from 'react';

import HotelControls from './components/HotelControls';
import HotelList from './components/HotelList';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <HotelControls />
        </header>
        <div className="App-body">
          <HotelList />
        </div>
      </div>
    );
  }
}

export default App;
