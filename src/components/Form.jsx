import { useNavigate } from "react-router-dom";
import { useState } from "react";
import "../blocks/Form.css";
// import Modal from "./Modal";

function Form() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    location: "",
    date: "",
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
        <p className="form__text">Event Name:</p>
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
        <p className="form__text">Location:</p>
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
        <p className="form__text">Date:</p>
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
      <button type="submit" className="form__button">
        Create
      </button>
    </form>
  );
}

export default Form;

{
  /* { name, onClose, contentClass, isOpen }
    <Modal
  name={name}
  isOpen={isOpen}
  onClose={onClose}
  contentClass={contentClass}
>
  <form action="" className="modal__form">
    <h2 className="modal__form-title">Create Event</h2>
    <label htmlFor="" className="modal__label">
      Name {""}
      <input
        type="text"
        className="modal__input"
        placeholder="Enter event name"
        required
      />
    </label>
    <label htmlFor="" className="modal__label">
      Location {""}
      <input
        type="text"
        className="modal__input"
        placeholder="Enter location"
        required
      />
    </label>
    <label htmlFor="" className="modal__label">
      Date {""}
      <input
        type="text"
        className="modal__input"
        placeholder="Enter date"
        required
      />
    </label>
    <label htmlFor="" className="modal__label">
      Time {""}
      <input
        type="text"
        className="modal__input"
        placeholder="Enter time"
        required
      />
    </label>
    <label htmlFor="" className="modal__label">
      ImageUrl{""}
      <input
        type="text"
        className="modal__input"
        placeholder="Image url"
        required
      />
    </label>
    <button type="submit" className="modal__submit">
      Save
    </button>
  </form>
</Modal>; */
}
