import React, {useContext, useState} from 'react';
import styled from 'styled-components';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import Pagination from '@material-ui/lab/Pagination';
import {GlobalContext, GlobalProvider} from "../GlobalProvider";


const useStyles = makeStyles((theme) =>
    createStyles({
        root: {
            '& > *': {
                // marginTop: theme.spacing(0),
                color: 'white'
            },
        },

    }),
);


export const FooterComponent: React.FC = () => {
    const classes = useStyles();
    const {pageProvider,numberOfPageProvider,isDisabledProvider} =useContext(GlobalContext);

    const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
        pageProvider.setSelectedPage(value);
    }


    return(
        <>
            <FooterContainer>
            <div className={classes.root}>
                <Pagination
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

