import React, { useState } from 'react';
import Modal from './Modal';
import { useCart } from '../contexts/CartContext';

export default function ProductCard({ product }) {
  const { addToCart } = useCart();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div
        className="border rounded-lg p-4 bg-gray-800 hover:bg-gray-700 cursor-pointer"
        onClick={() => setIsOpen(true)}
      >
        <img src={product.image} alt={product.name} className="w-full h-32 object-cover mb-2 rounded" />
        <h3 className="text-lg font-semibold text-white">{product.name}</h3>
        <p className="text-indigo-300 mt-1">{product.price}€</p>
        <button
          className="mt-3 w-full bg-indigo-600 hover:bg-indigo-500 text-white py-1 rounded"
          onClick={(e) => {
            e.stopPropagation();
            addToCart(product);
          }}
        >
          Aggiungi
        </button>
      </div>

      {isOpen && (
        <Modal onClose={() => setIsOpen(false)}>
          <img src={product.image} alt={product.name} className="w-full h-48 object-cover rounded mb-4" />
          <h2 className="text-2xl font-bold mb-2">{product.name}</h2>
          <p className="mb-4">{product.description}</p>
          <p className="font-semibold mb-4">{product.price}€</p>
          <button
            className="bg-indigo-600 hover:bg-indigo-500 text-white px-4 py-2 rounded"
            onClick={() => {
              addToCart(product);
              setIsOpen(false);
            }}
          >
            Aggiungi al carrello
          </button>
        </Modal>
      )}
    </>
  );
}
