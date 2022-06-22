import React from "react";
import Button from "react-bootstrap/Button";

const Rocket = (props) => {
  const { name, description, img } = props;
  return (
    <div className="rocket-card">
      <div className="img-container">
        <img src={img} alt="Rocket-photo" />
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
};

export default Rocket;
