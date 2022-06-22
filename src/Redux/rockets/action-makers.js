import getApi from '../../components/rockets/rockets-api';
import rocketShowed from './action-types';

function showRockets() {
  return async (dispatch) => {
    const rockets = await getApi();
    dispatch({ type: rocketShowed, payload: rockets });
  };
}

export default showRockets;
