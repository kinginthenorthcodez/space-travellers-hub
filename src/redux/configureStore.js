import {
  legacy_createStore as legacyCreateStore,
  combineReducers,
  applyMiddleware,
} from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import showRocket from './rockets/reducer';
import dragonsReducer from './dragons';
import missions from './Missions/Missions';
import showRockets from './rockets/action-creators';

const allReducers = combineReducers({
  dragonsReducer,
  missions,
  rockets: showRocket,
});
const store = legacyCreateStore(
  allReducers,
  applyMiddleware(logger, thunk),
);
store.dispatch(showRockets());

export default store;
