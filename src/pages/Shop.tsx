import { useEffect } from "react";

interface ShopProps {}

const Shop: React.FC<ShopProps> = () => {
  useEffect(() => {
    document.title = "Shop";
  }, []);

  return (
    <h1 style={{ textAlign: "center", marginTop: "10rem" }}>
      Welcome to our shop page
    </h1>
  );
};

export default Shop;
