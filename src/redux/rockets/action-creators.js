import getApi from '../../components/rockets/rockets-api';
import rocketShowed, { rocketBooked } from './action-types';

const showRockets = () => async (dispatch) => {
  const rockets = await getApi();
  dispatch({ type: rocketShowed, payload: rockets });
};
export const bookRocket = (id) => {
  return {
    type: rocketBooked,
    payload: id,
  }
} 
export default showRockets;
