// src/Layout/Layout.js
import React from "react";
import { Outlet } from "react-router-dom";
import {Sidebar} from "../components/Sidebar/Sidebar";
import "./Layout.css";

const Layout = () => {
  return (
    <main className="layout">
      <Sidebar />
      <div className="content">
        <Outlet />
      </div>
    </main>
  );
};

export default Layout;
