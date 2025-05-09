import React, { useState, useContext } from 'react';
import CartContext from '../../contexts/CartContext';
import { useNavigate } from 'react-router-dom';

export default function CheckoutForm() {
  const { cart, clearCart } = useContext(CartContext);
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Costruisci payload
    const order = {
      id: Date.now().toString(),
      username,
      email,
      items: cart,
      date: new Date().toISOString(),
    };
    // Simula chiamata a backend che invoca LuckPerms
    await fetch('/api/assign-ranks', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(order),
    });
    clearCart();
    navigate('/store/confirmation', { state: { order } });
  };

  return (
    <main className="p-8 bg-gray-900 text-white min-h-screen">
      <h1 className="text-4xl mb-6">Checkout</h1>
      <form onSubmit={handleSubmit} className="space-y-4 max-w-md">
        <div>
          <label className="block mb-1">Username Minecraft</label>
          <input
            type="text"
            required
            value={username}
            onChange={e => setUsername(e.target.value)}
            className="w-full p-2 rounded bg-gray-800"
          />
        </div>
        <div>
          <label className="block mb-1">Email (conferma acquisto)</label>
          <input
            type="email"
            required
            value={email}
            onChange={e => setEmail(e.target.value)}
            className="w-full p-2 rounded bg-gray-800"
          />
        </div>
        {/* Qui potrai integrare Stripe o PayPal in futuro */}
        <button
          type="submit"
          className="bg-green-600 hover:bg-green-700 px-6 py-3 rounded"
        >
          Paga € {cart.reduce((sum, i) => sum + i.prezzo * i.quantity, 0).toFixed(2)}
        </button>
      </form>
    </main>
  );
}
