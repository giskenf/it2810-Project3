import React, {useState} from 'react';
import './App.css';
import {RootStore} from './store/store'
//import {store} from "./store/store";
//import {Provider} from "react-redux"
import {PlayerList} from "./components/PlayerList";
import {HeaderComponent} from "./components/HeaderComponent/HeaderComponent";
import {FooterComponent} from "./components/FooterComponent/FooterComponent";
import {FrontPageComponent} from "./components/FrontPageComponent/FrontPageComponent";
import {CustomizedDialogs} from "./components/popup";

const { Provider } = require('react-redux');

function App() {

    return (
    <>
      <div className="App">
          <HeaderComponent />
          <FrontPageComponent>
          </FrontPageComponent>
          <CustomizedDialogs/>
          <FooterComponent />
      </div>
    </>
  );
}

export default App;
