// src/pages/Store.jsx
import React from 'react';
import products from '../data/products.json';
import ProductCard from '../components/ProductCard';
import { Link } from 'react-router-dom';

export default function Store() {
  // estrai categorie uniche
  const categories = Array.from(new Set(products.map(p => p.category)));

  return (
    <>
      <head>
        <title>Store - NightRP</title>
      </head>
      <main className="p-8 bg-gray-900 text-white min-h-screen">
        <h1 className="text-3xl mb-6">Store</h1>
        {categories.map(category => (
          <section key={category} className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">{category}</h2>
            <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
              {products
                .filter(p => p.category === category)
                .map(prod => <ProductCard key={prod.id} product={prod} />)}
            </div>
          </section>
        ))}
        <Link to="/cart" className="fixed bottom-6 right-6 bg-indigo-600 text-white p-4 rounded-full shadow-lg">
          🛒
        </Link>
      </main>
    </>
  );
}
