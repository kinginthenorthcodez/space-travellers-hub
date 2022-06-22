import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import Rocket from "./Rocket";
import { showRockets } from "../../redux/rockets/action-makers";

const RocketExihbit = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(showRockets());
  }, []);
  const rockets = useSelector((state) => state.rockets) //|| [
   // {
  //     description:
  //       "The Falcon 1 was an expendable launch system privately developed and manufactured by SpaceX during 2006-2009. On 28 September 2008, Falcon 1 became the first privately-developed liquid-fuel launch vehicle to go into orbit around the Earth.",
  //     id: 1,
  //     img: "https://imgur.com/DaCfMsj.jpg",
  //     name: "Falcon 1",
  //   },
  //   {
  //     description:
  //       "Falcon 9 is a two-stage rocket designed and manufactured by SpaceX for the reliable and safe transport of satellites and the Dragon spacecraft into orbit.",
  //     id: 2,
  //     img: "https://farm1.staticflickr.com/929/28787338307_3453a11a77_b.jpg",
  //     name: "Falcon 9",
  //   },
  //   {
  //     description:
  //       "With the ability to lift into orbit over 54 metric tons (119,000 lb)--a mass equivalent to a 737 jetliner loaded with passengers, crew, luggage and fuel--Falcon Heavy can lift more than twice the payload of the next closest operational vehicle, the Delta IV Heavy, at one-third the cost.",
  //     id: 3,
  //     img: "https://farm5.staticflickr.com/4599/38583829295_581f34dd84_b.jpg",
  //     name: "Falcon Heavy",
  //   },
  //   {
  //     description:
  //       "Starship and Super Heavy Rocket represent a fully reusable transportation system designed to service all Earth orbit needs as well as the Moon and Mars. This two-stage vehicle — composed of the Super Heavy rocket (booster) and Starship (ship) — will eventually replace Falcon 9, Falcon Heavy and Dragon.",
  //     id: 4,
  //     img: "https://live.staticflickr.com/65535/48954138962_ee541e6755_b.jpg",
  //     name: "Starship",
  //   },
  // ];
  console.log(rockets);

  return (
    <div>
      <h1>I render well</h1>
      {rockets &&
        rockets.map((rocket) => (
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
