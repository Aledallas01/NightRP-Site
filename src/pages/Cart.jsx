// src/pages/Cart.jsx
import React, { useContext } from 'react';
import { CartContext } from '../contexts/CartContext';
import { Link } from 'react-router-dom';
import '../index.css'; // assicurati che importi il CSS

export default function Cart() {
  const { cart, removeItem, clearCart } = useContext(CartContext);
  const total = cart.reduce((sum, i) => sum + i.price * i.quantity, 0);

  const imageUrl = new URL(
    `../assets/images/${product.image}`,
    import.meta.url
  ).href;

  if (cart.length === 0) {
    return (
      <main className="cart-page empty-cart">
        <h1>Il carrello è vuoto</h1>
        <Link to="/store" className="btn btn-primary">
          Torna allo Store
        </Link>
      </main>
    );
  }

  return (
    <main className="cart-page">
    <section className="hero" id="games-hero">
      <h1>
        <i className="fas fa-shopping-cart" /> Carrello
      </h1>
      <p>Questo è il riepilogo del tuo carrello. Qui trovi tutti gli oggetti che hai aggiunto al tuo ordine</p>
    </section>

      <ul className="cart-list">
        {cart.map(item => (
          <li key={item.id} className="cart-item">
            <div className="item-info">
              <img src={item.image} alt={item.name} className="item-image" />
              <div>
                <h2 className="item-name">{item.name}</h2>
                <p className="item-qty">Quantità: {item.quantity}</p>
              </div>
            </div>
            <div className="item-actions">
              <p className="item-subtotal">€{(item.price * item.quantity).toFixed(2)}</p>
              <button onClick={() => removeItem(item.id)} className="btn btn-remove">
                Rimuovi
              </button>
            </div>
          </li>
        ))}
      </ul>

      <section className="cart-summary">
        <div className="summary-info">
          <span>Totale da pagare:</span>
          <strong>€{total.toFixed(2)}</strong>
        </div>
        <div className="summary-actions">
          <button onClick={clearCart} className="btn btn-secondary">
            Svuota carrello
          </button>
          <Link to="/checkout" className="btn btn-primary">
            Completa acquisto
          </Link>
        </div>
      </section>
    </main>
  );
}
