import React from 'react';

const Rocket = (props) => {
  const { name, description, img } = props;
  return (
    <div>
      <div>
        <img src={img} alt="Rocket-photo" />
      </div>
      <h4>{name}</h4>
      <p>{description}</p>
      <button type="button">Reserve Rocket</button>
    </div>
  );
};

export default Rocket;
