// src/components/ProductCard.jsx
import React, { useState, useContext } from 'react';
import Modal from './Modal';
import CheckoutForm from './CheckoutForm';
import CartContext from '../contexts/CartContext';

export default function ProductCard({ product }) {
  const { addItem } = useContext(CartContext);
  const [open, setOpen] = useState(false);

  return (
    <>
      <div
        className="bg-gray-800 p-4 rounded-lg shadow hover:shadow-lg cursor-pointer"
        onClick={() => setOpen(true)}
      >
        <img src={product.image} alt={product.name} className="w-full h-40 object-cover rounded" />
        <h3 className="mt-2 text-lg font-medium">{product.name}</h3>
        <p className="mt-1 text-indigo-400 font-semibold">€{product.price.toFixed(2)}</p>
        <div className="hero-buttons"> 
          <button
            onClick={e => { e.stopPropagation(); addItem(product); }}
            className="mt-3 w-full bg-indigo-600 hover:bg-indigo-700 text-white py-1 rounded"
          >
            Aggiungi al carrello
          </button>
        </div>
      </div>

      <Modal isOpen={open} onClose={() => setOpen(false)}>
        <img src={product.image} alt={product.name} className="w-full h-48 object-cover rounded" />
        <h2 className="mt-4 text-2xl">{product.name}</h2>
        <p className="mt-2 text-gray-300">{product.description}</p>
        <p className="mt-2 text-indigo-400 font-semibold">€{product.price.toFixed(2)}</p>
        <div className="hero-buttons">
          <button
            onClick={() => { addItem(product); setOpen(false); }}
            className="mt-4 w-full bg-indigo-600 hover:bg-indigo-700 text-white py-2 rounded"
          >
            Aggiungi al carrello
          </button>
        </div>
      </Modal>
    </>
  );
}
