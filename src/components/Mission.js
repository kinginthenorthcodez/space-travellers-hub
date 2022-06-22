import PropTypes from 'prop-types';

const Mission = ({
  name, description, member,
}) => (
  <tr>
    <td>{name}</td>
    <td>{description}</td>
    <td><button type="button">{member ? 'ACTIVE MEMBER' : 'NOT A MEMBER'}</button></td>
    <td><button type="button">{member ? 'Leave Mission' : 'Join Mission'}</button></td>
  </tr>
);

Mission.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  member: PropTypes.bool.isRequired,
};

export default Mission;
