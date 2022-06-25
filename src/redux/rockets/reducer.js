import rocketShowed, { rocketBookingHandler } from './action-types';

const startState = [];
const showRocket = function reducer(state = startState, action = {}) {
  switch (action.type) {
    case rocketShowed:
      return [...state, ...action.payload];
    case rocketBookingHandler:
      return state.map((rocket) => {
        if (rocket.id !== action.payload) {
          return rocket;
        }
        return { ...rocket, reserved: !rocket.reserved };
      });
    default:
      return state;
  }
};

export default showRocket;
