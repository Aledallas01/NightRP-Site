import React, { useState } from 'react';
import Modal from './Modal';
import { useContext } from 'react';
import { CartContext } from '../contexts/CartContext';

export default function ProductCard({ product }) {
  const { addToCart } = useContext(CartContext);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div
        onClick={() => setIsOpen(true)}
        className="bg-gray-800 rounded-lg overflow-hidden shadow-lg cursor-pointer hover:shadow-2xl transition"
      >
        <div className="p-4">
          <h3 className="text-xl text-purple-300">{product.name}</h3>
          <p className="mt-2 text-white">€{product.price}</p>
          <button
            onClick={e => { e.stopPropagation(); addToCart(product); }}
            className="mt-4 bg-purple-600 hover:bg-purple-700 text-white px-3 py-1 rounded"
          >
            Aggiungi
          </button>
        </div>
      </div>

      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <h2 className="mt-4 text-2xl text-purple-300">{product.name}</h2>
        <p className="mt-2 text-gray-300">{product.description}</p>
        <p className="mt-2 text-white font-bold">€{product.price}</p>
        <button
          onClick={() => { addToCart(product); }}
          className="mt-4 bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded"
        >
          Aggiungi al carrello
        </button>
      </Modal>
    </>
  );
}
