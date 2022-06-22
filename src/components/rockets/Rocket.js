import React from 'react';
import PropTypes from 'prop-types';
import Button from 'react-bootstrap/Button';

const Rocket = ({ name, description, img }) => (
  <div className="rocket-card">
    <div className="img-container">
      <img src={img} alt="Rocket" />
    </div>
    <article className="article">
      <h4 className="name">{name}</h4>
      <p className="description">{description}</p>
      <Button variant="primary" className="btn btn-reserve width-20vw">
        Reserve Rocket
      </Button>
    </article>
  </div>
);

Rocket.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
};

export default Rocket;
