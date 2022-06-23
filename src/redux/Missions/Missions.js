const apiURL = () => 'https://api.spacexdata.com/v3/missions';

export const Actions = {
  LOAD: 'space-travellers-hub/missions/LOAD',
  TOGGLE_JOIN: 'space-travellers-hub/missions/TOGGLE_JOIN',
};

const stateInit = [];

export const loadMissions = () => async (dispatch) => {
  const response = await fetch(apiURL());
  const data = await response.json();

  const payLoad = data.map((mission) => ({
    id: mission.mission_id,
    name: mission.mission_name,
    description: mission.description,
    member: false,
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
