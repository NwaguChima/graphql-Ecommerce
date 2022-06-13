import React from "react";
import { ProductType } from "../../utils/types";
import Button from "../button/Button";
import styles from "./ProductCard.module.scss";

interface ProductCardProps {
  product: ProductType;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <div className={styles.card}>
      <img src={product.image_url} alt="product badge" />
      <div className={styles.card__info}>
        <h3>{product.title}</h3>
        <p>
          From <span>{`${"$"} ${product.price}`}</span>
        </p>
        <Button action="Add to Cart" />
      </div>
    </div>
  );
};
