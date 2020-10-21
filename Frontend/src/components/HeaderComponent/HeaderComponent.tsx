import React from 'react';
import styled from 'styled-components';
import PlLogo from '../../premier-league-1.svg';
export const HeaderComponent: React.FC = () => {
    return(
        <>
            <HeaderContainer>
                <LogoContainer src={PlLogo} ></LogoContainer>
                <HeaderTextContainer>Velkommen til Premier League search!</HeaderTextContainer>
            </HeaderContainer>
        </>
    )
};

const HeaderContainer = styled.div<{}>`
  display: flex;
  flex-direction: row;
  background-color: #3D195B;
  color: white;
  font-size: 32px;
  justify-content: center;
  flex-wrap: wrap;
  padding: 30px 0 30px 0;
`;

const HeaderTextContainer = styled.div<{}>`
  width: 75%;
  margin: 40px 0;
`;

const LogoContainer = styled.img<{}>`

`;