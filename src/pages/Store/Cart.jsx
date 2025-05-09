import React, { useContext } from 'react';
import CartContext from '../../contexts/CartContext';
import { Link } from 'react-router-dom';

export default function Cart() {
  const { cart, removeFromCart, clearCart } = useContext(CartContext);
  const total = cart.reduce((sum, item) => sum + item.prezzo * item.quantity, 0);

  return (
    <main className="p-8 bg-gray-900 text-white min-h-screen">
      <h1 className="text-4xl mb-6">Il tuo Carrello</h1>
      {cart.length === 0 ? (
        <p>Il carrello è vuoto. <Link to="/store" className="text-purple-400">Torna allo Store</Link></p>
      ) : (
        <>
          <ul className="space-y-4">
            {cart.map(item => (
              <li key={item.id} className="flex justify-between bg-gray-800 p-4 rounded">
                <div>
                  <h2 className="text-2xl">{item.nome}</h2>
                  <p>Quantità: {item.quantity}</p>
                </div>
                <div className="flex flex-col items-end">
                  <span>€ {(item.prezzo * item.quantity).toFixed(2)}</span>
                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="text-red-500 mt-2"
                  >
                    Rimuovi
                  </button>
                </div>
              </li>
            ))}
          </ul>
          <div className="mt-6 flex justify-between items-center">
            <span className="text-2xl">Totale: € {total.toFixed(2)}</span>
            <div className="space-x-4">
              <button
                onClick={clearCart}
                className="bg-red-600 hover:bg-red-700 px-4 py-2 rounded"
              >
                Svuota Carrello
              </button>
              <Link
                to="/store/checkout"
                className="bg-green-600 hover:bg-green-700 px-4 py-2 rounded"
              >
                Vai al Checkout
              </Link>
            </div>
          </div>
        </>
      )}
    </main>
  );
}
