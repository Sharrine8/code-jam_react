import { useState, useEffect } from "react";
import Modal from "./Modal";
import "../blocks/MyEvent.css";

function MyEvent() {
  const [formData, setFormData] = useState(null);
  const [dishes, setDishes] = useState([]);
  // const [isModalOpen, setIsModalOpen] = useState(false);
  // const handleOpenModal = () => {
  //   setIsModalOpen(true);
  // };
  // const handleCloseModal = () => {
  //   setIsModalOpen(false);
  // };

  // const handleAddDish = (newDish) => {
  //   setDishes([...dishes, newDish]);
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
      <div className="my-event__dishes">
        {dishes.length === 0 ? (
          <p>No dishes have been added yet.</p>
        ) : (
          <ul>
            {dishes.map((dish, index) => {
              <li key={index}>{dish.name}</li>;
            })}
          </ul>
        )}
      </div>
      <button className="my-event__add-btn">Add dish</button>
      {/* <Modal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        onSubmit={handleAddDish}
      /> */}
    </section>
  );
}

export default MyEvent;
//Add onClick={handleOpenModal} to button when ready
