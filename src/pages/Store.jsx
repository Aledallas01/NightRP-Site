import React, { useEffect, useState, useContext } from 'react';
import ProductCard from '../components/ProductCard';
import { CartContext } from '../contexts/CartContext';

export default function Store() {
  const [products, setProducts] = useState([]);
  const { items } = useContext(CartContext);

  // carica i prodotti
  useEffect(() => {
    fetch('/src/pages/data/products.json')
      .then((res) => res.json())
      .then(setProducts)
      .catch(console.error);
  }, []);

  const categories = Array.from(new Set(products.map((p) => p.category)));

  return (
    <main className="p-8 bg-gray-900 text-white min-h-screen space-y-12">
      <h1 className="text-3xl font-bold">Il nostro Store</h1>
      {categories.map((cat) => (
        <section key={cat}>
          <h2 className="text-2xl font-semibold mb-4">{cat}</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {products
              .filter((p) => p.category === cat)
              .map((prod) => (
                <ProductCard key={prod.id} product={prod} />
              ))}
          </div>
        </section>
      ))}
    </main>
  );
}
