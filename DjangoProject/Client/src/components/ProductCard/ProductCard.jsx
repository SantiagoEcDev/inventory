import React, { useState } from "react";
import { deleteProduct, updateProduct } from "../../api/inventory.api";
import { useNavigate } from "react-router-dom";
import "./ProductCard.css";
import { toast } from "react-hot-toast";

export const ProductCard = ({ id, image, name, description, price, stock }) => {
  const navigate = useNavigate();
  const [isEditing, setIsEditing] = useState(false);
  const [editedProduct, setEditedProduct] = useState({
    name,
    description,
    price,
    stock: parseInt(stock.split(' / ')[0], 10) // Extrae el stock como número
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
    setIsEditing(true);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditedProduct({
      ...editedProduct,
      [name]: value
    });
  };

  const handleSave = async () => {
    try {
      await updateProduct(id, editedProduct);
      toast.success("Producto actualizado correctamente");
      setIsEditing(false);
    } catch (error) {
      console.error("Error updating product:", error);
      toast.error("Error al actualizar el producto");
    }
  };

  return (
    <article className="product-card">
      <div className="product-card-info-container">
        <h1 className="product-name">
          {isEditing ? (
            <input
              type="text"
              name="name"
              value={editedProduct.name}
              onChange={handleInputChange}
              className="product-input" // Clase para inputs de nombre
            />
          ) : (
            name
          )}
        </h1>
        <p className="product-description">
          {isEditing ? (
            <textarea
              name="description"
              value={editedProduct.description}
              onChange={handleInputChange}
              className="product-input" // Clase para inputs de descripción
            />
          ) : (
            description
          )}
        </p>
        <div className="product-card-info-container-additional">
          <p className="product-price">
            {isEditing ? (
              <input
                type="number"
                name="price"
                value={editedProduct.price}
                onChange={handleInputChange}
                className="product-input" // Clase para inputs de precio
              />
            ) : (
              `$${price}`
            )}
          </p>
          <p className="product-stock">
            {isEditing ? (
              <input
                type="number"
                name="stock"
                value={editedProduct.stock}
                onChange={handleInputChange}
                className="product-input" // Clase para inputs de stock
              />
            ) : (
              stock
            )}
          </p>
        </div>
        <div className="product-card-buttons">
          {isEditing ? (
            <>
              <button className="product-card-save" onClick={handleSave}>
                Guardar
              </button>
              <button className="product-card-cancel" onClick={() => setIsEditing(false)}>
                Cancelar
              </button>
            </>
          ) : (
            <button className="product-card-edit" onClick={handleEdit}>
              Editar
            </button>
          )}
          <button className="product-card-delete" onClick={handleDelete}>
            Eliminar
          </button>
        </div>
      </div>
    </article>
  );
};
