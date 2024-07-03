import React from 'react';

const Modal = ({ isVisible, onClose, children }) => {
  if (!isVisible) {
    return null;
  }

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button onClick={onClose} className="modal-close-button">Close</button>
        {children}
      </div>
    </div>
  );
};

export default Modal;
