import React, { useEffect } from "react";

interface ProductProps {}

export const Product: React.FC<ProductProps> = () => {
  useEffect(() => {
    document.title = "Products";
  }, []);

  return <div>Hello</div>;
};
