import React, { useEffect } from "react";
import { ProductHeader } from "../components/productHeader/ProductHeader";
import { Products } from "../components/products/Products";

interface ProductProps {}

export const Product: React.FC<ProductProps> = () => {
  useEffect(() => {
    document.title = "Products";
  }, []);

  return (
    <>
      <ProductHeader />
      <Products />
    </>
  );
};
