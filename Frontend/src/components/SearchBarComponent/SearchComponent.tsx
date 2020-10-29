import React, {useContext, useState} from 'react';
import styled from 'styled-components';
import {useDispatch, useSelector} from "react-redux";
import {RootStore} from "../../store/store";
import {GetPlayers} from "../../store/actions/playersAction";
import {DropDownComponent} from "../DropDownComponent/DropDownComponent";
import {PopUp} from "../popup"
import rootReducer from "../../store/reducers";
import {GlobalContext} from "../GlobalProvider";

interface searchBarProps{
    playerState?: ReturnType<typeof rootReducer>
    index1?: number;
    index2?: number;
    setIndex?(id: number): void;
}

export const SearchBarComponent: React.FC<searchBarProps> = (props: searchBarProps) => {

    const [team, setTeam] = useState("");
    const [sort, setSort] = useState("");
    const [order,setOrder] = useState(-1)
    const [hasSearched, setHasSearched] = useState(false);
    const [index1, setIndex1] = useState(0);
    const [index2,setIndex2] = useState(0)

    const dispatch = useDispatch();
    const [playerName, setPlayerName] = useState("");
    const playerState = useSelector((state: RootStore) => state.players);
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => setPlayerName(event.target.value);

    const {pageProvider,numberOfPageProvider} =useContext(GlobalContext);

    //metode for å endre farge på knappene når de trykkes
    const checkState = (button:number,Sort:string) => {
        //søk knappen trykkes
        if(button===1) {

        }
        //en knapp som allerede er aktiv trykkes
        else if(Sort==sort){
            setIndex1(0)
            setIndex2(0)
            setSort("")
        }
        //sortere på navn
        else if(Sort=="name"){
            setIndex2(0)
            setIndex1(1)
            setSort("name")
        }
        //sortere på antall mål
        else if(Sort=="goalsScored"){
            setIndex1(0)
            setIndex2(1)
            setSort("goalsScored")
        }
    }
    console.log(playerState);
    const handleSubmit = (search:boolean,Sort:string,button:number) => {

        //Trykker på sorter etter navn knappen for  2 gang
        if(!(button===4)) {
            checkState(button,Sort);
        }
        //sjekker om en allerede har søkt
        if(search) {
            if(!hasSearched)
                setHasSearched(true)
            pageProvider.setSelectedPage(1);
            dispatch(GetPlayers(playerName, team, sort, order,pageProvider.selectedPage));}
        else if(hasSearched)
            dispatch(GetPlayers(playerName, team, sort, order,pageProvider.selectedPage));
    }
    const changeOrder = () =>{
        //checkState(button);
        if(order==-1)
            setOrder(1)
        else
            setOrder(-1)
    }

    return (
        <>
            <Input id="searchInput" type="text" placeholder="Search for your favorite player!" onChange={handleChange}/>
            <Button onClick={() =>{handleSubmit(true,sort,1)}}>Search</Button>
            <DropDownComponent changeTeam={setTeam} />
            <SortButton index={index1} onClick={()=>{
                handleSubmit(false,"name",2)}}>Sort by name</SortButton>
            <SortButton index={index2} onClick={()=>{
                handleSubmit(false,"goalsScored",3)}}>Sort by goals scored</SortButton>
            <SortButton index={order} onClick={()=>changeOrder()}>Sort descending</SortButton>
            <SearchContainer>
                        {playerState.player && (
                                    <ul style={{listStyleType: "none"}}>

                                        {playerState?.player?.map((player) => {
                                            if (playerState.count != null) {
                                                numberOfPageProvider.setNumberOfPages(Math.ceil(playerState.count / 15))
                                            }
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
  background-color: ${(props) => (props.index) === 1? "black":"white"};
  color: ${(props) => (props.index) === 1? "white":"black"};

`;
const ButtonContainer = styled.div<{}>`
  display: flex;
  flex-direction:column;
  flex-wrap: wrap; 
  justify-content: center; 
`;