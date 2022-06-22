import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import Rocket from './Rocket';
import { showRockets } from '../../redux/rockets/action-makers';

const RocketExihbit = () => {
  const dispatch = useDispatch();
  const rockets = useSelector((state) => state.rockets);
  useEffect(() => {
    dispatch(showRockets());
  }, [dispatch]);
  console.log(rockets)

  return (
    <div>
      {rockets && rockets.map(
        (rocket) => (
          <Rocket
            key={rocket.id}
            name={rocket.rocket_name}
            description={rocket.description}
            img={rocket.flickr_images}
          />
        ),
      )}
    </div>
  );
};

export default RocketExihbit;
