import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import dragonsReducer from './dragons';

const allReducers = combineReducers({
  dragonsReducer,
});
const store = createStore(allReducers, applyMiddleware(logger, thunk));
store.dispatch({ type: 'ANYTHING' });
export default store;
