import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">The Rock Booking</h1>
        </header>
        <p className="App-intro">
          This is a test, App Coming Soon!!!
        </p>
      </div>
    );
  }
}

export default App;
