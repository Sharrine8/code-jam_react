import { useState } from "react";
import Form from "./Form";
import "../blocks/Events.css";

function Events() {
  // const [isModalOpen, setIsModalOpen] = useState(false);

  // const handleOpenModal = () => {
  //   setIsModalOpen(true);
  // };

  // const handleCloseModal = () => {
  //   setIsModalOpen(false);
  // };

  return (
    <div className="events">
      <h1 className="events__title">Create Event</h1>
      {/* <button className="events__create-button">
        + Add event
      </button> */}
      <Form
      // name="create-event"
      // isOpen={isModalOpen}
      // onClose={handleCloseModal}
      />
    </div>
  );
}
export default Events;
