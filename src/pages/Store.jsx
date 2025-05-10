import React from 'react';
import prodotti from 'data/products.json';
import ProductCard from '../components/ProductCard';
import { useCarrello } from '../contexts/CartContext';

export default function Store() {
  const { totaleArticoli } = useCarrello();

  const raggruppati = prodotti.reduce((acc, p) => {
    if (!acc[p.category]) acc[p.category] = [];
    acc[p.category].push(p);
    return acc;
  }, {});

  return (
    <>
      <main className="min-h-screen bg-[#0f0f1a] text-white p-8">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-3xl font-bold">Store del Server</h1>
          <div className="relative">
            <i className="fas fa-shopping-cart text-2xl"></i>
            {totaleArticoli > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-600 rounded-full w-6 h-6 flex items-center justify-center text-sm">
                {totaleArticoli}
              </span>
            )}
          </div>
        </div>

        {Object.entries(raggruppati).map(([categoria, prodotti]) => (
          <section key={categoria} className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">{categoria}</h2>
            <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
              {prodotti.map((prodotto) => (
                <ProductCard key={prodotto.id} product={prodotto} />
              ))}
            </div>
          </section>
        ))}
      </main>
    </>
  );
}
