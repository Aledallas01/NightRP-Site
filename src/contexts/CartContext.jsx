import React, { createContext, useState } from 'react';

export const CartContext = createContext();

export default function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = product => {
    setCartItems(prev => {
      const exists = prev.find(item => item.id === product.id);
      if (exists) return prev.map(item =>
        item.id === product.id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      );
      return [...prev, { ...product, quantity: 1 }];
    });
  };

  const removeFromCart = productId => {
    setCartItems(prev => prev.filter(item => item.id !== productId));
  };

  const clearCart = () => {
    setCartItems([]);
  };

  const totalCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <CartContext.Provider value={{
      cartItems,
      addToCart,
      removeFromCart,
      clearCart,
      totalCount
    }}>
      {children}
    </CartContext.Provider>
  );
}
