import React, { useState } from "react";
import "./Modal.css"; // Archivo de estilos para el modal
import { addProduct } from "../../api/inventory.api";
import { useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";

const Modal = ({ isOpen, onClose }) => {
  const initialFormData = {
    name: "",
    description: "",
    price: "",
    stock: "",
    image: null, // Cambiado para manejar archivos
  };

  const [formData, setFormData] = useState(initialFormData);
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value, files } = e.target;
    setFormData({
      ...formData,
      [name]: files ? files[0] : value, // Manejar archivos si se seleccionan
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formDataToSend = new FormData();
    formDataToSend.append("name", formData.name);
    formDataToSend.append("description", formData.description);
    formDataToSend.append("price", formData.price);
    formDataToSend.append("stock", formData.stock);
    if (formData.image) {
      formDataToSend.append("image", formData.image); // Añadir archivo de imagen
    }

    try {
      await toast.promise(
        addProduct(formDataToSend),
        {
          loading: 'Añadiendo...',
          success: <b>Producto añadido</b>,
          error: <b>Por favor, ingresa valores válidos</b>
        }
      );

      onClose();
      setFormData(initialFormData);
      setTimeout(() => navigate(0), 1500);
    } catch (error) {
      console.error("Error al agregar el producto:", error);
    }
  };

  const handleClose = () => {
    onClose(); // Cierra el modal
    setFormData(initialFormData);
  };

  return (
    <>
      {isOpen && (
        <div className="modal-overlay">
          <div className="modal">
            <button className="close-button" onClick={handleClose}>
              Cerrar
            </button>
            <h2>Añadir al inventario</h2>
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
                  type="text"
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
                  type="text"
                  id="stock"
                  name="stock"
                  value={formData.stock}
                  onChange={handleInputChange}
                  placeholder="Cantidad"
                  required
                />
              </div>
              
              <button type="submit">Enviar</button>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
