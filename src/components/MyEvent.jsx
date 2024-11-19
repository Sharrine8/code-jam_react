import { useState, useEffect } from "react";
import "../blocks/MyEvent.css";
import MenuSection from "./MenuSection";

function MyEvent() {
  const [formData, setFormData] = useState(null);

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
      <p className="my-event__subtitle">Time: {formData.time}</p>
      <MenuSection />
    </section>
  );
}

export default MyEvent;
