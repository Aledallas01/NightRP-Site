import React, { useState, useContext } from 'react';
import Modal from './Modal';
import { CartContext } from '../contexts/CartContext';

export default function ProductCard({ product }) {
  const { addToCart } = useContext(CartContext);
  const [open, setOpen] = useState(false);

  return (
    <>
      <div
        className="border rounded shadow p-4 cursor-pointer hover:shadow-lg"
        onClick={() => setOpen(true)}
      >
        <img src={product.image} alt={product.name} className="w-full h-48 object-cover mb-2" />
        <h3 className="font-semibold text-lg">{product.name}</h3>
        <p className="text-purple-300">€{product.price}</p>
        <button
          className="mt-2 btn w-full"
          onClick={(e) => { e.stopPropagation(); addToCart(product); }}
        >
          Aggiungi al carrello
        </button>
      </div>

      {open && (
        <Modal onClose={() => setOpen(false)}>
          <img src={product.image} alt={product.name} className="w-full h-64 object-cover mb-4" />
          <h2 className="text-2xl font-bold mb-2">{product.name}</h2>
          <p className="mb-4">{product.description}</p>
          <button
            className="btn"
            onClick={() => { addToCart(product); setOpen(false); }}
          >
            Aggiungi al carrello
          </button>
        </Modal>
      )}
    </>
  );
}
