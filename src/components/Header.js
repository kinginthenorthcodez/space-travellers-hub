import logo from '../assets/spacelogo.png';
import './css/Header.css';
import Nav from './Nav';

const Header = () => (
  <header className="header">
    <span className="nav-logo">
      <img src={logo} className="logo" alt="logo" />
      <span className="logo-title">Space Travellers&apos; Hub</span>
    </span>
    <Nav />
  </header>
);

export default Header;
