import { useState } from "react";
import Form from "./Form";

function Events() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };
  return (
    <div className="events">
      <button className="events__create-button" onClick={handleOpenModal}>
        + Add event
      </button>
      <Form
        name="create-event"
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />
    </div>
  );
}
export default Events;
