import React, { useState } from "react";
import { deleteProduct } from "../../api/inventory.api";
import { useNavigate } from "react-router-dom";
import "./ProductCard.css";
import { toast } from "react-hot-toast";
import {EditModal} from "../EditModal/EditModal"; 

export const ProductCard = ({ id,name, description, price, stock }) => {
  const navigate = useNavigate();
  const [isEditModalOpen, setEditModalOpen] = useState(false);
  const [editedProduct, setEditedProduct] = useState({
    id,
    name,
    description,
    price,
    stock: parseInt(stock.split(' / ')[0], 10)
  });

  const handleDelete = async () => {
    const accepted = window.confirm("¿Estás seguro?");
    if (accepted) {
      try {
        await deleteProduct(id);
        toast.success("Producto eliminado");
        setTimeout(() => navigate(0), 1000);
      } catch (error) {
        console.error("Error deleting product:", error);
        toast.error("Error al eliminar el producto");
      }
    }
  };

  const handleEdit = () => {
    setEditModalOpen(true);
  };

  const handleUpdate = (updatedProduct) => {
    setEditedProduct(updatedProduct);
    setEditModalOpen(false);
    toast.success("Producto actualizado correctamente"); // Muestra el toast aquí
  };

  return (
    <article className="product-card">
      <div className="product-card-info-container">
        <h1 className="product-name">{editedProduct.name}</h1>
        <p className="product-description">{editedProduct.description}</p>
        <div className="product-card-info-container-additional">
          <p className="product-price">${editedProduct.price}</p>
          <p className="product-stock">{editedProduct.stock} / stock</p>
        </div>
        <div className="product-card-buttons">
          <button className="product-card-edit" onClick={handleEdit}>
            Editar
          </button>
          <button className="product-card-delete" onClick={handleDelete}>
            Eliminar
          </button>
        </div>
      </div>

      <EditModal
        isOpen={isEditModalOpen}
        onClose={() => setEditModalOpen(false)}
        product={editedProduct}
        onUpdate={handleUpdate} // Asegúrate de pasar esta función
      />
    </article>
  );
};

export default ProductCard;
