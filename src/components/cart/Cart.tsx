import React, { useContext } from "react";
import GlobalContext from "../../context/globalContext";
import { HiOutlineChevronRight, HiOutlineChevronUp } from "react-icons/hi";
import Button from "../button/Button";
import styles from "./Cart.module.scss";

interface CartProps {}

const Cart: React.FC<CartProps> = () => {
  const { setShowModal } = useContext(GlobalContext)!;

  return (
    <div className={styles.cart}>
      <div className={styles.cart__header}>
        <h2>My Shopping Cart</h2>
        <div className={styles.cart__header__click}>
          <button
            onClick={(e) => {
              e.preventDefault();
              setShowModal(false);
            }}
          >
            <HiOutlineChevronRight />
          </button>
          <div className={styles.cart__header__click__currency}>
            <label htmlFor="country">USD</label>
            <select id="country">
              <option value="usd"></option>
            </select>
          </div>
        </div>
      </div>
      <div className={styles.cart__footer}>
        <div className={styles.cart__footer__head}>
          <p>APPLY A DISCOUNT CODE</p>
          <button>
            <HiOutlineChevronUp />
          </button>
        </div>
        <div className={styles.cart__footer__body}>
          <div className={styles.cart__footer__body__total}>
            <h4>SUBTOTAL</h4>
            <p>
              NIG <span>266.50</span>
            </p>
          </div>
          <Button action="PRODCEED TO CHECKOUT" />
        </div>
      </div>
    </div>
  );
};

export default Cart;
