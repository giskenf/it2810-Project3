import React, {useState} from 'react';
import styled from 'styled-components';
import {useDispatch, useSelector} from "react-redux";
import {RootStore} from "../../store/store";
import {GetPlayers} from "../../store/actions/playersAction";
import {DropDownComponent} from "../DropDownComponent/DropDownComponent";
import {PopUp} from "../popup"
import rootReducer from "../../store/reducers";
import PropTypes from 'prop-types';




interface searchBarProps{
    playerState?: ReturnType<typeof rootReducer>
}

export const SearchBarComponent: React.FC<searchBarProps> = (props: searchBarProps) => {
    const [on, setOn] = useState(false);
    const [team, setTeam] = useState("");
    const [sort, setSort] = useState("");
    const [order,setOrder] = useState(-1)
    const [hasSearched, setHasSearched] = useState(false);

    const dispatch = useDispatch();
    const [playerName, setPlayerName] = useState("");
    const playerState = useSelector((state: RootStore) => state.players);
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => setPlayerName(event.target.value);
    const handleSubmit = () => dispatch(GetPlayers(playerName,team,sort,hasSearched,order));

    const changeOrder = () =>{
        if(order==-1)
            setOrder(1)
        else
          setOrder(-1)
    }

    return (
        <>
            <Input id="searchInput" type="text" placeholder="Search for your favorite player!" onChange={handleChange}/>
            <Button onClick={() =>{setHasSearched(true);handleSubmit()}}>Search</Button>
            <DropDownComponent changeTeam={setTeam} />
            <Button onClick={()=>{
                setSort("name");handleSubmit()}}>Sort by name</Button>
            <Button onClick={()=>{
                setSort("goalsScored");handleSubmit()}}>Sort by goals scored</Button>
            <Button onClick={changeOrder}>Sort descending</Button>

            <SearchContainer>
            {playerState.player && (
                <ul style={{listStyleType: "none"}}>
                    {playerState?.player?.map((player)=> {
                        return (
                            <PopUp  key={player._id}
                                    name={player?.name}
                                    goals_conceded={player?.goals_scored}
                                    goals_scored={player?.goals_scored}
                                    assists={player?.assists}
                                    clean_sheets={player?.clean_sheets}
                                    news={player?.news} own_goals={player.own_goals}
                                    team={player?.team}
                                    red_cards = {player?.red_cards}
                                    yellow_cards={player?.yellow_cards}

                            />
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

const Button = styled.button<{}>`
  border-radius: 0;
  padding: 10px;
  margin-left: 6px;
  border: #3D195B solid;
  background-color:white;
  transition: 0.3s;
  
  :hover{
    background-color:rgba(24,10,36,0.85) ;
    color:white;
  }
  :active{
    background-color: black;
  }
`;
