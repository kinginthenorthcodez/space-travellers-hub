import { showRockets } from "./action-makers";
import { rocketShowed } from "./action-types";

const startState = [];
const showRocket = function reducer(state = startState, action = {}) {
  console.log("I on call", action);
  switch (action.type) {
    case rocketShowed:
      console.log("I enter action");
      return action.payload;
    default:
      console.log("sorry i out");
      return state;
  }
};

export default showRocket;
