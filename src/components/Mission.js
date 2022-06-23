import PropTypes from 'prop-types';
import './css/Missions.css';

const Mission = ({
  name, description, member,
}) => (
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
          ? <button className="action leaveMission" type="button">Leave Mission</button>
          : <button className="status joinMission" type="button">Join Mission</button>
      }
    </td>
  </tr>
);

Mission.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  member: PropTypes.bool.isRequired,
};

export default Mission;
