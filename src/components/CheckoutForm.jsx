import React, { useState, useContext } from 'react';
import { CartContext } from '../contexts/CartContext';
import { useNavigate } from 'react-router-dom';

export default function CheckoutForm() {
  const { cartItems, clearCart } = useContext(CartContext);
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [method, setMethod] = useState('paypal');

  const handleSubmit = e => {
    e.preventDefault();
    // qui si integrerebbe PayPal/Stripe...
    clearCart();
    navigate('/order-confirmation', { state: { email, method, items: cartItems } });
  };

  return (
    <main className="p-8 bg-gray-900 text-white min-h-screen">
      <h1 className="text-3xl text-purple-300 mb-6">Checkout</h1>
      <form onSubmit={handleSubmit} className="space-y-4 max-w-md mx-auto">
        <div>
          <label className="block mb-1">Email</label>
          <input
            type="email"
            required
            value={email}
            onChange={e => setEmail(e.target.value)}
            className="w-full p-2 rounded bg-gray-800"
          />
        </div>
        <div>
          <label className="block mb-1">Metodo di Pagamento</label>
          <select
            value={method}
            onChange={e => setMethod(e.target.value)}
            className="w-full p-2 rounded bg-gray-800"
          >
            <option value="paypal">PayPal</option>
            <option value="card">Carta di Credito</option>
          </select>
        </div>
        <button
          type="submit"
          className="w-full bg-green-600 hover:bg-green-700 py-2 rounded"
        >
          Paga Ora
        </button>
      </form>
    </main>
  );
}
