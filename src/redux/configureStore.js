import {
  legacy_createStore as legacyCreateStore,
  combineReducers,
  applyMiddleware,
} from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import showRocket from './rockets/reducer';
import dragonsReducer from './dragons';
<<<<<<< HEAD
import missions from './Missions/Missions';
=======
>>>>>>> f806b019b4890bfa9e0949c47eced9ffa22c76c5
import showRockets from './rockets/action-creators';

const allReducers = combineReducers({
  dragonsReducer,
  rockets: showRocket,
});
<<<<<<< HEAD
const store = legacyCreateStore(
  allReducers,
  applyMiddleware(logger, thunk),
);
=======
const store = legacyCreateStore(allReducers, applyMiddleware(logger, thunk));
>>>>>>> f806b019b4890bfa9e0949c47eced9ffa22c76c5
store.dispatch(showRockets());

export default store;
