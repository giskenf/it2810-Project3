import React, {useState} from 'react';
import './App.css';
import {RootStore} from './store/store'
//import {store} from "./store/store";
//import {Provider} from "react-redux"
import {PlayerList} from "./components/PlayerList";
import {HeaderComponent} from "./components/HeaderComponent/HeaderComponent";
import {FooterComponent} from "./components/FooterComponent/FooterComponent";
import {FrontPageComponent} from "./components/FrontPageComponent/FrontPageComponent";
import {useDispatch, useSelector} from "react-redux";
import {GetPlayers} from "./store/actions/playersAction";

const { Provider } = require('react-redux');

function App() {
    const dispatch = useDispatch();
    const [playerName, setPlayerName] = useState("")
    const playerState = useSelector((state: RootStore) => state.players)
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => setPlayerName(event.target.value);
    const handleSubmit = () => dispatch(GetPlayers(playerName));



    console.log(playerName)
    console.log("test")
    console.log(playerState)
    console.log(typeof playerState.player)

    return (
    <>
      <div className="App">
          <HeaderComponent />
          <FrontPageComponent>
          </FrontPageComponent>
          <input type = "text" onChange={handleChange}/>
          <button onClick={handleSubmit}>Search</button>
          {playerState.player && (
              <div>
                  <p>{playerState.player.first_name}</p>
              </div>
          )}
          {/*<Players getPlayers={()=>1} players={()=>1}/>*/}

          <FooterComponent />
      </div>
    </>
  );
}

export default App;
