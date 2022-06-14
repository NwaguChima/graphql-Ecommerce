import React, { useContext } from "react";
import GlobalContext from "../../context/globalContext";
import { HiOutlineChevronRight, HiOutlineChevronUp } from "react-icons/hi";
import Button from "../button/Button";
import styles from "./Cart.module.scss";
import Item from "../item/Item";
import { useQuery } from "@apollo/client";
import GET_CURRENCIES from "../../queries/currencyQueries";
import getSymbolFromCurrency from "currency-symbol-map";

interface CartProps {}

const Cart: React.FC<CartProps> = () => {
  const { loading, error, data } = useQuery(GET_CURRENCIES);

  const { setShowModal, setClose, cart, setCurrency, currency } =
    useContext(GlobalContext)!;

  const getTotal = () => {
    let total = 0;
    cart.forEach((item) => {
      total += item.total_price!;
    });
    return total;
  };

  const handleClose = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();

    setClose(true);

    setTimeout(() => {
      setShowModal(false);
    }, 500);
  };

  return (
    <div className={styles.cart}>
      <div className={styles.cart__header}>
        <h2>My Shopping Cart</h2>
        <div className={styles.cart__header__click}>
          <button
            className={styles.modal_btn}
            onClick={(e) => {
              handleClose(e);
            }}
          >
            <HiOutlineChevronRight />
          </button>
          <div className={styles.cart__header__click__currency}>
            <select
              id="country"
              value={currency}
              onChange={(e) => setCurrency(e.target.value)}
            >
              {!loading &&
                !error &&
                data?.currency.map((currency: string) => (
                  <option key={currency} value={currency}>
                    {currency}
                  </option>
                ))}
            </select>
          </div>
        </div>
      </div>
      <div className={styles.cart__body}>
        {cart.length > 0 ? (
          cart.map((item) => <Item key={item.id} product={item} />)
        ) : (
          <div className={styles.cart__body__empty}>
            <h3>Your cart is empty</h3>
            <p>
              You can add items to your cart by clicking on the "Add to Cart"
              button on the product page.
            </p>
          </div>
        )}
      </div>
      <div className={styles.cart__footer}>
        <div className={styles.cart__footer__head}>
          <p>APPLY A DISCOUNT CODE</p>
          <button className={styles.modal_btn}>
            <HiOutlineChevronUp />
          </button>
        </div>
        <div className={styles.cart__footer__body}>
          <div className={styles.cart__footer__body__total}>
            <h4>SUBTOTAL</h4>
            <p>
              {`${
                getSymbolFromCurrency(currency)
                  ? getSymbolFromCurrency(currency)
                  : currency
              }`}{" "}
              <span>{getTotal()}</span>
            </p>
          </div>
          <Button action="PRODCEED TO CHECKOUT" />
        </div>
      </div>
    </div>
  );
};

export default Cart;
