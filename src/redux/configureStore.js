import {
  legacy_createStore as legacyCreateStore,
  combineReducers,
  applyMiddleware,
} from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import showRocket from './rockets/reducer';
import dragonsReducer, { fetchDataAPI } from './dragons';
import { getApi } from '../components/rockets/rockets-api';

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
