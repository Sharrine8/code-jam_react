import { useEffect, useState } from "react";
import "../blocks/MenuSection.css";

function MenuSection() {
  const [menu, setMenu] = useState([]);
  const [menuTitle, setMenuTitle] = useState("");
  const [menuChef, setMenuChef] = useState("");

  useEffect(() => {
    const savedData = sessionStorage.getItem("menu");
    if (savedData) {
      setMenu(JSON.parse(savedData));
    }
  }, []);

  const handleAddMenu = (e) => {
    e.preventDefault();

    if (menuTitle && menuChef) {
      const updatedMenu = [...menu, { menuTitle, menuChef }];
      setMenu(updatedMenu);
      sessionStorage.setItem("menu", JSON.stringify(updatedMenu));
      setMenuTitle("");
      setMenuChef("");
    }
  };

  const handleDelete = (index) => {
    const removeMenu = menu.filter((_, i) => i !== index);
    sessionStorage.setItem("menu", JSON.stringify(removeMenu));
    setMenu(removeMenu);
  };

  const handleClearMenu = () => {
    setMenu([]);
  };

  return (
    <div className="menu-section">
      <div className="menu-section__container">
        <h3 className="menu-secion__title">Add Dish</h3>
        <div className="menu-section__inputs">
          <input
            type="text"
            className="menu-section__input menu-section__input_type_name"
            value={menuTitle}
            onChange={(e) => setMenuTitle(e.target.value)}
            placeholder="Enter Dish Name"
          />
          <input
            type="text"
            className="menu-section__input menu-section__input_type_chef"
            value={menuChef}
            onChange={(e) => setMenuChef(e.target.value)}
            placeholder="Enter Your Name"
          />
          <button
            className="menu-section__button menu-section__button_action_add"
            onClick={handleAddMenu}
          >
            Add
          </button>
        </div>
      </div>

      <div className="menu-section__content">
        <h3 className="menu-section__added-title">Our Event Menu</h3>
        {menu.length === 0 ? (
          <div className="menu-section__no-menu">No dishes added</div>
        ) : (
          <div className="menu-section__menu-list">
            {menu.map((menuItem, index) => (
              <div key={index} className="menu-section__menu-item">
                <h4 className="menu-section__menu-name">
                  {menuItem.menuTitle}
                </h4>
                <div className="menu-section__name-container">
                  <p className="menu-section__chef-name">{menuItem.menuChef}</p>
                  <button
                    className="menu-section__delete-btn"
                    onClick={() => handleDelete(index)}
                  ></button>
                </div>
              </div>
            ))}
          </div>
        )}
        <div className="menu-section__submit">
          <button
            className="menu-section__button menu-section_button_action_clear"
            onClick={handleClearMenu}
          >
            Clear
          </button>
        </div>
      </div>
    </div>
  );
}
export default MenuSection;
