import React from "react";
import styles from "./Products.module.scss";

interface ProductsProps {}

export const Products: React.FC<ProductsProps> = () => {
  return (
    <main className={styles.main}>
      <div className={styles.main__container}>
        <p>Product</p>
      </div>
    </main>
  );
};
