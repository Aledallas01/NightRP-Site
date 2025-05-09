import React, { useEffect, useState, useContext } from 'react';
import ProductCard from './Store/ProductCard';
import CartContext from '../../contexts/CartContext';

export default function Store() {
  const [products, setProducts] = useState([]);
  const { addToCart } = useContext(CartContext);

  useEffect(() => {
    // Carica products.json
    fetch('/data/products.json')
      .then(res => res.json())
      .then(setProducts)
      .catch(console.error);
  }, []);

  return (
    <main className="p-8 bg-gray-900 text-white min-h-screen">
      <h1 className="text-4xl mb-6">Il nostro Store</h1>
      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {products.map(prod => (
          <ProductCard
            key={prod.id}
            product={prod}
            onAdd={() => addToCart(prod)}
          />
        ))}
      </div>
    </main>
  );
}
