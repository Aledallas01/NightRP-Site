// src/contexts/CartContext.jsx

import React, { createContext, useState, useContext } from 'react';

// 1. Creiamo il contesto
const CartContext = createContext();

// 2. Provider che avvolge l’app e fornisce lo stato del carrello
export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);

  // Aggiunge un prodotto al carrello
  const addToCart = (product) => {
    setCart((prev) => {
      // se già presente, incrementa quantità
      const existing = prev.find((p) => p.id === product.id);
      if (existing) {
        return prev.map((p) =>
          p.id === product.id ? { ...p, quantity: p.quantity + 1 } : p
        );
      }
      // altrimenti aggiunge con quantity = 1
      return [...prev, { ...product, quantity: 1 }];
    });
  };

  // Rimuove un prodotto completamente
  const removeFromCart = (productId) => {
    setCart((prev) => prev.filter((p) => p.id !== productId));
  };

  // Diminuisce quantità di uno
  const decrement = (productId) => {
    setCart((prev) =>
      prev
        .map((p) =>
          p.id === productId ? { ...p, quantity: p.quantity - 1 } : p
        )
        .filter((p) => p.quantity > 0)
    );
  };

  // Svuota il carrello
  const clearCart = () => {
    setCart([]);
  };

  return (
    <CartContext.Provider
      value={{ cart, addToCart, removeFromCart, decrement, clearCart }}
    >
      {children}
    </CartContext.Provider>
  );
}

// 3. Hook di comodo per usare il contesto
export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) {
    throw new Error('useCart deve essere usato dentro a <CartProvider>');
  }
  return ctx;
}

// 4. Export default solo del contesto (se preferisci import default)
export default CartContext;
