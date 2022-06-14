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
  const { cart, setCart, setTotalItems, totalItems } =
    useContext(GlobalContext)!;

  const handleRemove = () => {
    let newCart = cart.filter((item) => item.id !== product.id);
    setCart(newCart);

    const totalItems = newCart.reduce((acc, item) => {
      return acc + item.quantity!;
    }, 0);

    setTotalItems(totalItems);
  };

  const handleQuantity = (
    e: React.MouseEvent<HTMLElement, MouseEvent>,
    task: string
  ) => {
    e.preventDefault();

    let newCart = cart.map((item) => {
      if (item.id === product.id) {
        if (task === "add") {
          item.quantity! = item.quantity! + 1;
          item.total_price! = item.total_price! + product.price;
          setTotalItems(totalItems + 1);
        }
        if (task === "remove" && item.quantity! > 1) {
          item.quantity = item.quantity! - 1;
          item.total_price = item.total_price! - product.price;
          setTotalItems(totalItems - 1);
        }
      }
      return item;
    });
    setCart(newCart);
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
          <i onClick={(e) => handleQuantity(e, "remove")}>
            <BiMinus />
          </i>
          <span>{product.total_price! / product.price}</span>
          <i onClick={(e) => handleQuantity(e, "add")}>
            <BsPlus />
          </i>
        </button>
        <span>$ {product.total_price}</span>
      </div>
    </div>
  );
};

export default Item;
