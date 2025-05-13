// src/pages/OrderConfirmation.jsx
import React from 'react';
import { useLocation, Link } from 'react-router-dom';

export default function OrderConfirmation() {
  const { state } = useLocation();
  if (!state) {
    return <Link to="/store" className="text-indigo-400">Torna allo Store</Link>;
  }
  const { total, method, date } = state;
  return (
    <main className="p-8 bg-gray-900 text-white min-h-screen">
      <h1 className="text-3xl mb-4">Grazie per il tuo acquisto!</h1>
      <p>Metodo di pagamento: <strong>{method}</strong></p>
      <p>Importo totale: <strong>€{total.toFixed(2)}</strong></p>
      <p>Data ordine: <strong>{new Date(date).toLocaleString()}</strong></p>
      <Link to="/" className="mt-6 inline-block bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded">
        Torna alla Home
      </Link>
    </main>
  );
}
