import "../blocks/footer.css";
import miniLogo from "../assets/logo-orange-mini.png";
import { NavLink } from "react-router-dom";
function Footer() {
  return (
    <footer className="footer">
      <p className="footer__companyTag">© 2024 FriendsGiving Jam, Inc</p>
      <img className="footer__logo" src={miniLogo} alt="logo-orange-mini" />
      <div className="footer__container footer__border">
        <ul className="footer__links">
          <li>
            <NavLink to="/" className="footer__item">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/events" className="footer__item">
              Create Event
            </NavLink>
          </li>
          <li>
            <NavLink to="/about-us" className="footer__item">
              About us
            </NavLink>
          </li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
