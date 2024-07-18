import { deleteProduct } from "../../api/inventory.api";
import { useNavigate } from "react-router-dom";
import "./ProductCard.css";
export const ProductCard = ({id, image, name, description, price, stock }) => {
  const navigate = useNavigate()
  const handleDelete = async () => {
    const accepted = window.confirm("¿Estás seguro?");
    if (accepted) {
      try {
        await deleteProduct(id);
         
        navigate(0)// Redirecciona a la página inicial
      } catch (error) {
        console.error("Error deleting product:", error);
        // Manejo de errores, por ejemplo, mostrar un mensaje de error al usuario
      }
    }
  };

  return (
    <article className="product-card">
      <img src={image} alt="" />
      <div className="product-card-info-container">
        <h1 className="product-name">{name}</h1>
        <p className="product-description">{description}</p>
        <div className="product-card-info-container-additional">
          <p className="product-price">${price}</p>
          <p className="product-stock">{stock}</p>
        </div>
        <div className="product-card-buttons">
          <button className="product-card-edit">Editar</button>

          <button
            className="product-card-delete"
            onClick={handleDelete}
          >
            Eliminar
          </button>
        </div>
      </div>
    </article>
  );
};
