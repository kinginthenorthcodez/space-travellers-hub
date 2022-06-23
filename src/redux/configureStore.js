import {
  legacy_createStore as legacyCreateStore,
  combineReducers,
  applyMiddleware,
} from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import showRocket from './rockets/reducer';
import dragonsReducer, { fetchDataAPI } from './dragons';
import showRockets from './rockets/action-creators';

const allReducers = combineReducers({
  dragonsReducer,
  rockets: showRocket,
});
const store = legacyCreateStore(
  allReducers,
  applyMiddleware(logger, thunk),
);
store.dispatch(fetchDataAPI());
store.dispatch(showRockets());

export default store;
