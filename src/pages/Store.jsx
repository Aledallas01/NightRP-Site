import React, { useEffect, useState, useContext } from 'react';
import ProductCard from './Store/ProductCard';
import CartContext from '../contexts/CartContext';

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
    <>
    <head>
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Store - NightRP Minecraft Server</title>
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
      />
      <link rel="stylesheet" href="/CSS/style.css" />
    </head>

    <div id="header-placeholder" />

    <main className="p-8 bg-gray-900 text-white min-h-screen">
      <h1>Il nostro Store</h1>
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

    <div id="footer-placeholder" />
    </>
  );
}
