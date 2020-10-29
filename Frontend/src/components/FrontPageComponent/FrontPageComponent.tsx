import React from "react";
import styled from "styled-components";
import { SearchBarComponent } from "../SearchBarComponent/SearchComponent";
import { DropDownComponent } from "../DropDownComponent/DropDownComponent";
//import {PlayerList} from "../PlayerList";
import Select from "react-select";

const options = [
  { value: "Arsenal", label: "Arsenal" },
  { value: "Aston Ville", label: "Aston Villa" },
  { value: "Brighton", label: "Brighton" },
  { value: "Burnley", label: "Burnley" },
  { value: "Chelsea", label: "Chelsea" },
  { value: "Crystal Palace", label: "Crystal Palace" },
  { value: "Everton", label: "Everton" },
  { value: "Fulham", label: "Fulham" },
  { value: "Leeds United", label: "Leeds United" },
  { value: "Leicester", label: "Leicester" },
  { value: "Liverpool", label: "Liverpool" },
  { value: "Manchester City", label: "Manchester City" },
  { value: "Manchester United", label: "Manchester United" },
  { value: "Newcastle", label: "Newcastle" },
  { value: "Sheffield United", label: "Sheffield United" },
  { value: "Southampton", label: "Southampton" },
  { value: "Tottenham", label: "Totteham" },
  { value: "Sheffield United", label: "Sheffield United" },
  { value: "Southampton", label: "Southampton" },
];

export const FrontPageComponent: React.FC = () => {
  return (
    <>
      <FrontPageContainer>
        <SearchBarComponent />
      </FrontPageContainer>
    </>
  );
};

const FrontPageContainer = styled.div<{}>`
  display: flex;
  flex-direction: row;
  background-color: white;
  justify-content: center;
  flex-wrap: wrap;
  padding: 30px;
`;
