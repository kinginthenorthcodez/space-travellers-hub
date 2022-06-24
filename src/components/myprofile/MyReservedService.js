import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';

const MyReservedService = ({
  name, stateName, reserveVar, leaveActionCreator,
}) => {
  const myService = useSelector(
    (state) => state[stateName].filter((serviceState) => serviceState[reserveVar]),
    shallowEqual,
  );
  const dispatch = useDispatch();

  return (
    <div className="profileGroupContainer">
      <h3 className="profileHeader">
        {`My ${name}`}
      </h3>
      <div className="profileGroup">
        {
          (myService.length < 1)
            ? (
              <p className="noEntry">
                {`No ${name.toLowerCase()} reserved`}
              </p>
            )
            : myService.map((item) => (
              <div key={item.id} className="profileCard">
                <p>{item.name}</p>
                <div>
                  <button type="button" className="leave" onClick={() => dispatch(leaveActionCreator(item.id))}>
                    {name === 'Missions' ? 'Leave Mission' : 'Cancel Reservation'}
                  </button>
                  <a href={item.wikipedia} className="readMore" rel="noreferrer" target="_blank">Read More</a>
                </div>
              </div>
            ))
        }
      </div>
    </div>
  );
};

MyReservedService.propTypes = {
  name: PropTypes.string.isRequired,
  stateName: PropTypes.string.isRequired,
  reserveVar: PropTypes.string.isRequired,
  leaveActionCreator: PropTypes.func.isRequired,
};

export default MyReservedService;
