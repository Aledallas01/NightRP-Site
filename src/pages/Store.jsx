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

      <Footer />
    </>
  );
}
