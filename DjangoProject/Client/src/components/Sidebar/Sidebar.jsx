import "./Sidebar.css";
import MyMemoji from "./Memoji.webp";
import { GoHome } from "react-icons/go";
import { BsBoxSeam } from "react-icons/bs";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { Link, NavLink } from "react-router-dom";

export const Sidebar = () => {
  return (
    <aside className="sidebar">
      <div className="sidebar-avatar">
        <img src={MyMemoji} alt="" />
      </div>
      <nav className="sidebar-items">
        <h1>Administrar</h1>
        <ul className="sidebar-items-container">
          <li>
            <NavLink to="/" activeclassname="active" className="sidebar-item">
              <GoHome /> General
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/products"
              activeclassname="active"
              className="sidebar-item"
            >
              <GoHome /> Productos
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/inventory"
              activeclassname="active"
              className="sidebar-item"
            >
              <BsBoxSeam /> Inventario
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/sales"
              activeclassname="active"
              className="sidebar-item"
            >
              <AiOutlineShoppingCart /> Ventas
            </NavLink>
          </li>
        </ul>
      </nav>
    </aside>
  );
};
