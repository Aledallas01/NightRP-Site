// src/components/CheckoutForm.jsx
import React, { useState, useContext } from 'react';
import CartContext from '../contexts/CartContext';
import { useNavigate } from 'react-router-dom';

export default function CheckoutForm() {
  const { cart, clearCart } = useContext(CartContext);
  const navigate = useNavigate();
  const [method, setMethod] = useState('stripe');

  const total = cart.reduce((sum, i) => sum + i.price * i.quantity, 0);

  const handleSubmit = e => {
    e.preventDefault();
    // qui integreresti Stripe/PayPal SDK
    // per ora simuliamo:
    clearCart();
    navigate('/order-confirmation', { state: { total, method, date: new Date().toISOString() } });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <h2 className="text-xl font-semibold">Totale: €{total.toFixed(2)}</h2>
      <div>
        <label className="mr-4">
          <input type="radio" name="pay" value="stripe" checked={method==='stripe'}
            onChange={() => setMethod('stripe')} /> Stripe
        </label>
        <label className="mr-4">
          <input type="radio" name="pay" value="paypal" checked={method==='paypal'}
            onChange={() => setMethod('paypal')} /> PayPal
        </label>
        <label>
          <input type="radio" name="pay" value="card" checked={method==='card'}
            onChange={() => setMethod('card')} /> Carta
        </label>
      </div>
      {/* In un’implementazione reale qui caricheresti i componenti SDK */}
      <button type="submit"
        className="w-full bg-green-600 hover:bg-green-700 text-white py-2 rounded">
        Paga con {method === 'stripe' ? 'Stripe' : method==='paypal' ? 'PayPal' : 'Carta'}
      </button>
    </form>
  );
}
