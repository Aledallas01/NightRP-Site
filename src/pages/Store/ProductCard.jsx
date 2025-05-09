import React from 'react';

export default function ProductCard({ product, onAdd }) {
  return (
    <div className="bg-gray-800 p-4 rounded-lg shadow-lg flex flex-col">
      <img
        src={product.image}
        alt={product.name}
        className="mb-4 rounded-md object-cover h-40 w-full"
      />
      <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
      <p className="text-gray-300 flex-grow">{product.description}</p>
      <div className="mt-4 flex items-center justify-between">
        <span className="text-lg font-bold">${product.price.toFixed(2)}</span>
        <button
          onClick={onAdd}
          className="px-3 py-1 bg-purple-600 hover:bg-purple-700 rounded text-white"
        >
          Aggiungi
        </button>
      </div>
    </div>
  );
}
