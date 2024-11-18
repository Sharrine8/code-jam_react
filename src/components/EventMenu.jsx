import "../blocks/EventMenu.css";
import { useLocation } from "react-router-dom";
import MenuSection from "./MenuSection";

function EventMenu() {
  const location = useLocation();
  const formData =
    location.state || JSON.parse(localStorage.getItem("dataSubmit"));

  return (
    <div className="events-menu">
      <div className="events-menu__container">
        <h2 className="events-menu__title">{formData.name}</h2>
        <div className="events-menu__details">
          <p className="events-menu__location">{formData.date}</p>
          <p className="events-menu__location">{formData.location}</p>
          <p className="events-menu__location">{formData.time}</p>
        </div>
      </div>
      <section className="events-menu__menu-section">
        <MenuSection />
      </section>
    </div>
  );
}

export default EventMenu;
