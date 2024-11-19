import { useNavigate } from "react-router-dom";
import { useState } from "react";
import "../blocks/Form.css";

function Form() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    location: "",
    date: "",
    time: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    sessionStorage.setItem("formData", JSON.stringify(formData));
    navigate("/my-event");
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <label htmlFor="name" className="form__label">
        <p className="form__text">Event Name</p>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className="form__input"
          required
        />
      </label>
      <label htmlFor="location" className="form__label">
        <p className="form__text">Location</p>
        <input
          type="text"
          id="location"
          name="location"
          value={formData.location}
          onChange={handleChange}
          className="form__input"
          required
        />
      </label>
      <label htmlFor="date" className="form__label">
        <p className="form__text">Date</p>
        <input
          type="date"
          id="date"
          name="date"
          value={formData.date}
          onChange={handleChange}
          className="form__input"
          required
        />
      </label>
      <label htmlFor="time" className="form__label">
        <p className="form__text">Time</p>
        <input
          type="time"
          id="time"
          name="time"
          value={formData.time}
          onChange={handleChange}
          className="form__input"
          required
        />
      </label>
      <button type="submit" className="form__button">
        Create
      </button>
    </form>
  );
}

export default Form;
