import React, { useState } from "react";
import "./Products.css";
import { ProductCard } from "../ProductCard/ProductCard";
import Modal from "../Modal/Modal";
import {toast} from "react-hot-toast"

import { useProducts } from "../../Hooks/useProducts";

export const Products = () => {
  const products = useProducts();
  const [modalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };


  return (
    <>
      <header className="header-products">
        <h1>Inventario de productos</h1>{" "}
        <a className="add-product-button" href="#" onClick={openModal}>
          Agregar producto
        </a>
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
              image={product.image}
              name={product.name}
              description={product.description}
              price={product.price}
              stock={`${product.stock} / Stock`}
            />
          ))}
      </div>

      <Modal isOpen={modalOpen} onClose={closeModal} />
    </>
  );
};
