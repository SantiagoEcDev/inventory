import React, { useState, useEffect } from "react";
import { ItemSale } from "../ItemSale/ItemSale";
import "./Sales.css";
import { useProducts } from "../../Hooks/useProducts";
import { toast } from "react-hot-toast";
import { updateStock } from "../../api/inventory.api"// Asegúrate de importar la función correcta

export const Sales = () => {
  const [products, setProducts] = useState([]);
  const productsData = useProducts();

  useEffect(() => {
    setProducts(productsData);
  }, [productsData]);

  const handleSell = async (id, currentStock) => {
    if (currentStock > 0) {
      const newStock = currentStock - 1;

      try {
        const result = await updateStock(id, newStock);
        if (result) {
          setProducts((prevProducts) =>
            prevProducts
              .map((product) =>
                product.id === id
                  ? { ...product, stock: newStock }
                  : product
              )
              .filter((product) => product.stock > 0) 
          );
          toast.success('Unidad vendida correctamente');
        } else {
          toast.error('Error al actualizar el producto');
        }
      } catch (error) {
        console.error('Error updating stock:', error);
        toast.error('Error al actualizar el producto');
      }
    } else {
      toast.warn('No hay más stock disponible');
    }
  };

  return (
    <div className="sales-container">
      {products
      .filter((product) => product.stock > 0)
        .slice(0)
        .reverse()
        .map((product) => (
          <ItemSale
            key={product.id}
            title={product.name}
            description={product.description}
            price={product.price}
            stock={`Unidades disponible ${product.stock}`}
            onSell={() => handleSell(product.id, product.stock)}
          />
        ))}
    </div>
  );
};
