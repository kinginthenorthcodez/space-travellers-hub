import { shallowEqual, useSelector } from 'react-redux';
import Mission from '../Mission';
import '../css/Missions.css';

const Missions = () => {
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
