import {GET_PLAYERS, PlayerDispatchTypes, PLAYERS_ERROR, PLAYERS_LOADING, PlayerType,playerAbility} from '../types'


interface DefaultStateI {
    loading: boolean,
    //player?: PlayerType
    player?: playerAbility[]
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