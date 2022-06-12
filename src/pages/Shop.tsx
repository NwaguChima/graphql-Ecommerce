import { useEffect } from "react";

interface ShopProps {}

const Shop: React.FC<ShopProps> = () => {
  useEffect(() => {
    document.title = "Products";
  }, []);

  return (
    <h1 style={{ textAlign: "center", marginTop: "10rem" }}>
      Welcome to our shop page
    </h1>
  );
};

export default Shop;
