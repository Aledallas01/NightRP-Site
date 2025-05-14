// src/components/ProductCard.jsx
import React, { useState } from 'react';
import Modal from './Modal';

export default function ProductCard({ product }) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div
        className="product-card"
        onClick={() => setOpen(true)}
        role="button"
        tabIndex={0}
        onKeyPress={() => setOpen(true)}
      >
        <div
          className="product-image"
          style={{ backgroundImage: `url(${product.image})` }}
          aria-label={product.name}
        />
        <div className="product-info">
          <h3 className="product-name">{product.name}</h3>
          <p className="product-price">€ {product.price}</p>
          <button
            className="add-btn"
            onClick={e => { e.stopPropagation(); addItem(product);
            }}
          >
            Aggiungi
          </button>
        </div>
      </div>

      {open && (
        <Modal onClose={() => setOpen(false)}>
          <div className="modal-content">
            <img src={product.image} alt={product.name} className="modal-img" />
            <h2>{product.name}</h2>
            <p className="modal-desc">{product.description}</p>
            <p className="modal-price">€ {product.price}</p>
            <button
              className="add-btn modal-add"
              onClick={() => { addItem(product); setOpen(false);
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
