import React from 'react';

export default function Modal({ isOpen, onClose, children }) {
  {isOpen && (
    <div className="modal-backdrop" onClick={closeModal}>
      <div className="modal-content" onClick={e => e.stopPropagation()}>
        <button className="modal-close" onClick={closeModal}>×</button>
        {/* Dettagli prodotto qui */}
      </div>
    </div>
  )}
}
