import React from 'react';
import './App.css';
import {Page} from "./components/Player";
//import {store} from "./store/store";
//import {Provider} from "react-redux"


const { Provider } = require('react-redux');

function App() {
  return (
    <>
      <button>Test</button>
      <div className="App">
        <h1>Test</h1>
          <div className='playerContentContainer'>
              <Page/>
          </div>
      </div>
    </>
  );
}

export default App;
