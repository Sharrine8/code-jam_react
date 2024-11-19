import logo from "../assets/logo-orange-invis.png";
import video from "../assets/friends-video.mp4";
import "../blocks/Main.css";
import planner__image from "../assets/main__planner-image.jpg";

function Main() {
  return (
    <div className="main">
      <section className="main__header">
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
      <section className="main__planner">
        <h3 className="Main-planner-text">Create an Event Today </h3>
        <div className="Main__planner-flex">
          <div>
            <img
              className="planner__image"
              src={planner__image}
              alt="planner__image"
            />
          </div>
          <div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse et
              fuga, distinctio eum iusto mollitia earum qui similique atque
              blanditiis error aut deleniti nesciunt, tempora saepe, doloribus
              voluptatum ipsum molestias labore perferendis est facilis!
              Deleniti optio eos adipisci ut sit possimus perferendis eum
              laboriosam modi cupiditate nulla, minus a quo.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Main;
