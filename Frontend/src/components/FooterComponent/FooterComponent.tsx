import React from 'react';
import styled from 'styled-components';

export const FooterComponent: React.FC = () => {
    return(
        <>
            <FooterContainer>Footer</FooterContainer>
        </>
    )
};

const FooterContainer = styled.div<{ }>`
  display: flex;
  flex-direction: row;
  background-color: #3D195B;
  color: white;
  font-size: 32px;
  justify-content: center; 
  flex-wrap: wrap;
  padding: 30px;
`;