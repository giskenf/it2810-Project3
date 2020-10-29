import React, { useContext, useState } from "react";
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

export const SearchBarComponent: React.FC<searchBarProps> = (
  props: searchBarProps
) => {
  const [team, setTeam] = useState("");
  const [sort, setSort] = useState("");
  const [order, setOrder] = useState(-1);
  const [hasSearched, setHasSearched] = useState(false);
  const [page, setPage] = useState(1);

  const dispatch = useDispatch();
  const [playerName, setPlayerName] = useState("");
  const playerState = useSelector((state: RootStore) => state.players);
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) =>
    setPlayerName(event.target.value);

  const handleSubmit = (search: boolean) => {
    if (search) {
      if (!hasSearched) setHasSearched(true);
      dispatch(GetPlayers(playerName, team, sort, order, page));
    } else if (hasSearched)
      dispatch(GetPlayers(playerName, team, sort, order, page));
  };
  const changeOrder = () => {
    if (order == -1) setOrder(1);
    else setOrder(-1);
  };
  //Grunnen til at jeg opprettet en ny knapp som heter Sort Data er fordi når man kaller på to funksjoner med en
  //onClik, vil de ikke kalles i rekkefølge. Det gjorde at man må trykke to ganger for å feks sortere.

  return (
    <>
      <Input
        id="searchInput"
        type="text"
        placeholder="Search for your favorite player!"
        onChange={handleChange}
      />
      <Button
        onClick={() => {
          handleSubmit(true);
        }}
      >
        Search
      </Button>
      <DropDownComponent changeTeam={setTeam} />
      <ButtonContainer>
        <Button
          onClick={() => {
            setSort("name");
          }}
        >
          Sort by name
        </Button>
        <Button
          onClick={() => {
            setSort("goalsScored");
          }}
        >
          Sort by goals scored
        </Button>
        <Button onClick={changeOrder}>Sort descending</Button>
      </ButtonContainer>
      <Button onClick={() => handleSubmit(false)}>Sort Data</Button>

      <SearchContainer>
        {playerState.player && (
          <ul style={{ listStyleType: "none" }}>
            {playerState?.player?.map((player) => {
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
  border: #3d195b solid;
  transition: 0.3s;
  background-color: white;
  color: black;

  :hover {
    background-color: rgba(24, 10, 36, 0.85);
    color: white;
  }
  :active {
    background-color: black;
  }
`;

const SortButton = styled(Button)`
  background-color: ${(props) => (props.index === 1 ? "black" : "white")};
  color: ${(props) => (props.index === 1 ? "white" : "black")};
`;
const ButtonContainer = styled.div<{}>`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: center;
`;
