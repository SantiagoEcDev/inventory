import React, { useState, useEffect } from "react";
import "./Inventory.css";
import { useProducts } from "../../Hooks/useProducts";

export const Inventory = () => {
  const productsFromHook = useProducts();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    setProducts(productsFromHook);
  }, [productsFromHook]);

  // Función para manejar el cambio de cantidad
  const handleQuantityChange = (index, event) => {
    const updatedProducts = [...products];
    updatedProducts[index].stock = parseInt(event.target.value) || 0; 
    setProducts(updatedProducts);
  };

  return (
    <>
      <h1 className="products-title">Vista del inventario</h1>
      <div className="table-wrapper">
        <table className="styled-table">
          <thead>
            <tr>
              <th>Producto</th>
              <th>Cantidad</th>
              <th>Ajuste manual</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product, index) => (
              <tr key={index}>
                <td>{product.name}</td>
                <td>{product.stock}</td>
                <td className="manual-numbers">
                  <input
                    type="number"
                    value={product.stock} // Valor del input
                    onChange={(e) => handleQuantityChange(index, e)} // Maneja el cambio de cantidad
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Inventory;
