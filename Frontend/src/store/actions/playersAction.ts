import {GET_PLAYERS, PlayerDispatchTypes, PLAYERS_ERROR, PLAYERS_LOADING} from '../types'
import {Dispatch} from "redux";
import axios from 'axios'

export const GetPlayers = (

    name: string,
    team: string,
    sort: string,
    hasSearched: boolean

    ) => async (dispatch:Dispatch<PlayerDispatchTypes>) => {
    console.log(hasSearched)
    if(hasSearched)

        try{
            dispatch({
                type: PLAYERS_LOADING
            })

            const res = await axios.get(`http://localhost:8000/players/?name=${name}&team=${team}`);

            dispatch({
                type: GET_PLAYERS,
                payload: res.data
            })

        } catch(e){
            dispatch({
                type: PLAYERS_ERROR
            })
        }
};

