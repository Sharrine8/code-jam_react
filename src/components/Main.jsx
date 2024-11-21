import logo from "../assets/logo-orange-invis.png";
import video from "../assets/friends-video.mp4";
import "../blocks/Main.css";
import planner__image from "../assets/friends-giving-jam.jpg";

import birthdayParty from "../assets/birthdayParty.jpg";
import ChrismasParty from "../assets/ChrismasParty.jpg";
import FriendsGiving from "../assets/FriendsGiving.jpg";
import newYear from "../assets/newYear.jpg";

import iconOne from "../assets/calendar.svg";
import iconTwo from "../assets/list.svg";
import iconThree from "../assets/share.svg";

function Main() {
  return (
    <div className="main">
      <section className="main__header page">
        <div className="main__header-left">
          <img className="main__logo" src={logo} alt="Friendsgiving Jam Logo" />
          <p className="main__subtitle">Event Planner</p>
        </div>
        <div className="main__header-right">
          <video
            autoPlay
            loop
            muted
            src={video}
            className="main__video"
            alt="Friends enjoying Thanksgiving"
          />
        </div>
      </section>
      <section className="main__planner page">
        <h3 className="main-planner-text">Create an Event Today </h3>
        <div className="main__planner-flex">
          <div className="main__planner__item">
            <img
              className="main__planner__image"
              src={planner__image}
              alt="planner__image"
            />
          </div>
          <div className="main__planner__item">
            <div className="main__icon-flex">
              <div className="main__icon-item-flex">
                <img className="main__icon-img" src={iconOne} alt="Calander" />
                <div className="main__descriptions">
                  <h3 className="main__icon-text">Create an Event</h3>
                  <p className="main__icon-summary">
                    Give your event a name, date, time and location!
                  </p>
                </div>
              </div>
              <div className="main__icon-item-flex">
                <img className="main__icon-img" src={iconTwo} alt="List" />
                <div className="main__descriptions">
                  <h3 className="main__icon-text">Create Your Menu</h3>
                  <p className="main__icon-summary">
                    Add your favorite items and who will be bringing them to the
                    party!
                  </p>
                </div>
              </div>
              <div className="main__icon-item-flex">
                <img className="main__icon-img" src={iconThree} alt="Share" />
                <div className="main__descriptions">
                  <h3 className="main__icon-text">Share with Your Friends</h3>
                  <p className="main__icon-summary">
                    Share the event with your friends and have lots of fun!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="main__ideas page">
        <h3 className="main__ideas-text">Event Ideas</h3>
        <ul className="main__ideas-flex">
          <li className="main__ideas-item">
            <img
              className="main__ideas-images"
              src={FriendsGiving}
              alt="friendsGiving"
            />
          </li>
          <li className="main__ideas-item">
            <img
              className="main__ideas-images"
              src={ChrismasParty}
              alt="friendsGiving"
            />
          </li>
          <li className="main__ideas-item">
            <img
              className="main__ideas-images"
              src={birthdayParty}
              alt="friendsGiving"
            />
          </li>
          <li className="main__ideas-item">
            <img
              className="main__ideas-images"
              src={newYear}
              alt="friendsGiving"
            />
          </li>
        </ul>
      </section>
    </div>
  );
}

export default Main;
