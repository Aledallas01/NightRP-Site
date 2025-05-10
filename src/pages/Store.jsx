import React from 'react';
import productsData from './data/products.json';
import ProductCard from '../components/ProductCard';
import { useCart } from '../contexts/CartContext';

export default function Store() {
  const { cartCount } = useCart();

  // Group products by category
  const grouped = productsData.reduce((acc, product) => {
    const cat = product.category;
    if (!acc[cat]) acc[cat] = [];
    acc[cat].push(product);
    return acc;
  }, {});

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
      </head>

      <div id="header-placeholder" />

      <main className="min-h-screen bg-[#0f0f1a] text-white p-8">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-3xl font-bold">Il nostro Store</h1>
          <div className="relative">
            <i className="fas fa-shopping-cart text-2xl"></i>
            {cartCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-600 rounded-full w-6 h-6 flex items-center justify-center text-sm">
                {cartCount}
              </span>
            )}
          </div>
        </div>

        {Object.entries(grouped).map(([category, products]) => (
          <section key={category} className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">{category}</h2>
            <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
              {products.map((prod) => (
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
