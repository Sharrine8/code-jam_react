import { useEffect, useState } from "react";
import "../blocks/MenuSection.css";

function MenuSection() {
  const [menu, setMenu] = useState([]);
  const [menuDetails, setMenuDetails] = useState({ title: "", name: "" });
  // track which item list being edit
  const [editingIndex, setEditingIndex] = useState(null);
  // update the editing state
  const [isEditing, setIsEditing] = useState({ title: "", name: "" });

  const handleEdit = (index) => {
    setEditingIndex(index);
    setIsEditing({ title: menu[index].title, name: menu[index].name });
  };
  const handleEditChange = (e) => {
    const { name, value } = e.target;
    setIsEditing({
      ...isEditing,
      [name]: value,
    });
  };
  const handleSave = (index) => {
    if (
      isEditing.title !== menu[index].title ||
      isEditing.name !== menu[index].name
    ) {
      const updateEditMenu = [...menu];
      updateEditMenu[index] = { ...isEditing };
      setMenu(updateEditMenu);
      sessionStorage.setItem("menu", JSON.stringify(updateEditMenu));
    }
    setEditingIndex(null);
    setIsEditing({ title: "", name: "" });
  };

  useEffect(() => {
    const savedData = sessionStorage.getItem("menu");
    if (savedData) {
      setMenu(JSON.parse(savedData));
    }
  }, []);

  const handleAddMenu = (e) => {
    e.preventDefault();

    if (menuDetails) {
      const updatedMenu = [
        ...menu,
        { title: menuDetails.title, name: menuDetails.name },
      ];
      setMenu(updatedMenu);
      sessionStorage.setItem("menu", JSON.stringify(updatedMenu));
      setMenuDetails({ title: "", name: "" });
    }
  };
  const handleMenuChange = (e) => {
    const { name, value } = e.target;
    setMenuDetails({
      ...menuDetails,
      [name]: value,
    });
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
            name="title"
            className="menu-section__input menu-section__input_type_name"
            value={menuDetails.title}
            onChange={handleMenuChange}
            placeholder="Enter Dish Name"
            required
          />
          <input
            type="text"
            name="name"
            className="menu-section__input menu-section__input_type_chef"
            value={menuDetails.name}
            onChange={handleMenuChange}
            placeholder="Enter Your Name"
            required
          />
          <button
            className="menu-section__button menu-section__button_action_add"
            onClick={handleAddMenu}
            disabled={
              menuDetails.title.trim() === "" || menuDetails.name.trim() === ""
            }
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
                {editingIndex === index ? (
                  <>
                    <input
                      type="text"
                      className="menu-section__input menu-section__input_type_edit-title "
                      name="title"
                      value={isEditing.title}
                      onChange={handleEditChange}
                    />
                    <input
                      name="name"
                      value={isEditing.name}
                      onChange={handleEditChange}
                      type="text"
                      className="menu-section__input menu-section__input_type_edit-name"
                    />
                    <button
                      className="menu-section__save-button"
                      onClick={() => handleSave(index)}
                      disabled={
                        isEditing.title.trim() === "" ||
                        isEditing.name.trim() === ""
                      }
                    >
                      save
                    </button>
                  </>
                ) : (
                  <>
                    <h4 className="menu-section__menu-name">
                      {menuItem.title}
                    </h4>
                    <div className="menu-section__name-container">
                      <p className="menu-section__chef-name">{menuItem.name}</p>
                      <button
                        className="menu-section__edit-btn"
                        onClick={() => handleEdit(index, menuItem)}
                      >
                        Edit
                      </button>
                      <button
                        className="menu-section__delete-btn"
                        onClick={() => handleDelete(index)}
                      ></button>
                    </div>
                  </>
                )}
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
