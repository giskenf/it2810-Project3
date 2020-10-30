import React, { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { RootStore } from "../../store/store";
import { GetPlayers } from "../../store/actions/playersAction";
import { DropDownComponent } from "../DropDownComponent/DropDownComponent";
import { PopUp } from "../popup";
import rootReducer from "../../store/reducers";
import { GlobalContext } from "../GlobalProvider";

interface searchBarProps {
  playerState?: ReturnType<typeof rootReducer>;
  index1?: number;
  index2?: number;
  setIndex?(id: number): void;
}

export const SearchBarComponent: React.FC<searchBarProps> = (props: searchBarProps) => {
  const [team, setTeam] = useState("");
  const [sort, setSort] = useState("");
  const [order, setOrder] = useState(-1);
  const [search, setSearch] = useState(false);
  const [index1, setIndex1] = useState(0);
  const [index2, setIndex2] = useState(0);

  const dispatch = useDispatch();
  const [playerName, setPlayerName] = useState("");
  const playerState = useSelector((state: RootStore) => state.players);
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) =>
    setPlayerName(event.target.value);

  const { pageProvider, numberOfPageProvider,isDisabledProvider } = useContext(GlobalContext);

  //metode for å endre farge på knappene når de trykkes
  const checkState = (Sort: string) => {

    //en knapp som allerede er aktiv trykkes
    if (Sort == sort) {
      setIndex1(0);
      setIndex2(0);
      setSort("");
    }
    //sortere på navn
    else if (Sort == "name") {
      setIndex2(0);
      setIndex1(1);
      setSort("name");
    }
    //sortere på antall mål
    else if (Sort == "goalsScored") {
      setIndex1(0);
      setIndex2(1);
      setSort("goalsScored");
    }
  };
  //metode for å hente nye spillere. Kalles av søk-knappen og useEffect metoden
  const handleSubmit = (search:boolean,buttonnr:number) => {
      //Sjekker om handleSubmit blir kalt på av Search knappen
      if(buttonnr===1){
          pageProvider.setSelectedPage(1);
      }
      //Sjekker om man tidligere har søkt, slik at ikke spillere hentes før brukeren søker
      if(search) {
        setSearch(true)
        //Når en bruker har søkt, blir variablen isDisabled satt til true, slik at sidenavigeringen
        //nederst på siden blir synlig.
        isDisabledProvider.setIsDisabled(false);
        dispatch(GetPlayers(playerName, team, sort, order, pageProvider.selectedPage));
    }

  };
  //Metode som endrer rekkefølgen spillerene presenteres. Kalles på av sort-knappen.
  const changeOrder = () => {
    if (order == -1){
        setOrder(1);
    }
    else {
        setOrder(-1);
    }
  };

  //Metode som henter nye spillere når bruker bytter side
  useEffect(() => handleSubmit(search,0), [pageProvider.selectedPage]);

  return (
    <>
      <ButtonContainer>
          <DropDownComponent changeTeam={setTeam} />
          <Input className="searchInput"
            id="searchInput"
            type="text"
            placeholder="Search for your favorite player!"
            onChange={handleChange}
          />
          <SortButton
              index={index1}
              onClick={()=>{
                  checkState("name")
              }}
          >Sort by name</SortButton>

          <SortButton
              index={index2}
              onClick={()=>{
                  checkState("goalsScored")
              }}
          >Sort by goals scored</SortButton>
          <SortButton index={order} onClick={() => changeOrder()}>
            Sort ascending
          </SortButton>
          <SearchButton
              onClick={() => {
                  handleSubmit(true,1);
              }}
          >
              Search
          </SearchButton>
      </ButtonContainer>
      <SearchContainer>
          {/*Dersom det er enn playerState(spillere er hentet), blir alle spillere listet opp:*/}
        {playerState.player && (
          <ul className="playersList" style={{ listStyleType: "none" }}>
            {playerState?.player?.map((player) => {
              if (playerState.count != null) {
                numberOfPageProvider.setNumberOfPages(
                    //Henter variabler count fra databasen.
                  Math.ceil(playerState.count / 15)
                );
              }
              return (
                <PopUp
                  key={player._id}
                  id={player._id}
                  name={player?.name}
                  goals_conceded={player?.goals_scored}
                  goals_scored={player?.goals_scored}
                  assists={player?.assists}
                  clean_sheets={player?.clean_sheets}
                  news={player?.news}
                  own_goals={player.own_goals}
                  team={player?.team}
                  red_cards={player?.red_cards}
                  yellow_cards={player?.yellow_cards}
                  votes={player.votes}
                />
              );
            })}
          </ul>
        )}
      </SearchContainer>
    </>
  );
};

const SearchContainer = styled.div<{}>`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;
  justify-content: center;
  align-items: center;
`;

const Input = styled.input<{}>`
  width: 300px;
  margin: 0 0 0 30px;
  padding: 10px;
  border: #3d195b solid;
  max-height: 40px;
`;

const Button = styled.button<{ index?: number }>`
  border-radius: 0;
  padding: 10px;
  margin-left: 6px;
  max-height: 50px;
  transition: 0.3s;
  
  
`;

const SortButton = styled(Button)`
  border: #3d195b solid;
  background-color: white;
  color: black;
  :hover {
    background-color: rgba(24, 10, 36, 0.85);
    color: white;
  }
  :active {
    background-color: black;
  }
  background-color: ${(props) => (props.index === 1 ? "black" : "white")};
  color: ${(props) => (props.index === 1 ? "white" : "black")};
`;
const SearchButton = styled(Button)`
  width: 140px;
  height: 70px;
  border: black solid;
  background-color: #3d195b;
  color: white;
  :hover {
    background-color: rgba(24, 10, 36, 0.8);
    color: white;
  }
  :active {
    background-color: black;
  }
  
`;


const ButtonContainer = styled.div<{}>`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: center;
  align-items:center;
  @media (max-width: 800px) {
    flex-direction: column;
  }
`;
