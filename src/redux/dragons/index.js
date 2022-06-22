const intialState = [];
const url = 'https://api.spacexdata.com/v3/dragons';

const dragonsReducer = (state = intialState, action) => {
  switch (action.type) {
    case 'FETCH_OK':
      return [...action.payload];
    case 'RESERVETION_CANCELD': {
      const newState = state.map((dragon) => {
        if (dragon.id !== action.payload) return dragon;
        return { ...dragon, reserved: false };
      });
      return [...newState];
    }
    case 'RESERVED_DRAGON': {
      const newState = state.map((dragon) => {
        if (dragon.id !== action.payload) return dragon;
        return { ...dragon, reserved: true };
      });
      return [...newState];
    }
    default:
      return state;
  }
};

export default dragonsReducer;

// action

export const fetchOk = (payload) => ({
  type: 'FETCH_OK',
  payload,
});

export const canselReserve = (payload) => ({
  type: 'RESERVETION_CANCELD',
  payload,
});
export const reserveDragon = (payload) => ({
  type: 'RESERVED_DRAGON',
  payload,
});

export const fetchDataAPI = () => async (dispatch) => {
  const response = await fetch(url);
  const data = response.json();

  data.then((res) => {
    const dragon = res.map((dragon) => ({
      id: dragon.id,
      name: dragon.name,
      type: dragon.type,
      description: dragon.description,
      flickr_images: dragon.flickr_images[0],
      wikipedia: dragon.wikipedia,
      reserved: false,
    }));
    console.log(dragon);
    dispatch(fetchOk(dragon));
  });
  // console.table(data);
};
