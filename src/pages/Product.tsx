import React, { useEffect } from "react";
import { ProductHeader } from "../components/productHeader/ProductHeader";

interface ProductProps {}

export const Product: React.FC<ProductProps> = () => {
  useEffect(() => {
    document.title = "Products";
  }, []);

  return <ProductHeader />;
};
