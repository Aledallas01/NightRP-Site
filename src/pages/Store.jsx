// src/pages/Store.jsx

import React, { useState, useEffect, useContext } from 'react';
import { CartContext } from '../contexts/CartContext';
import ProductCard from '../components/ProductCard';

export default function Store() {
  const [products, setProducts] = useState([]);
  const { addToCart } = useContext(CartContext);

  // raggruppa i prodotti per categoria
  const productsByCategory = products.reduce((acc, prod) => {
    const cat = prod.category || 'Senza categoria';
    if (!acc[cat]) acc[cat] = [];
    acc[cat].push(prod);
    return acc;
  }, {});

  useEffect(() => {
    fetch('/data/products.json')
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((err) => console.error('Errore caricamento prodotti:', err));
  }, []);

  return (
    <>
      <main className="min-h-screen bg-gray-900 text-white p-8">
        <h1 className="text-4xl font-bold mb-8">Il nostro Store</h1>

        {products.length === 0 ? (
          <p className="text-lg">Caricamento prodotti...</p>
        ) : (
          Object.entries(productsByCategory).map(([category, items]) => (
            <section key={category} className="mb-12">
              <h2 className="text-2xl font-semibold mb-4">{category}</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {items.map((prod) => (
                  <ProductCard
                    key={prod.id}
                    product={prod}
                    onAdd={() => addToCart(prod)}
                  />
                ))}
              </div>
            </section>
          ))
        )}
      </main>
    </>
  );
}
