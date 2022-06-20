import { Link } from 'react-router-dom';
import logo from '../assets/spacelogo.png';
import './Nav.css';

const Nav = () => (
  <nav className="header">
    <span className="nav-logo">
      <img src={logo} className="logo" alt="logo" />
      <span className="logo-title">Space Travellers&apos; Hub</span>
    </span>
    <div className="nav-links">
      <Link to="/rockets">Rockets</Link>
      <Link to="/dragons">Dragons</Link>
      <Link to="/missions">missions</Link>
      <Link to="/">my profile</Link>
    </div>
  </nav>
);

export default Nav;
