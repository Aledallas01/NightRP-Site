import React from 'react';
import { useLocation, Link } from 'react-router-dom';

export default function OrderConfirmation() {
  const { state } = useLocation();
  if (!state) {
    return (
      <div className="order-confirmation-wrapper">
        <Link to="/store" className="order-confirmation-card">
          Torna allo Store
        </Link>
      </div>
    );
  }
  const { total, method, date } = state;

  return (
    <div className="order-confirmation-wrapper">
      <div className="order-confirmation-card">
        <h1>Grazie per il tuo acquisto!</h1>
        <p>Metodo di pagamento: <strong>{method}</strong></p>
        <p>Importo totale: <strong>€{total.toFixed(2)}</strong></p>
        <p>Data ordine: <strong>{new Date(date).toLocaleString()}</strong></p>
        <Link to="/" className="">
          Torna alla Home
        </Link>
      </div>
    </div>
  );
}
