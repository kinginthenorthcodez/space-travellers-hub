import PropTypes from 'prop-types';

const Mission = ({
  name, description, member,
}) => (
  <tr>
    <td>{name}</td>
    <td>{description}</td>
    <td>
      <button className={`status ${member ? 'activeMember' : 'nonMember'}`} type="button">
        {member ? 'Active Member' : 'Not a Member'}
      </button>
    </td>
    <td>
      <button className={`action ${member ? 'leaveMission' : 'joinMission'}`} type="button">
        {member ? 'Leave Mission' : 'Join Mission'}
      </button>
    </td>
  </tr>
);

Mission.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  member: PropTypes.bool.isRequired,
};

export default Mission;
