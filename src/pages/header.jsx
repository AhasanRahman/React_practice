// import './style.css'
import {Link} from "react-router-dom";
 
const Header = () => {
  return (
    <header>
      <h2 className="logo">TRAVEL  HUB</h2>
      <nav className="navigation">
        <ul>
          <li> <Link to={'/'}>  Home</Link> </li>

          <li> <Link to={'/About'}>  About</Link> </li>

          <li><Link to={'/Service'}>  Service</Link> </li>

          <li> <Link to={'/Contact'}>  Contact</Link> </li>

        </ul>
      </nav>
    </header>
  );
};
export default Header;
