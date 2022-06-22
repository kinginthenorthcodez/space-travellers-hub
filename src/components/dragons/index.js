import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Badge from 'react-bootstrap/Badge';
import spaceship from '../../assets/spacex.jpg';
import './dragon.css';

const Dragons = () => {
  const [reserve, setReserve] = useState(false);
  return (
    <>
      <div className="dragon-section">
        <hr className="line" />
        <div className="dragon">
          <img src={spaceship} alt="dragon-ship" />
          <div className="dragon-info">
            <h3 className="dragon-title">SpaceX Dragon cargo spacecraft</h3>

            <p>
              {reserve ? <Badge bg="info">Reserved</Badge> : ''}
              Dragon was launched on June 29 on a SpaceX Falcon 9 rocket from
              Space Launch Complex 40 at Cape Canaveral Air Force Station in
              Florida, US and arrived at the station on July 2, for the
              company&apos;s 15th NASA-contracted commercial re-supply mission
              to the station.
            </p>
            <Button
              variant="primary"
              className="btn"
              onClick={() => setReserve(!reserve)}
            >
              {reserve ? 'Cancel Reservation' : 'Reserve Dragon'}
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dragons;
