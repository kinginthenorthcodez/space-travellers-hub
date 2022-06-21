import { NavLink } from 'react-router-dom';
import './css/Nav.css';

const Nav = () => {
  const navs = [
    { id: 1, path: '/rockets', text: 'Rockets' },
    { id: 2, path: '/dragons', text: 'Dragons' },
    { id: 1, path: 'missions', text: 'Missions' },
    { id: 1, path: '/', text: 'My Profile' },
  ];
  return (
    <div className="nav-links">
      {navs.map((nav) => (
        <NavLink
          className={(navlink) => (navlink.isActive ? 'active-nav' : '')}
          to={nav.path}
          key={nav.id}
        >
          {nav.text}
        </NavLink>
      ))}
    </div>
  );
};

export default Nav;