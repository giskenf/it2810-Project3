import React, {useState} from 'react';
import styled from 'styled-components';
import {useDispatch, useSelector} from "react-redux";
import {RootStore} from "../../store/store";
import {GetPlayers} from "../../store/actions/playersAction";
import {DropDownComponent} from "../DropDownComponent/DropDownComponent";
import {PopUp} from "../popup"
import rootReducer from "../../store/reducers";
import PropTypes from 'prop-types';
import InfiniteScroll from 'react-infinite-scroll-component';

interface searchBarProps{
    playerState?: ReturnType<typeof rootReducer>
    index?: number;
    setIndex?(id: number): void;
}





export const SearchBarComponent: React.FC<searchBarProps> = (props: searchBarProps) => {

    const [team, setTeam] = useState("");
    const [sort, setSort] = useState("");
    const [order,setOrder] = useState(-1)
    const [hasSearched, setHasSearched] = useState(false);
    const [index, setIndex] = useState(0);

    const dispatch = useDispatch();
    const [playerName, setPlayerName] = useState("");
    const playerState = useSelector((state: RootStore) => state.players);
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => setPlayerName(event.target.value);

    const checkState = (index: number,button:number) => {
        if(button===3){
            setIndex(index)
        }
        if(index===1 ||index===2||index==3){
            setIndex(0);
        }
        else if(button===1){
            setIndex(1);
        }
        else if(button===2)
            setIndex(2);
        else
            setIndex(3);
    }



    const handleSubmit = (search:boolean,Sort:string,index: number,button:number) => {

        checkState(index,button);

        if(Sort == "name")
            setSort("name")
        else
            setSort("goalsScored")

        if(search) {
            if(!hasSearched)
                setHasSearched(true)
            dispatch(GetPlayers(playerName, team, sort, order));}
        else if(hasSearched)
            dispatch(GetPlayers(playerName, team, sort, order));
    }

    const changeOrder = (index:number,button:number) =>{
        checkState(index,button);
        if(order==-1)
            setOrder(1)
        else
            setOrder(-1)
    }



    return (
        <>

            <Input id="searchInput" type="text" placeholder="Search for your favorite player!" onChange={handleChange}/>
            <Button onClick={() =>{handleSubmit(true,sort,index,3)}}>Search</Button>
            <DropDownComponent changeTeam={setTeam} />
            <SortButton index={index} onClick={()=>{
                handleSubmit(false,"name",index,1)}}>Sort by name</SortButton>
            <Button index={index} onClick={()=>{
                handleSubmit(false,"goalsScored",index,2)}}>Sort by goals scored</Button>
            <Button index={index} onClick={()=>changeOrder(index,4)}>Sort descending</Button>
            <SearchContainer>
                        {playerState.player && (
                                    <ul style={{listStyleType: "none"}}>

                                        {playerState?.player?.map((player) => {
                                            return (

                                                <PopUp key={player._id}
                                                       name={player?.name}
                                                       goals_conceded={player?.goals_scored}
                                                       goals_scored={player?.goals_scored}
                                                       assists={player?.assists}
                                                       clean_sheets={player?.clean_sheets}
                                                       news={player?.news} own_goals={player.own_goals}
                                                       team={player?.team}
                                                       red_cards={player?.red_cards}
                                                       yellow_cards={player?.yellow_cards}
                                                />
                                            )
                                        })}
                                    </ul>)
                                }


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
  align-items: center;
`;

const Input = styled.input<{}>`
  width: 300px;
  margin: 0 0 0 30px;
  padding: 10px;
  border: #3D195B solid;
  max-height: 40px;
`;

const Button = styled.button<{index?: number}>`
  border-radius: 0;
  padding: 10px;
  margin-left: 6px;
  max-height: 50px;
  border: #3D195B solid;
  transition: 0.3s;

  
  background-color:white;
  color:black;
 
  :hover{
    background-color:rgba(24,10,36,0.85) ;
    color:white;
  }
  :active{
    background-color: black;
  }
`;

const SortButton = styled(Button)`
  background-color: ${(props) => (props.index) === 1? "black":"red"};


`;
const ButtonContainer = styled.div<{}>`
  display: flex;
  flex-direction:column;
  flex-wrap: wrap; 
  justify-content: center; 
`;