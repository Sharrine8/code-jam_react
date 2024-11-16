import NavBar from "./NavBar";
import Logo from "./Logo";
import "../blocks/Header.css";

function Header() {
  return (
    <div className="header">
      <Logo />
      <NavBar />
    </div>
  );
}

export default Header;
