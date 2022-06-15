import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Button from "../components/button/Button";

interface HomeProps {}

const Home: React.FC<HomeProps> = () => {
  useEffect(() => {
    document.title = "Shop";
  }, []);

  return (
    <div style={{ textAlign: "center", marginTop: "10rem" }}>
      <h1 style={{ marginBottom: "3rem" }}>LUMIN - Home</h1>
      <Link to="/products">
        <Button action="Go To Product Page" />
      </Link>
    </div>
  );
};

export default Home;
