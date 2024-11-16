import { NavLink } from "react-router-dom";
import logo from "../assets/logo-orange-mini.png";
import "../blocks/Logo.css";

function Logo() {
  return (
    <div className="logo">
      <NavLink to="/">
        <img className="logo__image" src={logo} />
      </NavLink>
      <p className="logo__title">Friendsgiving Jam</p>
    </div>
  );
}

export default Logo;
