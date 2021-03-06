import React, { Component } from 'react';
import logo from './../logo.svg';
import '../styles/App.css';
import Search from './Search';

import ListExercises from './ListExercises';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          App works
        </p>
        <Search />
        <ListExercises />
      </div>
    );
  }
}

export default App;
