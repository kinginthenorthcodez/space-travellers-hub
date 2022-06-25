import getApi from '../../components/rockets/rockets-api';
import rocketShowed, { rocketBookingHandler } from './action-types';

const showRockets = () => async (dispatch) => {
  const rockets = await getApi();
  dispatch({ type: rocketShowed, payload: rockets });
};
export const bookRocket = (id) => ({
  type: rocketBookingHandler,
  payload: id,
});
export default showRockets;
