// src/App.js
import React from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "./Layout/Layout";
import {General} from "./components/General/General";
import {Inventory} from "./components/Inventory/Inventory";
import {Sales} from "./components/Sales/Sales";
import { Products } from "./components/Products/Products";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<General />} />
        <Route path="products" element={<Products />} />
        <Route path="inventory" element={<Inventory />} />
        <Route path="sales" element={<Sales />} />
      </Route>
    </Routes>
  );
}

export default App;
