import "../blocks/Events.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Events() {
  const [location, setLocation] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [name, setName] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const dataSubmit = {
      name,
      location,
      date,
      time,
    };
    localStorage.setItem("dataSubmit", JSON.stringify(dataSubmit));

    navigate("/events-menu", { state: dataSubmit });
  };

  return (
    <div className="events">
      <h2 className="events__title">Create event</h2>
      <form className="events__form" onSubmit={handleSubmit}>
        <div className="events__form-input">
          <label htmlFor="name" className="events__label">
            Name {""}
            <input
              type="text"
              id="name"
              className="events__input"
              placeholder="Enter event name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </label>
          <label htmlFor="location" className="events__label">
            Location {""}
            <input
              type="text"
              id="location"
              className="events__input"
              placeholder="Enter location"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
            />
          </label>
          <label htmlFor="date" className="events__label">
            Date {""}
            <input
              type="date"
              id="date"
              className="events__input"
              value={date}
              onChange={(e) => setDate(e.target.value)}
            />
          </label>
          <label htmlFor="time" className="events__label">
            Time {""}
            <input
              type="time"
              id="time"
              className="events__input"
              value={time}
              onChange={(e) => setTime(e.target.value)}
            />
          </label>
        </div>
        <button type="submit" className="events__submit">
          Submit
        </button>
      </form>
    </div>
  );
}

export default Events;
