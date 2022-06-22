import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import dragonsReducer, { fetchDataAPI } from './dragons';

const allReducers = combineReducers({
  dragonsReducer,
});
const store = createStore(allReducers, applyMiddleware(logger, thunk));
store.dispatch(fetchDataAPI());
export default store;
