import React, {useContext} from 'react';
import styled from 'styled-components';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import Pagination from '@material-ui/lab/Pagination';
import {GlobalContext} from "../GlobalProvider";

//Metode for inn å style komponent fra Material-UI
const useStyles = makeStyles(() =>
    createStyles({
        root: {
            '& > *': {
                color: 'white'
            },
        },
    }),
);

export const FooterComponent: React.FC = () => {
    const classes = useStyles();
    const {pageProvider,numberOfPageProvider,isDisabledProvider} = useContext(GlobalContext);

    const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
        pageProvider.setSelectedPage(value);
    }

    return(
        <>
            <FooterContainer>
            <div className={classes.root}>
                <Pagination className="pagination"
                    count={numberOfPageProvider.numberOfPages}
                    color={"primary"}
                    page={pageProvider.selectedPage}
                    onChange={handleChange}
                    disabled={isDisabledProvider.isDisabled}
                    size={"large"}
                />
            </div>
            </FooterContainer>
        </>
    )
};

const FooterContainer = styled.div<{ }>`
  display: flex;
  flex-direction: column;
  background-color: #C7B6DC;
  color: white;
  font-size: 32px;
  justify-content: center; 
  align-content: center;
  flex-wrap: wrap;
  padding: 30px;
`;

