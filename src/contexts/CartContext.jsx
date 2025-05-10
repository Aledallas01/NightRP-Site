import React, { createContext, useContext, useState, useEffect } from 'react';

const CartContext = createContext({
  carrello: [],
  aggiungiAlCarrello: () => {},
  rimuoviDalCarrello: () => {},
  svuotaCarrello: () => {},
  totaleArticoli: 0,
});

export function CartProvider({ children }) {
  const [carrello, setCarrello] = useState([]);

  useEffect(() => {
    const salvato = localStorage.getItem('carrello');
    if (salvato) setCarrello(JSON.parse(salvato));
  }, []);

  useEffect(() => {
    localStorage.setItem('carrello', JSON.stringify(carrello));
  }, [carrello]);

  const aggiungiAlCarrello = (prodotto) => {
    setCarrello((prev) => [...prev, prodotto]);
  };

  const rimuoviDalCarrello = (idProdotto) => {
    setCarrello((prev) => prev.filter((p) => p.id !== idProdotto));
  };

  const svuotaCarrello = () => {
    setCarrello([]);
  };

  const totaleArticoli = carrello.length;

  return (
    <CartContext.Provider
      value={{ carrello, aggiungiAlCarrello, rimuoviDalCarrello, svuotaCarrello, totaleArticoli }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCarrello() {
  return useContext(CartContext);
}
