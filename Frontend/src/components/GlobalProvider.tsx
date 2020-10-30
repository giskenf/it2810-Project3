import React, {useState, createContext, useContext, ReactNode, useMemo} from 'react';

export const GlobalContext = createContext<any>(1)


export const GlobalProvider = (props: any) =>{



    const [selectedPage,setSelectedPage] = useState(1);
    const [isDisabled, setIsDisabled] = useState(true);
    const [numberOfPages, setNumberOfPages] = useState(10);

    const pageProvider = useMemo(() => ({
        selectedPage,setSelectedPage}),[selectedPage,setSelectedPage]);
    const numberOfPageProvider = useMemo(() => ({
        numberOfPages, setNumberOfPages}),[numberOfPages, setNumberOfPages]);
    const isDisabledProvider = useMemo(() => ({
        isDisabled, setIsDisabled}),[isDisabled, setIsDisabled]);

    return(
        <GlobalContext.Provider value={{pageProvider,numberOfPageProvider,isDisabledProvider}}> {props.children} </GlobalContext.Provider>
    )

}
