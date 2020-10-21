import React from 'react';
import styled from 'styled-components';
import {SearchBarComponent} from "../SearchBarComponent/SearchComponent";
import {PlayerList} from "../PlayerList";

export const FrontPageComponent: React.FC = () => {
    return(
        <>
            <FrontPageContainer>
                <SearchBarComponent />
            </FrontPageContainer>
        </>
    )
};

const FrontPageContainer = styled.div<{ }>`
  display: flex;
  flex-direction: row;
  background-color: white;
  justify-content: center; 
  flex-wrap: wrap;
  padding: 30px;
`;