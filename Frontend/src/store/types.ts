export const GET_PLAYERS = "GET_PLAYERS";
export const PLAYERS_LOADING = "PLAYERS_LOADING";
export const PLAYERS_ERROR = "PLAYERS_ERROR";

export type playerAbility = {
  _id: string;
  name: string;
  news: string;
  goals_scored: number;
  assists: number;
  clean_sheets: number;
  own_goals: number;
  yellow_cards: number;
  red_cards: number;
  team: string;
  votes: number;
};

export interface GetPlayers {
  type: typeof GET_PLAYERS;
  payload: playerAbility[];
  count: number;
}

export interface PlayersLoading {
  type: typeof PLAYERS_LOADING;
}

export interface PlayersError {
  type: typeof PLAYERS_ERROR;
}

export type PlayerDispatchTypes = GetPlayers | PlayersLoading | PlayersError;
