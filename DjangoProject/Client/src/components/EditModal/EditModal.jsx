import React, { useState, useEffect } from 'react';
import './EditModal.css';
import { updateProduct } from '../../api/inventory.api'; // Asegúrate de que esta importación sea correcta

export const EditModal = ({ isOpen, onClose, product, onUpdate }) => {
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    price: '',
    stock: ''
  });

  useEffect(() => {
    if (product) {
      setFormData({
        name: product.name,
        description: product.description,
        price: product.price,
        stock: product.stock
      });
    }
  }, [product]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await updateProduct(product.id, formData);
      onUpdate({ ...product, ...formData }); // Actualiza el producto en el estado de productos
      onClose(); // Cierra el modal
    } catch (error) {
      console.error("Error updating product:", error);
      toast.error("Error al actualizar el producto"); // Muestra el toast de error
    }
  };

  return (
    isOpen && (
      <div className="edit-modal-overlay">
        <div className="edit-modal-content">
          <button className="close-button" onClick={onClose}>
            Cerrar
          </button>
          <h2>Editar Producto</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Nombre</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                placeholder="Nombre"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="description">Descripción</label>
              <input
                type="text"
                id="description"
                name="description"
                value={formData.description}
                onChange={handleInputChange}
                placeholder="Descripción"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="price">Precio</label>
              <input
                type="number"
                id="price"
                name="price"
                value={formData.price}
                onChange={handleInputChange}
                placeholder="Precio"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="stock">Cantidad en Stock</label>
              <input
                type="number"
                id="stock"
                name="stock"
                value={formData.stock}
                onChange={handleInputChange}
                placeholder="Cantidad"
                required
              />
            </div>
            <button type="submit">Guardar</button>
          </form>
        </div>
      </div>
    )
  );
};

export default EditModal;
