import { useState, useEffect } from "react";
import Modal from "./Modal";
import "../blocks/MyEvent.css";

function MyEvent() {
  const [formData, setFormData] = useState(null);
  // const [isModalOpen, setIsModalOpen] = useState(false);
  // const handleOpenModal = () => {
  //   setIsModalOpen(true);
  // };
  // const handleCloseModal = () => {
  //   setIsModalOpen(false);
  // };

  useEffect(() => {
    const storedData = sessionStorage.getItem("formData");
    if (storedData) {
      setFormData(JSON.parse(storedData));
    }
  }, []);

  if (!formData) {
    return <p>Create an event</p>;
  }

  return (
    <section className="my-event">
      <h1 className="my-event__title">{formData.name}</h1>
      <p className="my-event__subtitle">Location: {formData.location}</p>
      <p className="my-event__subtitle">Date: {formData.date}</p>
      <div className="my-event__dishes">Testing test</div>
      <button className="my-event__add-btn">Add dish</button>
    </section>
  );
}

export default MyEvent;
