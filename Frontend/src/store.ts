import {createStore, Store} from "redux";

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


const reducer = (state=players,action:any) => {
    switch (action.type){
        case "ADD":
            return players.push("spiller");
    }
}

function configureStore(): Store<AppState> {
    const store = createStore(reducer, []);
    return store;
}
//Oppretter en store
export const store = configureStore();

