import {GET_PLAYERS, PlayerDispatchTypes, PLAYERS_ERROR, PLAYERS_LOADING} from '../types'
import {Dispatch} from "redux";
import axios from 'axios'

export const GetPlayers = (

    first_name: string,

    ) => async (dispatch:Dispatch<PlayerDispatchTypes>) => {

    //const first_nameString = `&first_name=${first_name}`
    //const last_nameString =  `&last_name=${last_name}`


    try{
        dispatch({
            type: PLAYERS_LOADING
        })

        const res = await axios.get(`http://localhost:8000/players/${first_name}`);

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
