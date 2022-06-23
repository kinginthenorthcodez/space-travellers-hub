import React from 'react';
import PropTypes from 'prop-types';
import Button from 'react-bootstrap/Button';
import Badge from 'react-bootstrap/Badge';

const Rocket = ({
  name, description, img, id, reserved, bookHandler,
}) => (
  <div className="rocket-card" id={id}>
    <div className="img-container">
      <img src={img} alt="Rocket" />
    </div>
    <article className="article">
      <h4 className="name">{name}</h4>
      <p className="description">
        {reserved ? (
          <>
            <Badge bg="info">Reserved</Badge>
            <span> </span>
          </>
        ) : (
          <></>
        )}

        {description}
      </p>
      {reserved ? (
        <Button
          variant="primary"
          className="btn btn-cancel-reserve width-20vw"
          // onClick={() => dispatch(canselReserve(Rocket.id))}
        >
          Cancel Reservation
        </Button>
      ) : (
        <Button
          variant="primary"
          className="btn btn-reserve width-20vw"
          onClick={() => bookHandler(id)}
          id={id}
        >
          Reserve Rocket
        </Button>
      )}
    </article>
  </div>
);

Rocket.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  reserved: PropTypes.bool.isRequired,
  bookHandler: PropTypes.func.isRequired,
};

export default Rocket;
