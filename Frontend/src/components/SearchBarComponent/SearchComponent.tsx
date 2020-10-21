import React from 'react';
import styled from 'styled-components';

export const SearchBarComponent: React.FC = () => {
    return (
        <>
            <Input
                id="searchInput"
                //onKeyPress={handleKeywordKeyPress}
                placeholder="Search for your favorite player!"
                active={false}
            />
            <Button
        id="searchButton"
        /*onClick={() => {
          setSearchQuery(
            (document.getElementById('searchInput') as HTMLInputElement).value,
          );
          history.push(`/results/`);
        }}*/
      >
        Search
      </Button>
        </>
    );
};

const Input = styled.input<{ active: boolean }>`
  width: 300px;
  margin: 0 0 0 30px;
  padding: 10px;
  border: #3D195B solid;
`;

export const Button = styled.button<{}>`
  border-radius: 0;
  padding: 10px;
  margin-left: 6px;
  border: #3D195B solid;
  background-color: white;
`;