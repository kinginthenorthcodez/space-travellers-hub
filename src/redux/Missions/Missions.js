const apiURL = () => 'https://api.spacexdata.com/v3/missions';

export const Actions = {
  LOAD: 'space-travellers-hub/missions/LOAD',
  TOGGLE_JOIN: 'space-travellers-hub/missions/TOGGLE_JOIN',
};

const stateInit = [];

const reducer = (state = stateInit, action) => {
  switch (action.type) {
    case Actions.LOAD:
      return [...action.payLoad];
    case Actions.TOGGLE_JOIN:
    {
      return state.map((mission) => {
        if (action.payLoad.id !== mission.id) return { ...mission };
        return { ...mission, member: !mission.member };
      });
    }
    default:
      return state;
  }
};

export const loadMissions = () => async (dispatch) => {
  const response = await fetch(apiURL());
  const data = await response.json();

  const payLoad = data.map((mission) => ({
    id: mission.mission_id,
    name: mission.mission_name,
    description: mission.description,
    member: false,
    wikipedia: mission.wikipedia,
  }));

  if (response.ok) {
    dispatch({
      type: Actions.LOAD,
      payLoad,
    });
  }
};

export const toggleJoinMission = (missionId) => (
  { type: Actions.TOGGLE_JOIN, payLoad: { id: missionId } }
);

export default reducer;
