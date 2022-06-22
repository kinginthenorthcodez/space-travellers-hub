import { getApi } from '../../components/rockets/rockets-api';
import { rocketShowed } from './action-types';

export const showRockets =() => async (dispatch) => {
    const rockets = await getApi();
     dispatch({ type: rocketShowed, payload: rockets });
  };
