// import MyDragons from './MyDragons';
import MyReservedService from './MyReservedService';
import { toggleJoinMission } from '../../redux/Missions/Missions';
import { canselReserve } from '../../redux/dragons';
import { bookRocket } from '../../redux/rockets/action-creators';
import './profile.css';

const MyProfile = () => {
  const services = [
    {
      id: 1, name: 'Missions', stateName: 'missions', reserveVar: 'member', leaveActionCreator: toggleJoinMission,
    },
    {
      id: 2, name: 'Rockets', stateName: 'rockets', reserveVar: 'reserved', leaveActionCreator: bookRocket,
    },
    {
      id: 3, name: 'Dragons', stateName: 'dragonsReducer', reserveVar: 'reserved', leaveActionCreator: canselReserve,
    },
  ];
  return (
    <>
      <hr className="line" />
      <div className="myProfileContainer">
        {
          services.map((service) => {
            const {
              name, stateName, reserveVar, leaveActionCreator, id,
            } = service;

            return (
              <MyReservedService
                name={name}
                stateName={stateName}
                reserveVar={reserveVar}
                leaveActionCreator={leaveActionCreator}
                key={id}
              />
            );
          })
        }
      </div>
    </>
  );
};

export default MyProfile;
