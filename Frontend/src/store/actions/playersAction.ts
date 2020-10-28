import {GET_PLAYERS, PlayerDispatchTypes, PLAYERS_ERROR, PLAYERS_LOADING} from '../types'
import {Dispatch} from "redux";
import axios from 'axios'

export const GetPlayers = (

    name: string,
    team: string,
    sort: string,
    order: number,
    skip?: number

    ) => async (dispatch:Dispatch<PlayerDispatchTypes>) => {
    console.log("1")
        try{
            dispatch({
                type: PLAYERS_LOADING
            })
            console.log("2")
            const res = await axios.get
            (`http://localhost:8000/players/?name=${name}&team=${team}&sortingVariable=${sort}&sortingOrder=${order}&skip=${skip}`);

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

