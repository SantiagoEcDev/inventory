import React, { useEffect, useState } from "react";
import "./General.css";
import { getAllProducts } from "../../api/inventory.api";
import { useProducts } from "../../Hooks/useProducts";

export const General = () => {
  const products = useProducts();

  return (
    <>
      <h1 className="products-title">Vista del inventario</h1>
      <div className="table-wrapper">
        <table className="styled-table">
          <thead>
            <tr>
              <th>Nombre del producto</th>
              <th>Descripción del producto</th>
              <th>Precio</th>
              <th>Existencias</th>
            </tr>
          </thead>
          <tbody>
            {products
              .filter((product) => product.stock > 0)
              .map((product) => (
                <tr key={product.id}>
                  <td>{product.name}</td>
                  <td>{product.description}</td>
                  <td>{product.price}</td>
                  <td>{product.stock}</td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>

      
    </>
  );
};

export default General;
