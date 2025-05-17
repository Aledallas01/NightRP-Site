// src/pages/Cart.jsx
import React, { useContext } from 'react';
import { CartContext } from '../contexts/CartContext';
import { Link } from 'react-router-dom';
import '../index.css';

export default function Cart() {
  const { cart, removeItem, clearCart } = useContext(CartContext);
  const total = cart.reduce((sum, i) => sum + i.price * i.quantity, 0);

  if (cart.length === 0) {
    return (
      <main className="cart-page empty-cart bg-gray-900 text-white min-h-screen p-8">
        <h1 className="text-3xl mb-4">Il carrello è vuoto</h1>
        <Link to="/store" className="btn btn-primary">
          Torna allo Store
        </Link>
      </main>
    );
  }

  return (
    <main className="cart-page bg-gray-900 text-white min-h-screen p-8">
      <section className="hero mb-8">
        <h1 className="text-4xl font-bold mb-2">
          <i className="fas fa-shopping-cart mr-2" /> Carrello
        </h1>
        <p className="text-gray-300">
          Questo è il riepilogo del tuo carrello. Qui trovi tutti gli oggetti che hai aggiunto al tuo ordine.
        </p>
      </section>

      <ul className="cart-list space-y-6">
        {cart.map(item => {
          // Risolve correttamente il path dell'immagine in fase di build
          const imgSrc = new URL(
            `../assets/images/${item.image}`,
            import.meta.url
          ).href;

          return (
            <li key={item.id} className="cart-item flex items-center justify-between bg-gray-800 p-4 rounded-lg shadow">
              <div className="item-info flex items-center gap-4">
                <img src={imgSrc} alt={item.name} className="item-image w-24 h-24 object-cover rounded" />
                <div>
                  <h2 className="item-name text-2xl font-semibold">{item.name}</h2>
                  <p className="item-qty text-gray-400">Quantità: {item.quantity}</p>
                </div>
              </div>
              <div className="item-actions text-right space-y-2">
                <p className="item-subtotal text-xl font-bold">
                  €{(item.price * item.quantity).toFixed(2)}
                </p>
                <button
                  onClick={() => removeItem(item.id)}
                  className="btn btn-remove bg-red-600 hover:bg-red-700 text-white px-3 py-1 rounded"
                >
                  Rimuovi
                </button>
              </div>
            </li>
          );
        })}
      </ul>

      <section className="cart-summary mt-12 flex flex-col md:flex-row items-center justify-between bg-gray-800 p-6 rounded-lg shadow">
        <div className="summary-info text-2xl">
          <span>Totale da pagare:</span>{' '}
          <strong className="font-bold">€{total.toFixed(2)}</strong>
        </div>
        <div className="summary-actions mt-4 md:mt-0 flex gap-4">
          <button
            onClick={clearCart}
            className="btn btn-secondary bg-gray-600 hover:bg-gray-700 text-white px-4 py-2 rounded"
          >
            Svuota carrello
          </button>
          <Link
            to="/checkout"
            className="btn btn-primary bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded"
          >
            Completa acquisto
          </Link>
        </div>
      </section>
    </main>
  );
}
