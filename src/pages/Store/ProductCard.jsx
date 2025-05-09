import React from 'react';

export default function ProductCard({ product, onAdd }) {
  const { nome, descrizione, prezzo, immagine } = product;
  return (
    <div className="bg-gray-800 rounded-lg overflow-hidden shadow-lg flex flex-col">
      <img
        src={`/assets/images/${immagine}`}
        alt={nome}
        className="h-48 w-full object-cover"
      />
      <div className="p-4 flex-1 flex flex-col">
        <h2 className="text-2xl mb-2">{nome}</h2>
        <p className="text-gray-300 flex-1">{descrizione}</p>
        <div className="mt-4 flex items-center justify-between">
          <span className="text-xl font-bold">€ {prezzo.toFixed(2)}</span>
          <button
            onClick={onAdd}
            className="bg-purple-600 hover:bg-purple-700 px-4 py-2 rounded text-white"
          >
            Aggiungi
          </button>
        </div>
      </div>
    </div>
  );
}
