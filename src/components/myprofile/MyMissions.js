import { shallowEqual, useDispatch, useSelector } from 'react-redux';

import { toggleJoinMission } from '../../redux/Missions/Missions';

const MyMissions = () => {
  const myMissions = useSelector(
    (state) => state.missions.filter((mission) => mission.member),
    shallowEqual,
  );
  const dispatch = useDispatch();

  return (
    <div className="profileGroupContainer">
      <h3 className="profileHeader">My Missions</h3>
      <div className="profileGroup">
        {
          (myMissions.length < 1)
            ? <p className="noEntry">No mission reserved</p>
            : myMissions.map((mission) => (
              <div key={mission.id} className="profileCard">
                <p>{mission.name}</p>
                <div>
                  <button type="button" className="leave" onClick={() => dispatch(toggleJoinMission(mission.id))}>
                    Leave Mission
                  </button>
                  <a href={mission.wikipedia} className="readMore" rel="noreferrer" target="_blank">Read More</a>
                </div>
              </div>
            ))
        }
      </div>
    </div>
  );
};

export default MyMissions;
