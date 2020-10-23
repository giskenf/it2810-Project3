import {GET_PLAYERS, PlayerDispatchTypes, PLAYERS_ERROR, PLAYERS_LOADING} from '../types'
import {Dispatch} from "redux";
import axios from 'axios'

export const GetPlayers = (player: string) => async (dispatch:Dispatch<PlayerDispatchTypes>) => {
    try{
        dispatch({
            type: PLAYERS_LOADING
        })

        const res = await axios.get(`http://localhost:8000/players/${player}`);
        console.log(res.data[0])
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

