import React, { useContext } from 'react';
import { CartContext } from '../contexts/CartContext';
import CheckoutForm from '../components/CheckoutForm';

export default function Cart() {
  const { items, clearCart } = useContext(CartContext);
  const total = items.reduce((sum, i) => sum + i.qty * parseFloat(i.price) * 100, 0);

  return (
    <main className="p-8 bg-gray-900 text-white min-h-screen space-y-6">
      <h1 className="text-3xl font-bold">Carrello</h1>
      {items.length === 0 ? (
        <p>Il carrello è vuoto.</p>
      ) : (
        <>
          <ul className="space-y-4">
            {items.map((i) => (
              <li key={i.id} className="flex justify-between">
                <span>{i.name} x{i.qty}</span>
                <span>€{(i.qty * parseFloat(i.price)).toFixed(2)}</span>
              </li>
            ))}
          </ul>
          <h2 className="text-xl">Totale: €{(total / 100).toFixed(2)}</h2>
          <CheckoutForm amount={total} onSuccess={clearCart} />
        </>
      )}
    </main>
  );
}
