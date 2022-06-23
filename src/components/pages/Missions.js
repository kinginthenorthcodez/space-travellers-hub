import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import Mission from '../Mission';
import { loadMissions } from '../../redux/Missions/Missions';
import '../css/Missions.css';

const Missions = () => {
  const missions = useSelector((state) => state.missions, shallowEqual);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadMissions());
  }, []);

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
