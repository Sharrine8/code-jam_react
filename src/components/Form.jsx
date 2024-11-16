import "../blocks/Form.css";
import Modal from "./Modal";

function Form({ name, onClose, contentClass, isOpen }) {
  return (
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
    </Modal>
  );
}

export default Form;
