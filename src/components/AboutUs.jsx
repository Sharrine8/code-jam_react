import "../blocks/AboutUs.css";
import img from "../assets/Stuart-pic.jpg";
import img2 from "../assets/Mouachee-Thaos.jpg";
import img3 from "../assets/AlReyes.png";
import img4 from "../assets/Christia-Anderson.jpeg";
import { Link } from "react-router-dom";
function AboutUs() {
  return (
    <div className="about-us">
      <p className="about-us-text">
        The Inventors of Friendsgiving Jam. It all started in a group chat that
        changed our lives into a thriving business where friends can jam all
        their creative events and dishes into one place! Problem solving, tech
        savvy, music loving, sports playing, and traveling created a melting pot
        of ideas to get us this far! We shall continue to do so every year to
        give thanks to life. Giving is not only an act or feeling....its
        music...its a Jam!{" "}
      </p>
      <div className="about-us__cards">
        <div className="about-us__card">
          <img src={img} alt="" className="about-us__image" />
          <div className="about-us__description">
            <h1 className="about-us__title">Stuart Clark</h1>
            <h2 className="about-us__info">okkkkkscncnscnicc</h2>
            <Link to="https://github.com/uffylane">
              <button className="github__logo"></button>
            </Link>
            <Link to="https://www.linkedin.com/in/stuart-clark-b2aba2338/?trk=public-profile-join-page">
              <button className="linkedIn__logo"></button>
            </Link>
          </div>
        </div>

        <div className="about-us__card">
          <img src={img4} alt="" className="about-us__image" />
          <div className="about-us__description">
            <h1 className="about-us__title">Christia Anderson</h1>
            <h2 className="about-us__info">okkkkkscncnscnicc</h2>
            <Link to="https://github.com/Sharrine8">
              <button className="github__logo"></button>
            </Link>
            <Link to="https://www.linkedin.com/in/christia-anderson/">
              <button className="linkedIn__logo"></button>
            </Link>
          </div>
        </div>
        <div className="about-us__card">
          <img src={img3} alt="" className="about-us__image" />
          <div className="about-us__description">
            <h1 className="about-us__title">Al Reyes</h1>
            <h2 className="about-us__info">okkkkkscncnscnicc</h2>
            <Link to="https://github.com/ReyesEnterprise">
              <button className="github__logo"></button>
            </Link>
            <Link to="https://www.linkedin.com/in/albert-reyes-634b3324b/">
              <button className="linkedIn__logo"></button>
            </Link>
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
