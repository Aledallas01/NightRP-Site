import React from 'react';
import { useLocation, Link } from 'react-router-dom';

export default function OrderConfirmation() {
  const { state } = useLocation();
  if (!state) return <p className="text-center mt-20">Nessun ordine trovato.</p>;

  const { email, method, items } = state;
  const total = items.reduce((sum, i) => sum + i.quantity * parseFloat(i.price), 0).toFixed(2);

  return (
    <main className="p-8 bg-gray-900 text-white min-h-screen text-center">
      <h1 className="text-4xl text-purple-300 mb-4">Grazie per il tuo acquisto!</h1>
      <p className="mb-2">Email: {email}</p>
      <p className="mb-2">Metodo: {method}</p>
      <p className="mb-4 font-bold">Totale pagato: €{total}</p>
      <Link to="/" className="text-purple-400 hover:underline">
        Torna alla Home
      </Link>
    </main>
  );
}
