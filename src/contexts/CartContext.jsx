// src/contexts/CartContext.jsx
import React, { createContext, useState, useEffect } from 'react';

// Esportiamo un context nominale
export const CartContext = createContext();

// Provider che avvolge l’app e mantiene lo state del carrello (persistito via localStorage)
export function CartProvider({ children }) {
  // Leggiamo il carrello da localStorage, o inizializziamo a lista vuota
  const [cart, setCart] = useState(() => {
    try {
      const stored = localStorage.getItem('cart');
      return stored ? JSON.parse(stored) : [];
    } catch {
      return [];
    }
  });

  // Ogni volta che cambia cart, salviamo su localStorage
  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  // Aggiunge un prodotto (puoi decidere se permettere duplicati o controllare ID)
  const addToCart = product => {
    setCart(prev => [...prev, product]);
  };

  // Rimuove un prodotto per ID
  const removeFromCart = id => {
    setCart(prev => prev.filter(p => p.id !== id));
  };

  // Svuota il carrello
  const clearCart = () => {
    setCart([]);
  };

  return (
    <CartContext.Provider
      value={{ cart, addToCart, removeFromCart, clearCart }}
    >
      {children}
    </CartContext.Provider>
  );
}
