import logo from "../assets/logo-orange-invis.png";
import video from "../assets/friends-video.mp4";
import "../blocks/Main.css";
import planner__image from "../assets/main__planner-image.jpg";

function Main() {
  return (
    <div className="main page">
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
          <div className="main__planner__item">
            <img
              className="planner__image"
              src={planner__image}
              alt="planner__image"
            />
          </div>
          <div className="main__planner__item">
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
      <section className="main__ideas">
        <h3 className="main__ideas-text">Event Ideas</h3>
        <ul className="main__ideas-flex">
          <li className="main__ideas-item">hello world</li>
          <li className="main__ideas-item">hello world</li>
          <li className="main__ideas-item">hello world</li>
          <li className="main__ideas-item">hello world</li>
        </ul>
      </section>
    </div>
  );
}

export default Main;
