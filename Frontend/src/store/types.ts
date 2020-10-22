export const GET_PLAYERS = 'GET_PLAYERS';
export const PLAYERS_LOADING = 'PLAYERS_LOADING';
export const PLAYERS_ERROR = 'PLAYERS_ERROR'

export type PlayerType = {
    playerabilities: playerAbility[]
    //mulig playerAbility er en liste også
}


export type playerAbility = {
    id: string
    first_name: string
    second_name: string
    //ikke med alle feltene
}

//PokemonSuccess
export interface GetPlayers{
    type: typeof GET_PLAYERS
    payload: playerAbility
    //payload: playerAbility
}

export interface PlayersLoading{
    type: typeof PLAYERS_LOADING
}

export interface PlayersError{
    type: typeof PLAYERS_ERROR
}

export type PlayerDispatchTypes = GetPlayers | PlayersLoading | PlayersError