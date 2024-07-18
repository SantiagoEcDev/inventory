import React, { useState, useEffect } from "react";
import "./Inventory.css";
import { useProducts } from "../../Hooks/useProducts";
import { updateStock } from "../../api/inventory.api"; // Importa la función para actualizar el stock
import { toast } from "react-hot-toast"; // Importa toast para mostrar mensajes

export const Inventory = () => {
  const productsFromHook = useProducts();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    setProducts(productsFromHook);
  }, [productsFromHook]);

  // Función para manejar el cambio de cantidad
  const handleQuantityChange = async (index, event) => {
    const newStock = parseInt(event.target.value) || 0; 
    const updatedProducts = [...products];
    updatedProducts[index].stock = newStock;

    setProducts(updatedProducts);

    // Actualiza el stock en el backend
    try {
      await updateStock(updatedProducts[index].id, newStock);
      
    }catch (error) {
      console.error('Error updating stock:', error);
      toast.error('Error al actualizar el stock');
    }
  };

  return (
    <>
      <h1 className="products-title">Editar cantidad</h1>
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
              <tr key={product.id}>
                <td>{product.name}</td>
                <td>{product.stock}</td>
                <td className="manual-numbers">
                  <input
                    type="string"
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
