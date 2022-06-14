import React, { useContext } from "react";
import GlobalContext from "../../context/globalContext";
import { ProductType } from "../../utils/types";
import getSymbolFromCurrency from "currency-symbol-map";
import Button from "../button/Button";
import styles from "./ProductCard.module.scss";

interface ProductCardProps {
  product: ProductType;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const {
    setShowModal,
    setClose,
    cart,
    setCart,
    setTotalItems,
    totalItems,
    currency,
  } = useContext(GlobalContext)!;

  const handleAddToCart = () => {
    const item = cart.find((item) => item.id === product.id);
    if (item) {
      item.total_price = item.total_price! + product.price;
      item.quantity = item.quantity! + 1;
      setTotalItems(totalItems + 1);
    } else {
      setCart([
        ...cart,
        { ...product, total_price: product.price, quantity: 1 },
      ]);
      setTotalItems(totalItems + 1);
    }

    setShowModal(true);
    setClose(false);
  };

  return (
    <div className={styles.card}>
      <img src={product.image_url} alt="product badge" />
      <div className={styles.card__info}>
        <h3>{product.title}</h3>
        <p>
          From{" "}
          <span>{`${
            getSymbolFromCurrency(currency)
              ? getSymbolFromCurrency(currency)
              : currency
          } ${product.price}`}</span>
        </p>
        <div onClick={handleAddToCart}>
          <Button action="Add to Cart" />
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
