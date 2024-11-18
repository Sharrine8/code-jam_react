import logo from "../assets/logo-orange-invis.png";
import video from "../assets/friends-video.mp4";
import "../blocks/Main.css";

function Main() {
  return (
    <div className="main">
      <section className="main__header">
        <div className="main__header-left">
          <img className="main__logo" src={logo} alt="Friendsgiving Jam Logo" />
          <p className="main__subtitle">Event Planner</p>
          <p className="main__header-text">
            This is the header section where we put the title, intro, and video
            section
          </p>
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
      <section className="main__planner">
        This is the part about the planner, with the image of a planner example
        and a side with the info of how it work
        <div>okss</div>
        <div>hello world </div>
      </section>
    </div>
  );
}

export default Main;
