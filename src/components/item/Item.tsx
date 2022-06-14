import React, { useContext } from "react";
import { IoCloseOutline } from "react-icons/io5";
import { BsPlus } from "react-icons/bs";
import { BiMinus } from "react-icons/bi";
import styles from "./Item.module.scss";
import { ProductType } from "../../utils/types";
import GlobalContext from "../../context/globalContext";

interface ItemProps {
  product: ProductType;
}

const Item: React.FC<ItemProps> = ({ product }) => {
  const { cart, setCart } = useContext(GlobalContext)!;

  const handleRemove = () => {
    setCart(cart.filter((item) => item.id !== product.id));
  };

  return (
    <div className={styles.item}>
      <div className={styles.item__head}>
        <h4>{product.title}</h4>
        <i onClick={handleRemove}>
          <IoCloseOutline />
        </i>
      </div>
      <p>Oily / Two Months</p>
      <div className={styles.item__delivery}>
        <p>Two months supply shipped every two months</p>
        <img src={product.image_url} alt="item badge" />
      </div>
      <div className={styles.item__details}>
        <button>
          <i>
            <BiMinus />
          </i>
          <span>{product.total_price! / product.price}</span>
          <i>
            <BsPlus />
          </i>
        </button>
        <span>$ {product.total_price}</span>
      </div>
    </div>
  );
};

export default Item;
