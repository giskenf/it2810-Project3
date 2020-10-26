import React, {useState} from 'react';
import styled from 'styled-components';
import {useDispatch, useSelector} from "react-redux";
import {RootStore} from "../../store/store";
import {GetPlayers} from "../../store/actions/playersAction";
import {DropDownComponent} from "../DropDownComponent/DropDownComponent";


export const SearchBarComponent: React.FC = () => {
    const dispatch = useDispatch();
    const [playerName, setPlayerName] = useState("");
    const playerState = useSelector((state: RootStore) => state.players);
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => setPlayerName(event.target.value);
    const handleSubmit = () => dispatch(GetPlayers(playerName));

    return (
        <>
            <Input id="searchInput" type="text" placeholder="Search for your favorite player!" onChange={handleChange}/>
            <Button id="searchButton" onClick={handleSubmit}>Search</Button>
            <DropDownComponent />
            <SearchContainer>
            {playerState.player && (
                <ul style={{listStyleType: "none"}}>
                    {playerState?.player?.map((player)=> {
                        return (
                            <li key={player.id} > {player?.first_name} {player?.second_name} {player?.goals_scored}</li>
                        )
                    })}
                </ul>
            )}
            </SearchContainer>
        </>
    );
};

//fjernet at Input tok inn boolean

const SearchContainer = styled.div<{}>`
  display: flex;
  flex-direction:row;
  flex-wrap: wrap; 
  width: 100%;
  justify-content: center; 
`;

const Input = styled.input<{}>`
  width: 300px;
  margin: 0 0 0 30px;
  padding: 10px;
  border: #3D195B solid;
`;

export const Button = styled.button<{}>`
  border-radius: 0;
  padding: 10px;
  margin-left: 6px;
  border: #3D195B solid;
  background-color: white;
`;