import React from "react";
import { FaExclamationTriangle } from "react-icons/fa";
import { Link } from "react-router-dom";

interface NotFoundProps {}

const NotFound: React.FC<NotFoundProps> = () => {
  return (
    <div style={{ textAlign: "center", marginTop: "10rem" }}>
      <FaExclamationTriangle size="5em" />
      <h1>404</h1>
      <p>Sorry, this page does not exist</p>
      <Link to="/products">Go Back</Link>
    </div>
  );
};

export default NotFound;
