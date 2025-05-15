// src/pages/Checkout.jsx
import React from 'react';
import CheckoutForm from '../components/CheckoutForm';

export default function Checkout() {
  return (
    <main className="p-8 bg-gray-900 text-white min-h-screen">
    <section className="hero" id="games-hero">
      <h1>
        <i className="fas fa-shopping-cart" /> Checkout
      </h1>
    </section>
      <CheckoutForm />
    </main>
  );
}
