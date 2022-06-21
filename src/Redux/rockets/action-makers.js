import { getApi } from "../../components/rockets-api";
import { rocketShowed } from "./action-types";

export function showBooks() {
  return async (dispatch) => {
    const rockets = await getApi();
    dispatch({ type: rocketShowed, payload: rockets });
  };
}
