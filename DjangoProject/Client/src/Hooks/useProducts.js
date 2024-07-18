// src/hooks/useProducts.js
import { useEffect, useState } from "react";
import { getAllProducts } from "../api/inventory.api";

export const useProducts = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function loadProducts() {
      const res = await getAllProducts();
      setProducts(res.data);
    }
    loadProducts();
  }, []);

  return products;
};
