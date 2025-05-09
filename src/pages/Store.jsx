import React, { useEffect, useState, useContext } from 'react';
import ProductCard from './Store/ProductCard';
import CartContext from '../contexts/CartContext';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function Store() {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [activeCat, setActiveCat] = useState('Tutte');
  const { addToCart } = useContext(CartContext);

  useEffect(() => {
    fetch('/data/products.json')
      .then(res => res.json())
      .then(data => {
        setProducts(data);
        // Estrai le categorie uniche + tab "Tutte"
        const cats = Array.from(
          new Set(data.map(p => p.category))
        ).sort();
        setCategories(['Tutte', ...cats]);
      })
      .catch(console.error);
  }, []);

  // Filtra in base alla categoria attiva
  const displayed = activeCat === 'Tutte'
    ? products
    : products.filter(p => p.category === activeCat);

  return (
    <>
      <Navbar />

      <main className="p-8 bg-gray-900 text-white min-h-screen">
        <h1 className="text-3xl mb-6">Il nostro Store</h1>

        {/* 1) Tab di categoria */}
        <div className="flex flex-wrap gap-2 mb-8">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setActiveCat(cat)}
              className={
                `px-4 py-2 rounded-full font-semibold 
                 ${activeCat === cat
                   ? 'bg-purple-600 text-white'
                   : 'bg-gray-700 text-gray-300 hover:bg-gray-600'}`
              }
            >
              {cat}
            </button>
          ))}
        </div>

        {/* 2) Griglia prodotti filtrati */}
        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {displayed.map(prod => (
            <ProductCard
              key={prod.id}
              product={prod}
              onAdd={() => addToCart(prod)}
            />
          ))}
        </div>
      </main>

      <Footer />
    </>
  );
}
