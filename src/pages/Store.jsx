import React, { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";

export default function Store() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("/data/products.json")
      .then((r) => r.json())
      .then(setProducts)
      .catch(console.error);
  }, []);

  const categories = Array.from(new Set(products.map((p) => p.category)));

  return (
    <>
      <main className="p-8 bg-gray-900 text-white min-h-screen">
        <h1 className="text-3xl font-bold mb-6">Store</h1>

      </main>
    </>
  );
}
