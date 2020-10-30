import {createStore, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'
import rootReducer from './reducers'

const Sstore = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));
export type RootStore = ReturnType<typeof rootReducer>
export default Sstore;
