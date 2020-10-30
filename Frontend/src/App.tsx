import React from 'react';
import './App.css';
import {HeaderComponent} from "./components/HeaderComponent/HeaderComponent";
import {FooterComponent} from "./components/FooterComponent/FooterComponent";
import {FrontPageComponent} from "./components/FrontPageComponent/FrontPageComponent";
import {GlobalProvider} from "./components/GlobalProvider";

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
