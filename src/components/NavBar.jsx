import { NavLink } from "react-router-dom";
import "../blocks/NavBar.css";

function NavBar() {
  const customClassName = ({ isActive }) =>
    "nav__link" + (isActive ? " nav__link_active" : "");
  console.log(customClassName);
  return (
    <nav className="nav">
      <NavLink to="/" className={customClassName}>
        Home
      </NavLink>
      <NavLink to="/events" className={customClassName}>
        Create Event
      </NavLink>
      <NavLink to="/about-us" className={customClassName}>
        About Us
      </NavLink>
    </nav>
  );
}

export default NavBar;