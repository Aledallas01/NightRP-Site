import React, { createContext, useState } from 'react';

export const CartContext = createContext();

export function CartProvider({ children }) {
  const [items, setItems] = useState([]);

  const addToCart = (product) => {
    setItems((cur) => {
      const idx = cur.findIndex((i) => i.id === product.id);
      if (idx > -1) {
        const updated = [...cur];
        updated[idx].qty += 1;
        return updated;
      }
      return [...cur, { ...product, qty: 1 }];
    });
  };

  const clearCart = () => setItems([]);

  return (
    <CartContext.Provider value={{ items, addToCart, clearCart }}>
      {children}
    </CartContext.Provider>
  );
}
