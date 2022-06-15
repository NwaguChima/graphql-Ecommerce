import { useEffect } from "react";
import { Link } from "react-router-dom";
import Button from "../components/button/Button";

interface ShopProps {}

const Shop: React.FC<ShopProps> = () => {
  useEffect(() => {
    document.title = "Shop";
  }, []);

  return (
    <div style={{ textAlign: "center", marginTop: "10rem" }}>
      <h1 style={{ marginBottom: "3rem" }}>Welcome to Our Shop</h1>
      <Link to="/products">
        <Button action="Back Product Page" />
      </Link>
    </div>
  );
};

export default Shop;
