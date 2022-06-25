const api = 'https://api.spacexdata.com/v3/rockets';

const getApi = async () => {
  const response = await fetch(api, { method: 'GET' }).catch(
    (error) => error.message,
  );
  const resRead = await response.json();
  const rockets = resRead.map((rocket) => ({
    id: rocket.id,
    name: rocket.rocket_name,
    description: rocket.description,
    img: rocket.flickr_images[0],
    wikipedia: rocket.wikipedia,
    reserved: false,
  }));
  return rockets;
};

export default getApi;
