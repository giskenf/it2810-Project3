import {GET_PLAYERS, PlayerDispatchTypes, PLAYERS_ERROR, PLAYERS_LOADING} from '../types'
import {Dispatch} from "redux";
import axios from 'axios'

// getPlayers - funksjonen brukes ikke
export const getPlayers = () => async (dispatch: any) => {


    try{
        const res = await axios.get(`http://localhost:8000/players`)

        dispatch( {
            type: GET_PLAYERS,
            payload: res.data
        })
    }
    catch(e){
        dispatch( {
            type: PLAYERS_ERROR,
            payload: console.log(e),
        })
    }

}



export const GetPlayers = (player: string) => async (dispatch:Dispatch<PlayerDispatchTypes>) => {
    try{
        dispatch({
            type: PLAYERS_LOADING
        })

        const res = await axios.get(`http://localhost:8000/players/${player}`);

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