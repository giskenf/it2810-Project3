/*import {createStore, Store} from "redux";
import {PlayerList} from "../components/PlayerList";
export type Player = {
    id: number;
    firstName: string;
    lastName: string;
    goalsScored: number;
    assists: number;
}
export type AppState ={
    players: Player[]
}
const initialPlayer = {
    id: 1,
    firstName: "Jonas",
    lastName: "Blake",
    goalsScored: 10,
    assists: 0,
    shown: false
}
const reducer = (state=initialPlayer,action:any) => {
    switch (action.type){
        case "ADD":
            state = {...state, goalsScored: state.goalsScored + action.payload};
            break;
        case "SHOW":
            console.log('Vise spilllere')
            state = {...state, shown: true};
            break
        case "HIDE":
            console.log('Skul spillere')
            state = {...state, shown: false};
            break
        //default: return state;
    }
    return state;
}
export const store = createStore(reducer)
//preloaded state: undefined
store.subscribe(() => {
    console.log("Store updated",store.getState())
})
store.dispatch({
    type: "HIDE",
    payload: 10
})
function configureStore(): Store<AppState> {
    const store = createStore(reducer, []);
    return store;
}
//Oppretter en store
export const store = configureStore();
 */
import {createStore, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'

import rootReducer from './reducers'

const initalState = {

}

const middleware = [thunk]
const store = createStore(rootReducer, initalState, composeWithDevTools(applyMiddleware(...middleware)));


//Fra video
const Sstore = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));

export type RootStore = ReturnType<typeof rootReducer>

export default Sstore;
