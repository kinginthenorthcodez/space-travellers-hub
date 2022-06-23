import "./myprofile.css";
import { useSelector, useDispatch } from "react-redux";
import Button from "react-bootstrap/Button";
import { canselReserve } from "../../redux/dragons";

const Myprofile = () => {
  const dragons = useSelector((state) => state.dragonsReducer).filter(
    (item) => item.reserved
  );
  const rockets = useSelector((state) => state.rockets).filter(
    (item) => item.reserved
  );
  const dispatch = useDispatch();
  return (
    <div className="profile-container">
      <div className="dragon-container">
        <hr className="line" />
        <div className="myprofile-section">
          <div className="dragons-section">
            <h3 className="mp-dragon-title">Dragons</h3>
            {!(dragons.length > 0) && (
              <p className="no-dragons"> No Dragons Reserved!</p>
            )}
            <div className="dragon-info">
              {dragons.map((dragon) => (
                <div className="dragon-list" key={dragon.id}>
                  <h4 className="mp-dragon-name"> {dragon.name}</h4>
                  <Button
                    variant="primary"
                    className="btn btn-cancel-reserve"
                    onClick={() => dispatch(canselReserve(dragon.id))}
                  >
                    Cancel Reservation
                  </Button>
                  <Button
                    variant="primary"
                    className="btn btn-readmore"
                    onClick={() => window.open(dragon.wikipedia)}
                  >
                    Read More
                  </Button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="rocket-container">
        <h2 className="rocket-title ">Rockets</h2>
        {!(rockets.length > 0) && (
          <p className="no-dragons"> No Rockets Reserved Yet</p>
        )}
        {rockets.map((rocket) => (
          <div className="rocket-card-profile" key={rocket.id} id={rocket.id}>
            <h4 className="name">{rocket.name}</h4>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Myprofile;
