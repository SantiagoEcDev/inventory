import { ItemSale } from "../ItemSale/ItemSale";
import "./Sales.css";

export const Sales = () => {
  return (
    <div className="sales-container">
      <ItemSale
        title="Camiseta de algodón"
        description="Suave y cómoda, ideal para el verano"
        price="$19.99"
        available="Disponible 8 unidades"
      />
      <ItemSale
        title="Pantalones deportivos"
        description="Con tecnología de secado rápido"
        price="$29.99"
        available="Disponible 12 unidades"
      />
      <ItemSale
        title="Zapatos deportivos"
        description="Ligeros y resistentes"
        price="$39.99"
        available="Disponible 5 pares"
      />
      <ItemSale
        title="Gorra ajustable"
        description="Estilo casual, varios colores disponibles"
        price="$9.99"
        available="Disponible 20 unidades"
      />
      <ItemSale
        title="Camisa de manga larga"
        description="Material cómodo, ideal para todas las estaciones"
        price="$29.99"
        available="Disponible 15 unidades"
      />

      <ItemSale
        title="Pantalones vaqueros slim fit"
        description="Diseño moderno, ajuste perfecto"
        price="$39.99"
        available="Disponible 10 unidades"
      />
    </div>
  );
};
