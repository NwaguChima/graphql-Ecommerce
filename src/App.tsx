import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Product } from "./pages/Product";
import { Header } from "./components/header/Header";

function App() {
  return (
    <>
      <Header />
      <Router>
        <Routes>
          <Route path="/products" element={<Product />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
