import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux/es/exports';
import './css/Missions.css';
import { toggleJoinMission } from '../redux/Missions/Missions';

const Mission = ({
  name, id, description, member,
}) => {
  const dispatch = useDispatch();
  return (
    <tr>
      <td>{name}</td>
      <td>{description}</td>
      <td>
        {
          member
            ? <button className="status activeMember" type="button">Active Member</button>
            : <button className="status nonMember" type="button">Not a Member</button>
        }
      </td>
      <td>
        {
          member
            ? <button className="action leaveMission" onClick={() => dispatch(toggleJoinMission(id))} type="button">Leave Mission</button>
            : <button className="status joinMission" onClick={() => dispatch(toggleJoinMission(id))} type="button">Join Mission</button>
        }
      </td>
    </tr>
  );
};

Mission.propTypes = {
  name: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  member: PropTypes.bool.isRequired,
};

export default Mission;
