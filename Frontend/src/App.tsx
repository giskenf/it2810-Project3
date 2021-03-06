import React, {useState} from 'react';
import './App.css';
import {RootStore} from './store/store'
//import {store} from "./store/store";
//import {Provider} from "react-redux"
import {HeaderComponent} from "./components/HeaderComponent/HeaderComponent";
import {FooterComponent} from "./components/FooterComponent/FooterComponent";
import {FrontPageComponent} from "./components/FrontPageComponent/FrontPageComponent";
import {DropDownComponent} from "./components/DropDownComponent/DropDownComponent";
import Select from "react-select";
import {GlobalProvider} from "./components/GlobalProvider";
const { Provider } = require('react-redux');

export function App() {

    return (
    <>
        <GlobalProvider>
          <div className="App">
              <HeaderComponent />
              <FrontPageComponent>
              </FrontPageComponent>
              <FooterComponent />
          </div>
        </GlobalProvider>
    </>
  );
}

export default App;
