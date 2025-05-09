import React, { useEffect, useState } from 'react';
import ProductCard from '../components/ProductCard';

export default function Store() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('/data/products.json')
      .then(res => res.json())
      .then(setProducts)
      .catch(console.error);
  }, []);

  // Raggruppa per categoria
  const byCategory = products.reduce((acc, p) => {
    acc[p.category] = acc[p.category] || [];
    acc[p.category].push(p);
    return acc;
  }, {});

  return (
    <main className="p-8 bg-gray-900 text-white min-h-screen">
      <h1 className="text-4xl text-center text-purple-300 mb-8">Il nostro Store</h1>
      {Object.entries(byCategory).map(([cat, items]) => (
        <section key={cat} className="mb-12">
          <h2 className="text-2xl text-purple-200 mb-4">{cat}</h2>
          <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            {items.map(prod => (
              <ProductCard key={prod.id} product={prod} />
            ))}
          </div>
        </section>
      ))}
    </main>
  );
}
