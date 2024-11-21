import { NavLink } from "react-router-dom";
import Logo from "./Logo";
import "../blocks/NavBar.css";

function NavBar() {
  const customClassName = ({ isActive }) =>
    "nav__link" + (isActive ? " nav__link_active" : "");
  return (
    <nav className="nav">
      <Logo />
      <div className="nav__links">
        <NavLink to="/" className={customClassName}>
          Home
        </NavLink>
        <NavLink to="/events" className={customClassName}>
          Create Event
        </NavLink>
        <NavLink to="/my-event" className={customClassName}>
          My Event
        </NavLink>
        <NavLink to="/about-us" className={customClassName}>
          About Us
        </NavLink>
      </div>
    </nav>
  );
}

export default NavBar;
