import "../blocks/Form.css";
import { useState } from "react";

function Form() {
  return (
    <form className="form" onSubmit={handleSubmit}>
      <h2 className="form__title">Create event</h2>
      <div className="form__event">
        <label htmlFor="name" className="form__label">
          Name {""}
          <input type="text" id="name" className="form__input" />
        </label>
        <label htmlFor="location" className="form__label">
          Location {""}
          <input type="text" id="location" className="form__input" />
        </label>
        <label htmlFor="date" className="form__label">
          Date {""}
          <input type="date" id="date" className="form__input" />
        </label>
        <label htmlFor="time" className="form__label">
          Time {""}
          <input type="time" id="time" className="form__input" />
        </label>
      </div>
      <button type="submit" className="form__submit">
        Submit
      </button>
    </form>
  );
}

export default Form;
