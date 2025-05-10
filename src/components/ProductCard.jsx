// src/components/ProductCard.jsx

import React, { useState } from 'react';
import Modal from './Modal';
import { useCart } from '../contexts/CartContext';

export default function ProductCard({ product }) {
  const { addToCart } = useCart();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const handleAdd = () => {
    addToCart(product);
    closeModal();
  };

  return (
    <>
      {/* Card */}
      <div
        className="border border-gray-700 rounded-lg p-4 bg-[#1c1c2e] hover:shadow-lg transition-shadow cursor-pointer flex flex-col items-center"
        onClick={openModal}
      >
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-40 object-cover rounded-md mb-4"
        />
        <h3 className="text-xl font-semibold text-[#d9b3ff] mb-2">
          {product.name}
        </h3>
        <p className="text-lg text-[#aaa] mb-4">{product.price} €</p>
        <button
          className="mt-auto px-4 py-2 bg-[#6a0dad] hover:bg-[#8a2be2] text-white rounded-md transition"
          onClick={(e) => {
            e.stopPropagation();
            openModal();
          }}
        >
          Dettagli
        </button>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <Modal onClose={closeModal}>
          <div className="bg-[#1c1c2e] rounded-lg overflow-hidden max-w-md w-full">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h2 className="text-2xl font-bold text-[#d9b3ff] mb-4">
                {product.name}
              </h2>
              <p className="text-[#ddd] mb-6">{product.description}</p>
              <div className="flex items-center justify-between">
                <span className="text-xl font-semibold text-white">
                  {product.price} €
                </span>
                <button
                  className="px-4 py-2 bg-[#6a0dad] hover:bg-[#8a2be2] text-white rounded-md transition"
                  onClick={handleAdd}
                >
                  Aggiungi al carrello
                </button>
              </div>
            </div>
          </div>
        </Modal>
      )}
    </>
  );
}
