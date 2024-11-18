import "../blocks/footer.css";
import miniLogo from "../assets/logo-orange-mini.png";

function Footer() {
  return (
    <footer className="footer">
      <p className="footer__companyTag">© 2024 Company, Inc</p>
      <img className="footer__logo" src={miniLogo} alt="logo-orange-mini" />
      <div className="footer__container footer__border">
        <ul className="footer__links">
          <li>
            <a href="../idex.html" className="footer__item">
              Home
            </a>
          </li>
          <li>
            <a href="#" className="footer__item">
              Creat Event
            </a>
          </li>
          <li>
            <a href="#" className="footer__item">
              Join Event
            </a>
          </li>
          <li>
            <a href="#" className="footer__item">
              About Us
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
