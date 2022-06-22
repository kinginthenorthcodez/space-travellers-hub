import { getApi } from '../../components/rockets/rockets-api';
import { rocketShowed } from './action-types';

export function showRockets() {
  return async (dispatch) => {
    const rockets = await getApi();
    dispatch({ type: rocketShowed, payload: rockets });
  };
}
