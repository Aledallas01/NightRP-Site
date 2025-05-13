// src/contexts/CartContext.jsx
import React, { createContext, useReducer, useEffect } from 'react';

const CART_KEY = 'nightrp_cart';

const CartContext = createContext();

function cartReducer(state, action) {
  switch (action.type) {
    case 'INIT':
      return action.payload;
    case 'ADD':
      {
        const exists = state.find(item => item.id === action.payload.id);
        if (exists) {
          return state.map(item =>
            item.id === action.payload.id
              ? { ...item, quantity: item.quantity + 1 }
              : item
          );
        }
        return [...state, { ...action.payload, quantity: 1 }];
      }
    case 'REMOVE':
      return state.filter(item => item.id !== action.payload);
    case 'CLEAR':
      return [];
    default:
      return state;
  }
}

export function CartProvider({ children }) {
  const [cart, dispatch] = useReducer(cartReducer, []);

  // init from localStorage
  useEffect(() => {
    const stored = localStorage.getItem(CART_KEY);
    if (stored) dispatch({ type: 'INIT', payload: JSON.parse(stored) });
  }, []);

  // persist
  useEffect(() => {
    localStorage.setItem(CART_KEY, JSON.stringify(cart));
  }, [cart]);

  const addItem = product => dispatch({ type: 'ADD', payload: product });
  const removeItem = id => dispatch({ type: 'REMOVE', payload: id });
  const clearCart = () => dispatch({ type: 'CLEAR' });

  const itemCount = cart.reduce((sum, i) => sum + i.quantity, 0);

  return (
    <CartContext.Provider value={{ cart, addItem, removeItem, clearCart, itemCount }}>
      {children}
    </CartContext.Provider>
  );
}

export default CartContext;
