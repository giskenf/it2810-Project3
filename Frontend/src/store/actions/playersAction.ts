import {
  GET_PLAYERS,
  PlayerDispatchTypes,
  PLAYERS_ERROR,
  PLAYERS_LOADING,
} from "../types";
import { Dispatch } from "redux";
import axios from "axios";

export const GetPlayers = (
  name: string,
  team: string,
  sort: string,
  order: number,
  page: number

  ) => async (dispatch:Dispatch<PlayerDispatchTypes>) => {
        try{
            dispatch({
                type: PLAYERS_LOADING
            })
            const res = await axios.get
            (`http://localhost:8000/players/?name=${name}&team=${team}&sortingVariable=${sort}&sortingOrder=${order}&page=${page}`);
            dispatch({
                type: GET_PLAYERS,
                payload: res.data.players,
                count: res.data.count
            })

        } catch(e){
            dispatch({
                type: PLAYERS_ERROR
            })
        }
};
