import "../blocks/AboutUs.css";
import img from "../assets/Stuart-pic.jpg";
import img2 from "../assets/Mouachee-Thaos.jpg";
import img3 from "../assets/AlReyes.png";
import img4 from "../assets/Christia-Anderson.jpeg";

function AboutUs() {
  return (
    <div className="about-us">
      <p>This is where we can put info about us</p>
      <div className="about-us__cards">
        <div className="about-us__card">
          <img src={img} alt="" className="about-us__image" />
          <div className="about-us__description">
            <h1 className="about-us__title">Stuart Clark</h1>
            <h2 className="about-us__info">okkkkkscncnscnicc</h2>
            <button className="github__logo"></button>
            <button className="linkedIn__logo"></button>
          </div>
        </div>

        <div className="about-us__card">
          <img src={img4} alt="" className="about-us__image" />
          <div className="about-us__description">
            <h1 className="about-us__title">Christia Anderson</h1>
            <h2 className="about-us__info">okkkkkscncnscnicc</h2>
            <button className="github__logo" type="button"></button>
            <button className="linkedIn__logo" type="button"></button>
          </div>
        </div>
        <div className="about-us__card">
          <img src={img3} alt="" className="about-us__image" />
          <div className="about-us__description">
            <h1 className="about-us__title">Al Reyes</h1>
            <h2 className="about-us__info">okkkkkscncnscnicc</h2>
            <button className="github__logo" type="button"></button>
            <button className="linkedIn__logo" type="button"></button>
          </div>
        </div>

        <div className="about-us__card">
          <img src={img2} alt="" className="about-us__image" />
          <div className="about-us__description">
            <h1 className="about-us__title">Mouachee Thao</h1>
            <h2 className="about-us__info">okkkkkscncnscnicc</h2>
            <button className="github__logo"></button>
            <button className="linkedIn__logo"></button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
