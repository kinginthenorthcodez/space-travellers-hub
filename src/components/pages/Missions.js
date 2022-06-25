import { shallowEqual, useSelector, useDispatch } from 'react-redux';
import React, { useEffect } from 'react';
import Mission from '../Mission';
import { loadMissions } from '../../redux/Missions/Missions';
import '../css/Missions.css';

const Missions = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadMissions());
  }, []);
  const missions = useSelector((state) => state.missions, shallowEqual);

  return (
    <div className="missionsContainer">
      <table>
        <thead>
          <tr>
            <th>Mission</th>
            <th>Description</th>
            <th>Status</th>
            <th> </th>
          </tr>
        </thead>
        <tbody>
          {missions.map((mission) => (
            <Mission
              key={mission.id}
              id={mission.id}
              name={mission.name}
              description={mission.description}
              member={mission.member}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Missions;
