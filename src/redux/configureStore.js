import {
  legacy_createStore as legacyCreateStore,
  combineReducers,
  applyMiddleware,
} from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import showRocket from './rockets/reducer.js';
import dragonsReducer, { fetchDataAPI } from './dragons';

const allReducers = combineReducers({
  dragonsReducer,
  rockets: showRocket,
});
const store = legacyCreateStore(
  allReducers,
  applyMiddleware(logger, thunk),
);
store.dispatch(fetchDataAPI());
export default store;
