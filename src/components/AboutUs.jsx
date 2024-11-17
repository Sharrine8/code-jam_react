import "../blocks/AboutUs.css";
import logo from "../assets/github-logo.svg";
import logo2 from "../assets/linkedIn-logo.svg";
import img from "../assets/Stuart";

function AboutUs() {
  return (
    <div className="about-us">
      <p>This is where we can put info about us</p>
      <div className="about-us__card">
        <img src={img} alt="" className="about-us__image" />
        <div className="about-us__description">
          <h1 className="about-us__title">Stuart</h1>
          <h2 className="about-us__info">okkkkkscncnscnicc</h2>
          <button src={logo}></button>
          <button src={logo2}></button>
        </div>
      </div>

      <div className="about-us__card">
        <img src="" alt="" className="about-us__image" />
        <div className="about-us__description">
          <h1 className="about-us__title">Stuart</h1>
          <h2 className="about-us__info">okkkkkscncnscnicc</h2>
          <button src={logo}></button>
          <button src={logo2}></button>
        </div>
      </div>
      <div className="about-us__card">
        <img src="" alt="" className="about-us__image" />
        <div className="about-us__description">
          <h1 className="about-us__title">Stuart</h1>
          <h2 className="about-us__info">okkkkkscncnscnicc</h2>
          <button src={logo}></button>
          <button src={logo2}></button>
        </div>
      </div>

      <div className="about-us__card">
        <img src="" alt="" className="about-us__image" />
        <div className="about-us__description">
          <h1 className="about-us__title">Stuart</h1>
          <h2 className="about-us__info">okkkkkscncnscnicc</h2>
          <button src={logo}></button>
          <button src={logo2}></button>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
