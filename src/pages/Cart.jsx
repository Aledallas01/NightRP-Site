import React, { useContext } from 'react';
import { CartContext } from '../contexts/CartContext';

export default function Cart() {
  const { cart, removeFromCart, clearCart } = useContext(CartContext);
  const total = cart.reduce((sum, p) => sum + p.price, 0);

  return (
<>
    <main className="p-8 bg-gray-900 text-white min-h-screen">
      <h1 className="text-3xl font-bold mb-6">Carrello</h1>
      {cart.length === 0 ? (
        <p>Il carrello è vuoto.</p>
      ) : (
        <>
          <ul className="space-y-4 mb-6">
            {cart.map((p) => (
              <li key={p.id} className="flex justify-between items-center">
                <span>{p.name} (€{p.price.toFixed(2)})</span>
                <button
                  onClick={() => removeFromCart(p.id)}
                  className="text-red-500 hover:underline"
                >
                  Rimuovi
                </button>
              </li>
            ))}
          </ul>
          <div className="flex justify-between items-center mb-6">
            <span className="font-bold">Totale: €{total.toFixed(2)}</span>
            <button
              onClick={clearCart}
              className="px-4 py-2 bg-red-600 hover:bg-red-700 rounded"
            >
              Svuota Carrello
            </button>
          </div>
          {/* Bottone finto checkout */}
          <button className="px-6 py-3 bg-green-600 hover:bg-green-700 rounded text-lg">
            Vai al Checkout
          </button>
        </>
      )}
    </main>
</>
  );
}
