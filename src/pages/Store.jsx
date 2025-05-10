import React, { useState, useEffect } from 'react';
import ProductCard from '../components/ProductCard';
import { useCart } from '../contexts/CartContext';

export default function Store() {
  const [products, setProducts] = useState([]);
  const { cartItems } = useCart();

  useEffect(() => {
    fetch('/data/products.json')
      .then((res) => res.json())
      .then(setProducts)
      .catch(console.error);
  }, []);

  // Estrai le categorie uniche
  const categories = Array.from(new Set(products.map((p) => p.category)));

  return (
    <>
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Store – NightRP Minecraft Server</title>
      </head>

      <div id="header-placeholder" />

      <main className="p-8 bg-gray-900 text-white min-h-screen">
        <h1 className="text-3xl font-bold mb-6">Il nostro Store</h1>
        <p className="mb-4">
          Prodotti nel carrello: <span className="font-semibold">{cartItems.length}</span>
        </p>

        {categories.map((cat) => (
          <section key={cat} className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">{cat}</h2>
            <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
              {products
                .filter((p) => p.category === cat)
                .map((prod) => (
                  <ProductCard key={prod.id} product={prod} />
                ))}
            </div>
          </section>
        ))}
      </main>

      <div id="footer-placeholder" />
    </>
  );
}
