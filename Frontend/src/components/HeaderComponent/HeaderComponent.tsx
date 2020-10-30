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
  align-items: center;
  padding: 30px 0 30px 0;
  
  @media (max-width: 800px) {
    flex-direction: column;
  }
`;

const HeaderTextContainer = styled.div<{}>`
  width: 75%;
  margin: 40px 150px;
`;

const LogoContainer = styled.img<{}>`
  max-width: 250px;
`;