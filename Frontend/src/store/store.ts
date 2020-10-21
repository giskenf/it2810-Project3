import {combineReducers, createStore, Store} from "redux";
//import {PlayerList} from "../components/PlayerList";

export type Player = {
    id: number;
    firstName: string;
    lastName?: string;
    goalsScored?: number;
    assists?: number;
}

export type AppState ={
    players: Player[]
}

export function addPlayer(firstName: string) {
    return {
        type: "AddPlayer",
        payload: firstName,
    } as const;
}

export function removePlayer(id: number) {
    return {
        type: "RemovePlayer",
        payload: id,
    } as const;
}

type Actions =
    | ReturnType<typeof addPlayer>
    | ReturnType<typeof removePlayer>;

export function playerReducer(
    state: Player[] = [],
    action: Actions
) {
    switch (action.type) {
        case "AddPlayer":
            return state.concat({
                id: state.length + 1,
                firstName: action.payload,
            });
        case "RemovePlayer":
            return state.filter(
                (person) => person.id !== action.payload
            );
        default:
            neverReached(action);
    }
    return state;
}

function neverReached(never: never) {}

const rootReducer = combineReducers<AppState>({
    players: playerReducer,
});

function configureStore(): Store<AppState> {
    const store =  createStore(
        rootReducer,
        undefined
    );
    return store;
}

export const store = configureStore();







//-----------------------------


export function showPlayer(id: string){
    return{
        type: "SHOW_PLAYER",
        payload: id
    } as const;
}
export function hidePlayer(id: string){
    return{
        type: "HIDE_PLAYER",
        payload: id
    } as const;
}


export const reducer = (state={},action:any) => {
    switch (action.type){
        case "SHOW":
            console.log('Vise spilllere')
            state = {...state, show: true};
            break
        case "HIDE":
            console.log('Skul spillere')
            state = {...state, show: false};
            break
        default: return state;
    }
}



/*

export const store = createStore(reducer)
//preloaded state: undefined

store.subscribe(() => {
    console.log("Store updated",store.getState())
})


store.dispatch({
    type: "HIDE",
    payload: 10
})


 */

/*

function configureStore(): Store<AppState> {
    const store = createStore(reducer, []);
    return store;
}
//Oppretter en store
export const store = configureStore();

 */
