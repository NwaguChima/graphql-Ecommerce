import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Product } from "./pages/Product";
import { Header } from "./components/header/Header";
import { NotFound } from "./pages/NotFound";

function App() {
  return (
    <>
      <Header />
      <Router>
        <Routes>
          <Route path="/products" element={<Product />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
