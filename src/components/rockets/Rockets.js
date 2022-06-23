import { useDispatch, useSelector } from "react-redux";
import { bookRocket } from "../../redux/rockets/action-creators";
import Rocket from "./Rocket";
import "./Rockets.css";

const RocketExihbit = () => {
  const dispatch = useDispatch();
  const rockets = useSelector((state) => state.rockets);
  const bookHandler = (id) => {
    dispatch(bookRocket(id));
  };

  return (
    <div className="rocket-container">
      {rockets &&
        rockets.map((rocket) => (
          <Rocket
            key={rocket.id}
            id={rocket.id}
            reserved={rocket.reserved}
            name={rocket.name}
            description={rocket.description}
            img={rocket.img}
            bookHandler={bookHandler}
          />
        ))}
    </div>
  );
};

export default RocketExihbit;
