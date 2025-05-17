// src/components/ProductCard.jsx
import React, { useState, useContext } from 'react';
import Modal from './Modal';
import { CartContext } from '../contexts/CartContext';

export default function ProductCard({ product }) {
  const { addToCart } = useContext(CartContext);
  const [open, setOpen] = useState(false);

  // Risolve dinamicamente l’URL dell’immagine in src/assets/images
  const imageUrl = new URL(
    `../assets/images/${product.image}`,
    import.meta.url
  ).href;

  const [AddButtonText, setAddButtonText] = useState("Aggiungi");

  const Aggiunto = () => {
    setAddButtonText("Aggiunto al Carrello!");
    setTimeout(() => setAddButtonText("Aggiungi"), 3000);
  };

  return (
    <>
      {/* CARD */}
      <div
        className="product-card"
        onClick={() => setOpen(true)}
        role="button"
        tabIndex={0}
        onKeyPress={() => setOpen(true)}
      >
        {/* IMMAGINE */}
        <div
          className="product-image"
          style={{ backgroundImage: `url(${imageUrl})` }}
          aria-label={product.name}
        />

        {/* INFORMAZIONI */}
        <div className="product-info">
          <div>
            <h3 className="product-name">{product.name}</h3>
            <p className="product-price">€ {product.price.toFixed(2)}</p>
          </div>
          <button
            className="add-btn"
            onClick={e => {
              e.stopPropagation();
              addToCart(product);
              Aggiunto()
            }}
          >
            <i/> {AddButtonText}
          </button>
        </div>
      </div>

      {/* MODAL */}
      {open && (
        <Modal onClose={() => setOpen(false)}>
          <div className="modal-content">
            <img
              src={imageUrl}
              alt={product.name}
              className="modal-img"
            />
            <h2 className="modal-title">{product.name}</h2>
            <p className="modal-desc">{product.description}</p>
            <p className="modal-price">€ {product.price.toFixed(2)}</p>
            <button
              className="add-btn modal-add"
              onClick={() => {
                addToCart(product);
                setOpen(false);
              }}
            >
              Aggiungi al carrello
            </button>
          </div>
        </Modal>
      )}
    </>
  );
}
