import React from 'react';
import logo from './logo.svg';
import './App.css';
import {store} from "./store";
//import {Provider} from "react-redux"

const { Provider } = require('react-redux');

function App() {
  return (

  <Provider store={store}>
      <div className="App">
        <h1>Test</h1>
      </div>
  </Provider>
  );
}

export default App;
