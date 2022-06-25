import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Button from "react-bootstrap/Button";
import Badge from "react-bootstrap/Badge";
import "./dragon.css";
import {
  fetchDataAPI,
  reserveDragon,
  canselReserve,
    dispatch(fetchDataAPI());
  }, []);
  const dragons = useSelector((state) => state.dragonsReducer);
  return (
    <>
      <div className="dragon-section">
        <hr className="line" />
          <div className="dragon" key={dragon.id}>
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
