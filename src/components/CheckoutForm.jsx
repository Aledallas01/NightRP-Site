import React, { useState, useContext } from 'react';
import { CartContext } from '../contexts/CartContext';
import { useNavigate } from 'react-router-dom';

export default function CheckoutForm() {
  const { cart, clearCart } = useContext(CartContext);
  const navigate = useNavigate();
  const [method, setMethod] = useState('stripe');

  const total = cart.reduce((sum, i) => sum + i.price * i.quantity, 0);

  const handleSubmit = e => {
    e.preventDefault();
    clearCart();
    navigate('/order-confirmation', {
      state: { total, method, date: new Date().toISOString() }
    });
  };

  return (
    <div className="checkout-form-container">
      <h2 className="checkout-form-title">Riepilogo Ordine</h2>
      <p className="checkout-total">Totale: €{total.toFixed(2)}</p>

      <form onSubmit={handleSubmit}>
        <div className="payment-methods">
          <label>
            <input
              type="radio"
              name="pay"
              value="stripe"
              checked={method === 'stripe'}
              onChange={() => setMethod('stripe')}
            />
            Stripe
          </label>
          <label>
            <input
              type="radio"
              name="pay"
              value="paypal"
              checked={method === 'paypal'}
              onChange={() => setMethod('paypal')}
            />
            PayPal
          </label>
          <label>
            <input
              type="radio"
              name="pay"
              value="card"
              checked={method === 'card'}
              onChange={() => setMethod('card')}
            />
            Carta di Credito
          </label>
        </div>

        <button type="submit" className="btn-pay">
          Paga con {method === 'stripe' ? 'Stripe' : method === 'paypal' ? 'PayPal' : 'Carta'}
        </button>
      </form>
    </div>
  );
}
