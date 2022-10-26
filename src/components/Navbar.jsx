import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import CarrosAntigos from "../pages/CarrosAntigos";
import CarrosBaratos from "../pages/CarrosBaratos";
import CarrosNovos from "../pages/CarrosNovos";
import Home from "../pages/Home";

export default function () {
  return (
    <Router>
      <div>
        <ul className="navbar">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/CarrosNovos">Novos Carros</Link>
          </li>
          <li>
            <Link to="/CarrosAntigos">Carros Antigos</Link>
          </li>
          <li>
            <Link to="/CarrosBaratos">Carros em promoção</Link>
          </li>
        </ul>
        <Routes>
          <Route path="/" exact element={<Home />}></Route>
          <Route path="/CarrosAntigos" element={<CarrosAntigos />} />
          <Route path="/CarrosNovos" element={<CarrosNovos />} />
          <Route path="/CarrosBaratos" element={<CarrosBaratos />} />
        </Routes>
      </div>
    </Router>
  );
}
