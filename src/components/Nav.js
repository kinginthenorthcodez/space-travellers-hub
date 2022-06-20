import logo from "../assets/spacelogo.png";
import { Link } from "react-router-dom";
import './Nav.css'

const Nav = () => {
  return (
    <nav className="header">
      <img src={logo} className="logo" />
      <span>Space Travellers' Hub</span>
      <div className="nav-links">
        <Link to="/rockets">Rockets</Link>
        <Link to="/dragons">Dragons</Link>
        <Link to="/missions">missions</Link>
        <Link to="/">my profile</Link>
      </div>
    </nav>
  );
};

export default Nav;
