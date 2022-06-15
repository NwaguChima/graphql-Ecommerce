import { useEffect } from "react";
import { Link } from "react-router-dom";
import Button from "../components/button/Button";

interface LearnProps {}

const Learn: React.FC<LearnProps> = () => {
  useEffect(() => {
    document.title = "Learn";
  }, []);

  return (
    <div style={{ textAlign: "center", marginTop: "10rem" }}>
      <h1 style={{ marginBottom: "3rem" }}>Learn about us here...</h1>
      <Link to="/products">
        <Button action="Back Product Page" />
      </Link>
    </div>
  );
};

export default Learn;
