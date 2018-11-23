import React, { Component } from 'react';
import MainBookPage from './components/MainBookPage'
import {Provider} from "react-redux";
import store from './store'
import './App.css';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
      <div className="App">
       <MainBookPage/>
      </div></Provider>
    );
  }
}

export default App;
