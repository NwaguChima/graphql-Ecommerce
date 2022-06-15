import React from "react";
import { FaExclamationTriangle } from "react-icons/fa";
import { Link } from "react-router-dom";
import Button from "../components/button/Button";

interface NotFoundProps {}

const NotFound: React.FC<NotFoundProps> = () => {
  return (
    <div style={{ textAlign: "center", marginTop: "10rem" }}>
      <FaExclamationTriangle size="5em" />
      <h1>404</h1>
      <p style={{ marginBottom: "3rem" }}>Sorry, this page does not exist</p>
      <Link to="/products">
        <Button action="Back Product Page" />
      </Link>
    </div>
  );
};

export default NotFound;
