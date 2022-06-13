import React from "react";
import { HiOutlineChevronRight, HiOutlineChevronUp } from "react-icons/hi";
import Button from "../button/Button";
import styles from "./Cart.module.scss";

interface CartProps {}

const Cart: React.FC<CartProps> = () => {
  return (
    <div className={styles.cart}>
      <div className={styles.cart__header}>
        <h2>My Shopping Cart</h2>
        <div className={styles.cart__header__click}>
          <button>
            <HiOutlineChevronRight />
          </button>
          <div>
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
