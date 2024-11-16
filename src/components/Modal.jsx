import { useEffect } from "react";
import "../blocks/Modal.css";

export const Modal = ({
  name,
  onClose,
  isOpen,
  children,
  contentClass = "",
}) => {
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener("keydown", handleEscape);
    }
    return () => {
      document.removeEventListener("keydown", handleEscape);
    };
  }, [isOpen, onClose]);

  const handleOverlay = (evt) => {
    if (evt.target === evt.currentTarget) {
      onClose();
    }
  };

  return isOpen ? (
    <div
      className={`modal modal_type_${name} ${isOpen ? "modal_opened" : ""}`}
      onClick={handleOverlay}
    >
      <div className={`modal__content ${contentClass}`}>
        {children}
        <button className="modal__close" type="button" onClick={onClose} />
      </div>
    </div>
  ) : null;
};

export default Modal;
