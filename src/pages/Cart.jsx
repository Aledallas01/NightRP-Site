import React, { useContext } from 'react';
import { CartContext } from '../contexts/CartContext';
import { Link } from 'react-router-dom';

export default function Cart() {
  const { cartItems, removeFromCart, clearCart } = useContext(CartContext);
  const total = cartItems.reduce((sum, i) => sum + i.quantity * parseFloat(i.price), 0).toFixed(2);

  if (!cartItems.length) {
    return <p className="text-center mt-20 text-gray-300">Il carrello è vuoto.</p>;
  }

  return (
    <main className="p-8 bg-gray-900 text-white min-h-screen">
      <h1 className="text-3xl text-purple-300 mb-6">Il tuo Carrello</h1>
      <ul className="space-y-4">
        {cartItems.map(item => (
          <li key={item.id} className="flex justify-between items-center bg-gray-800 p-4 rounded">
            <div>
              <h3 className="text-xl text-white">{item.name} × {item.quantity}</h3>
              <p className="text-gray-400">€{(item.quantity * parseFloat(item.price)).toFixed(2)}</p>
            </div>
            <button
              onClick={() => removeFromCart(item.id)}
              className="text-red-500 hover:text-red-700"
            >
              Rimuovi
            </button>
          </li>
        ))}
      </ul>
      <div className="mt-8 flex justify-between items-center">
        <p className="text-2xl">Totale: €{total}</p>
        <div className="space-x-4">
          <button
            onClick={clearCart}
            className="bg-red-600 hover:bg-red-700 px-4 py-2 rounded"
          >
            Svuota Carrello
          </button>
          <Link
            to="/checkout"
            className="bg-green-600 hover:bg-green-700 px-4 py-2 rounded text-white"
          >
            Completa l’acquisto
          </Link>
        </div>
      </div>
    </main>
  );
}
