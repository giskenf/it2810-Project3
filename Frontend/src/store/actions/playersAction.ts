import {GET_PLAYERS, PLAYERS_ERROR} from '../types'
import axios from 'axios'

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