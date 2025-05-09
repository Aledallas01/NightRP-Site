import { createContext, useState } from 'react';

export const CartContext = createContext();

export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);
  const addToCart = (product) =>
    setCart((c) => {
      if (c.find((p) => p.id === product.id)) return c;
      return [...c, product];
    });
  const removeFromCart = (id) =>
    setCart((c) => c.filter((p) => p.id !== id));
  const clearCart = () => setCart([]);
  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, clearCart }}>
      {children}
    </CartContext.Provider>
  );
}
