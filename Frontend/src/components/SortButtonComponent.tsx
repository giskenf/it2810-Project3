import React, {useState} from 'react';
import {Button} from './SearchBarComponent/SearchComponent'
import {GetPlayers} from "../store/actions/playersAction";

interface SortButtonProps{
    sortBy: string
    changeSort:(a:string)=> void;
    active?: boolean
}


export const SortButton: React.FC<SortButtonProps> = (props:SortButtonProps) => {

    const sortClick = (sortVariable:string) => {
        props.changeSort(sortVariable);
    }


    return(
        <>
            <Button>Sort by {props.sortBy}</Button>
        </>
    )
};