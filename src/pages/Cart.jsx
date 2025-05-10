// src/pages/Cart.jsx
import React from 'react';
import { useCart } from '../contexts/CartContext';
import { loadStripe } from '@stripe/stripe-js';
import { PayPalButton } from 'react-paypal-button-v2';

export default function Cart() {
  const { cartItems, removeFromCart, clearCart } = useCart();

  const total = cartItems.reduce((sum, p) => sum + parseFloat(p.price), 0).toFixed(2);

  const handleStripeCheckout = async () => {
    const stripe = await loadStripe(import.meta.env.VITE_STRIPE_KEY);
    // Qui chiameresti la tua API per creare una sessione di Checkout
    const { sessionId } = await fetch('/api/create-stripe-session', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ items: cartItems }),
    }).then(res => res.json());
    await stripe.redirectToCheckout({ sessionId });
  };

  return (
    <>
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Carrello – NightRP Minecraft Server</title>
      </head>

      <div id="header-placeholder" />

      <main className="p-8 bg-gray-900 text-white min-h-screen">
        <h1 className="text-3xl font-bold mb-6">Il tuo Carrello</h1>

        {cartItems.length === 0 ? (
          <p>Il carrello è vuoto.</p>
        ) : (
          <>
            <ul className="space-y-4">
              {cartItems.map((p, idx) => (
                <li key={`${p.id}-${idx}`} className="flex items-center justify-between bg-gray-800 p-4 rounded">
                  <div className="flex items-center gap-4">
                    <img src={p.image} alt={p.name} className="w-16 h-16 object-cover rounded" />
                    <div>
                      <h2 className="font-semibold">{p.name}</h2>
                      <p className="text-indigo-300">{p.price}€</p>
                    </div>
                  </div>
                  <button
                    className="text-red-500 hover:text-red-400"
                    onClick={() => removeFromCart(p.id)}
                  >
                    Rimuovi
                  </button>
                </li>
              ))}
            </ul>

            <div className="mt-8">
              <p className="text-xl mb-4">Totale: <span className="font-semibold">{total}€</span></p>

              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  className="bg-indigo-600 hover:bg-indigo-500 px-6 py-2 rounded text-white"
                  onClick={handleStripeCheckout}
                >
                  Paga con Stripe
                </button>

                <PayPalButton
                  amount={total}
                  currency="EUR"
                  onSuccess={(details, data) => {
                    // qui potresti registrare l'ordine
                    clearCart();
                    window.location.href = '/order-confirmation';
                  }}
                  options={{
                    clientId: import.meta.env.VITE_PAYPAL_CLIENT_ID,
                  }}
                />

                <button
                  className="bg-gray-600 hover:bg-gray-500 px-6 py-2 rounded text-white"
                  onClick={clearCart}
                >
                  Svuota Carrello
                </button>
              </div>
            </div>
          </>
        )}
      </main>

      <div id="footer-placeholder" />
    </>
  );
}
