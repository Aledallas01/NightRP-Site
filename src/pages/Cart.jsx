// src/pages/Cart.jsx
import React, { useContext } from 'react';
import { CartContext } from '../contexts/CartContext';
import { Link } from 'react-router-dom';

export default function Cart() {
  const { cart, removeItem, clearCart } = useContext(CartContext);
  const total = cart.reduce((sum, i) => sum + i.price * i.quantity, 0);

  if (cart.length === 0) {
    return (
      <main className="p-8 bg-gray-900 text-white min-h-screen">
        <h1 className="text-2xl">Il carrello è vuoto</h1>
        <Link to="/store" className="mt-4 inline-block text-indigo-400 hover:underline">
          Torna allo Store
        </Link>
      </main>
    );
  }

  return (
    <main className="p-8 bg-gray-900 text-white min-h-screen">
      <h1 className="text-3xl mb-6">Carrello</h1>
      <ul className="space-y-4">
        {cart.map(item => (
          <li key={item.id} className="flex justify-between items-center bg-gray-800 p-4 rounded">
            <div>
              <h2 className="text-xl">{item.name}</h2>
              <p>Quantità: {item.quantity}</p>
            </div>
            <div className="text-right">
              <p>€{(item.price * item.quantity).toFixed(2)}</p>
              <button
                onClick={() => removeItem(item.id)}
                className="text-red-500 hover:underline"
              >Rimuovi</button>
            </div>
          </li>
        ))}
      </ul>
      <div className="mt-6 space-x-4">
        <button
          onClick={clearCart}
          className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded"
        >Svuota carrello</button>
        <Link to="/checkout"
          className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded"
        >Completa l'acquisto (€{total.toFixed(2)})</Link>
      </div>
    </main>
  );
}
