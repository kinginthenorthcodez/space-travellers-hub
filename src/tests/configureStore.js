import { configureStore } from '@reduxjs/toolkit';
import showRocket from '../redux/rockets/reducer';
import dragonsReducer from '../redux/dragons/index';

const setupStore = (reserved) => {
  const preloadedState = {
    rockets: [
      {
        id: 1,
        name: 'Falcon 1',
        description:
          'The Falcon 1 was an expendable launch system privately developed and manufactured by SpaceX during 2006-2009. On 28 September 2008, Falcon 1 became the first privately-developed liquid-fuel launch vehicle to go into orbit around the Earth.',
        img: 'https://imgur.com/DaCfMsj.jpg',
        reserved,
      },
    ],
    dragons: [
      {
        id: 1,
        name: 'Falcon 1',
        description:
          'The Falcon 1 was an expendable launch system privately developed and manufactured by SpaceX during 2006-2009. On 28 September 2008, Falcon 1 became the first privately-developed liquid-fuel launch vehicle to go into orbit around the Earth.',
        img: 'https://imgur.com/DaCfMsj.jpg',
        reserved,
      },
    ],
  };

  return configureStore({
    preloadedState,
    reducer: {
      rockets: showRocket,
      dragonsReducer,
    },
  });
};

export default setupStore;
