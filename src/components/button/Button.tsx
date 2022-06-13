import React from "react";
import styles from "./Button.module.scss";

interface ButtonProps {
  action: string;
}

const Button: React.FC<ButtonProps> = ({ action }) => {
  return (
    <button className={styles.button}>
      <span>{action}</span>
    </button>
  );
};

export default Button;
