import React from 'react';
import { useLocation, Link } from 'react-router-dom';

export default function OrderConfirmation() {
  const { state } = useLocation();
  const { order } = state || {};

  if (!order) {
    return (
      <main className="p-8 bg-gray-900 text-white min-h-screen">
        <p>Ordine non trovato.</p>
        <Link to="/store" className="text-purple-400">Torna allo Store</Link>
      </main>
    );
  }

  return (
    <main className="p-8 bg-gray-900 text-white min-h-screen">
      <h1 className="text-4xl mb-4">Grazie per il tuo acquisto!</h1>
      <p className="mb-2">ID Ordine: <strong>{order.id}</strong></p>
      <p className="mb-4">Username Minecraft: <strong>{order.username}</strong></p>
      <p className="mb-6">Riceverai presto una mail di conferma a <strong>{order.email}</strong>.</p>
      <Link to="/" className="bg-purple-600 hover:bg-purple-700 px-4 py-2 rounded">
        Torna alla Home
      </Link>
    </main>
  );
}
