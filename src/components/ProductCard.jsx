import React, { useContext } from 'react';
import { CartContext } from '../contexts/CartContext';

export default function ProductCard({ product }) {
  const { addToCart, cart } = useContext(CartContext);
  const inCart = cart.some((p) => p.id === product.id);

  return (
    <div className="border rounded-lg p-4 bg-gray-800 text-white flex flex-col">
      <img src={product.image} alt={product.name} className="h-40 object-cover mb-4 rounded" />
      <h3 className="text-lg font-bold">{product.name}</h3>
      <p className="mt-1 text-gray-300 flex-grow">{product.description}</p>
      <div className="mt-4 flex items-center justify-between">
        <span className="font-semibold">€{product.price.toFixed(2)}</span>
        <button
          onClick={() => addToCart(product)}
          disabled={inCart}
          className={`px-3 py-1 rounded ${inCart ? 'bg-gray-600' : 'bg-purple-600 hover:bg-purple-700'}`}
        >
          {inCart ? 'In Carrello' : 'Aggiungi'}
        </button>
      </div>
    </div>
  );
}
