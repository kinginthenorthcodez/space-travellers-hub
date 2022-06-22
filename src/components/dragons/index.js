import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Button from 'react-bootstrap/Button';
import Badge from 'react-bootstrap/Badge';
import './dragon.css';
import { reserveDragon, canselReserve } from '../../redux/dragons';

const Dragons = () => {
  // const [reserve, setReserve] = useState(false);
  const dragons = useSelector((state) => state.dragonsReducer);
  const dispatch = useDispatch();
  return (
    <>
      <div className="dragon-section">
        <hr className="line" />
        {dragons.map((dragon) => (
          <div className="dragon" key={dragon.id}>
            <img src={dragon.flickr_images} alt={dragon.name} />
            <div className="dragon-info">
              <h3 className="dragon-title">{dragon.name}</h3>
              {dragon.reserved ? (
                <>
                  <p>
                    <Badge bg="info">Reserved</Badge>
                    {dragon.description}
                  </p>
                </>
              ) : (
                <p>{dragon.description}</p>
              )}
              {dragon.reserved ? (
                <Button
                  variant="primary"
                  className="btn btn-cancel-reserve"
                  onClick={() => dispatch(canselReserve(dragon.id))}
                >
                  Cancel Reservation
                </Button>
              ) : (
                <Button
                  variant="primary"
                  className="btn btn-reserve"
                  onClick={() => dispatch(reserveDragon(dragon.id))}
                >
                  Reserve Dragon
                </Button>
              )}
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Dragons;
