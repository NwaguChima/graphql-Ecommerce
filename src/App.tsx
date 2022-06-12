import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Product from "./pages/Product";
import Header from "./components/header/Header";
import NotFound from "./pages/NotFound";
import Shop from "./pages/Shop";
import Learn from "./pages/Learn";
import { GlobalContextProvider } from "./context/globalContext";

function App() {
  return (
    <>
      <GlobalContextProvider>
        <Header />
        <Router>
          <Routes>
            <Route path="/products" element={<Product />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/learn" element={<Learn />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Router>
      </GlobalContextProvider>
    </>
  );
}

export default App;
