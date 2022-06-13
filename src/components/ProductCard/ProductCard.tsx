import React from "react";
import Button from "../button/Button";
import styles from "./ProductCard.module.scss";

interface ProductCardProps {
  imgUrl: string;
  productName: string;
  productPrice: number;
}

export const ProductCard: React.FC<ProductCardProps> = ({
  imgUrl,
  productName,
  productPrice,
}) => {
  return (
    <div className={styles.card}>
      <img src={imgUrl} alt="product badge" />
      <div className={styles.card__info}>
        <h3>{productName}</h3>
        <p>
          From <span>{`${"$"} ${productPrice}`}</span>
        </p>
        <Button action="Add to Cart" />
      </div>
    </div>
  );
};
