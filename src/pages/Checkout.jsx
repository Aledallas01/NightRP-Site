// src/pages/Checkout.jsx
import React from 'react';
import CheckoutForm from '../components/CheckoutForm';

export default function Checkout() {
  return (
    <main className="p-8 bg-gray-900 text-white min-h-screen">
      <h1 className="text-3xl mb-6">Checkout</h1>
      <CheckoutForm />
    </main>
  );
}
