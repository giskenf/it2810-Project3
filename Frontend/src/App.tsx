import React from 'react';
import './App.css';
//import {store} from "./store/store";
//import {Provider} from "react-redux"
import {PlayerList} from "./components/PlayerList";
import {HeaderComponent} from "./components/HeaderComponent/HeaderComponent";
import {FooterComponent} from "./components/FooterComponent/FooterComponent";
import {FrontPageComponent} from "./components/FrontPageComponent/FrontPageComponent";
import {Players} from "./components/players";

const { Provider } = require('react-redux');

function App() {
    return (
    <>
      <div className="App">
          <HeaderComponent />
          <FrontPageComponent>
          </FrontPageComponent>
          <Players getPlayers={()=>1} players={()=>1}/>
          <FooterComponent />
      </div>
    </>
  );
}

export default App;
