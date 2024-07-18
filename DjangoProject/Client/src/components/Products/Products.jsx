// src/components/Products/Products.jsx
import React, { useState, useEffect } from "react";
import "./Products.css";
import { ProductCard } from "../ProductCard/ProductCard";
import { toast } from "react-hot-toast";
import { getAllProducts, deleteProduct, updateProduct } from "../../api/inventory.api";
import { EditModal } from "../EditModal/EditModal";

export const Products = () => {
  const [products, setProducts] = useState([]);
  const [editModalOpen, setEditModalOpen] = useState(false);
  const [productToEdit, setProductToEdit] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await getAllProducts();
        setProducts(response.data);
      } catch (error) {
        console.error("Error fetching products:", error);
        toast.error("Error al cargar los productos");
      }
    };
    fetchProducts();
  }, []);

  const handleProductDelete = async (id) => {
    const accepted = window.confirm("¿Estás seguro de eliminar este producto?");
    if (accepted) {
      try {
        await deleteProduct(id);
        setProducts(products.filter((product) => product.id !== id));
        toast.success("Producto eliminado");
      } catch (error) {
        console.error("Error deleting product:", error);
        toast.error("Error al eliminar el producto");
      }
    }
  };

  const handleProductEdit = (id) => {
    const product = products.find((product) => product.id === id);
    setProductToEdit(product);
    setEditModalOpen(true);
  };

  const handleUpdateProduct = (updatedProduct) => {
    setProducts((prevProducts) =>
      prevProducts.map((product) =>
        product.id === updatedProduct.id ? { ...product, ...updatedProduct } : product
      )
    );
  };

  const closeEditModal = () => {
    setEditModalOpen(false);
  };

  return (
    <>
      <header className="header-products">
        <h1>Inventario de productos</h1>
      </header>
      <div className="products-container">
        {products
          .filter((product) => product.stock > 0)
          .slice(0)
          .reverse()
          .map((product) => (
            <ProductCard
              key={product.id}
              id={product.id}
              name={product.name}
              description={product.description}
              price={product.price}
              stock={`${product.stock} / Stock`}
              onDelete={handleProductDelete}
              onEdit={handleProductEdit} // Pasa la función de edición a ProductCard
            />
          ))}
      </div>

      <EditModal
        isOpen={editModalOpen}
        onClose={closeEditModal}
        product={productToEdit}
        onUpdate={handleUpdateProduct} // Pasa la función de actualización a EditModal
      />
    </>
  );
};
