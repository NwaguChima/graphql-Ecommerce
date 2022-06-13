import React from "react";
import styles from "./ProductCard.module.scss";

interface ProductCardProps {}

export const ProductCard: React.FC<ProductCardProps> = ({}) => {
  return (
    <div className={styles.card}>
      <img
        src="https://d1b929y2mmls08.cloudfront.net/luminskin/img/new-landing-page/moisturizing-balm.png"
        alt="product badge"
      />
      <div className={styles.card__info}>
        <h3>Premium-Grade Moisturizing Balm</h3>
        <p>
          From <span>$48.00</span>
        </p>
        <Button />
      </div>
    </div>
  );
};
