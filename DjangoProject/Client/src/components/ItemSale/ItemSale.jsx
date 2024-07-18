import React from "react";
import "./ItemSale.css";

export const ItemSale = ({ title, description, price, stock, onSell }) => {
  return (
    <article className="item-sale">
      <h1 className="item-sale-title">{title}</h1>
      <p className="item-sale-description">{description}</p>
      <div className="footer">
        <p className="footer-price">{price}</p>
        <p className="footer-available">{stock}</p>
        <button 
          className="footer-button"
          onClick={onSell}
          disabled={parseInt(stock.split(' ')[2]) <= 0} // Deshabilitar el botón si el stock es cero o menos
        >
          Unidad vendida
        </button>
      </div>
    </article>
  );
};
