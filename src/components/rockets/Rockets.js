import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import Rocket from './Rocket';
import showRockets from '../../redux/rockets/action-makers';
import './Rockets.css';

const RocketExihbit = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(showRockets());
  }, [dispatch]);
  const rockets = useSelector((state) => state.rockets);

  return (
    <div className="rocket-container">
      {rockets
        && rockets.map((rocket) => (
          <Rocket
            key={rocket.id}
            name={rocket.name}
            description={rocket.description}
            img={rocket.img}
          />
        ))}
    </div>
  );
};

export default RocketExihbit;
