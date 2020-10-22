import {GET_PLAYERS, PlayerDispatchTypes, PLAYERS_ERROR, PLAYERS_LOADING, PlayerType,playerAbility} from '../types'

/*const initialState = {
    players:[],
    loading:true
}

export default function(state = initialState, action: any){

    switch(action.type){

        case GET_PLAYERS:
            return {
                ...state,
                players:action.payload,
                loading:false

            }
        default: return state
    }

}*/
//-----------------------------------------------------

interface DefaultStateI {
    loading: boolean,
    //player?: PlayerType
    player?: playerAbility
}

const defaultState: DefaultStateI = {
    loading: false
}


const playerReducer = (state: DefaultStateI=defaultState, action: PlayerDispatchTypes): DefaultStateI => {
    switch(action.type){
        case PLAYERS_ERROR:
            return {
                loading: false,
            }
        case PLAYERS_LOADING:
            return{
                loading: true,
            }
        case GET_PLAYERS:
            return{
                loading: false,
                player: action.payload
            }
        default:
            return state
    }
    return state
}

export default playerReducer;