import React, { Component } from 'react';

import { Provider } from 'react-redux';
import configureStore from './redux/store';

import HotelControls from './components/HotelControls';
import HotelList from './components/HotelList';

import './App.css';

const store = configureStore();

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <header className="App-header">
            <HotelControls />
          </header>
          <div className="App-body">
            <HotelList />
          </div>
        </div>
      </Provider>
    );
  }
}

export default App;
