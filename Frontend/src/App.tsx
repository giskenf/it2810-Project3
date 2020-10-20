import React from 'react';
import './App.css';
//import {store} from "./store/store";
//import {Provider} from "react-redux"
import {PlayerList} from "./components/PlayerList";

const { Provider } = require('react-redux');

function App() {
  return (
    <>
      <button>Test</button>
      <div className="App">
        <h1>Test</h1>
          <div className='playerContentContainer'>
              <PlayerList/>
          </div>
      </div>
    </>
  );
}

export default App;
