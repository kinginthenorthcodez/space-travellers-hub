import { showRockets } from './action-makers';
import { rocketShowed } from './action-types';

const showRocket = function reducer(state = [], action) {
  switch (action.type) {
    case (rocketShowed):
      return action.payload;
    default:
      return state;
  }
};

export default showRocket;
