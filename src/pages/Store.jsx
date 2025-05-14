// src/pages/Store.jsx
import React from 'react';
import products from '../data/products.json';
import ProductCard from '../components/ProductCard';
import { Link } from 'react-router-dom';

export default function Store() {
  // estrai categorie uniche
  const categories = Array.from(new Set(products.map(p => p.category)));

  return (
    <div className="store-page">
      
    <section className="hero" id="games-hero">
      <h1>
        <i className="fas fa-shopping-cart" /> Store
      </h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. At dolores cum molestias accusantium qui quia repellendus dignissimos, corporis nisi officiis, facilis aliquid. Eaque harum rem deserunt velit voluptas assumenda laudantium.</p>
    </section>

      <main className="store-container">
        {categories.map(category => (
          <section key={category} className="store-category">
            <h2 className="category-title">{category}</h2>
            <div className="store-grid">
              {products
                .filter(p => p.category === category)
                .map(prod => (
                  <ProductCard key={prod.id} product={prod} />
                ))}
            </div>
          </section>
        ))}
      </main>

      <Link to="/cart" className="cart-button" aria-label="Vai al carrello">
        <i className="fas fa-shopping-cart" />
      </Link>
    </div>
  );
}
