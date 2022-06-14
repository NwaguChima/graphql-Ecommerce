import { useEffect } from "react";
import ProductHeader from "../components/productHeader/ProductHeader";
import Products from "../components/products/Products";

interface ProductProps {}

const Product: React.FC<ProductProps> = () => {
  useEffect(() => {
    document.title = "Product";
  }, []);

  return (
    <>
      <ProductHeader />
      <Products />
    </>
  );
};

export default Product;
