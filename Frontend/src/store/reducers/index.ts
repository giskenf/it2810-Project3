import { combineReducers } from 'redux'
import playerReducers from './playerReducers'

export default combineReducers({
    players: playerReducers
});

