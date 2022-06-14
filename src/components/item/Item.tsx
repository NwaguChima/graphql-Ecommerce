import React from "react";
import { IoCloseOutline } from "react-icons/io5";
import { BsPlus } from "react-icons/bs";
import { BiMinus } from "react-icons/bi";
import styles from "./Item.module.scss";

interface ItemProps {}

const Item: React.FC<ItemProps> = () => {
  return (
    <div className={styles.item}>
      <div className={styles.item__head}>
        <h4>Classic Maintenance Set</h4>
        <i>
          <IoCloseOutline />
        </i>
      </div>
      <p>Oily / Two Months</p>
      <div className={styles.item__delivery}>
        <p>Two months supply shipped every two months</p>
        <img
          src="https://d1b929y2mmls08.cloudfront.net/luminskin/img/new-landing-page/moisturizing-balm.png"
          alt="item badge"
        />
      </div>
      <div className={styles.item__details}>
        <button>
          <i>
            <BiMinus />
          </i>
          <span>1</span>
          <i>
            <BsPlus />
          </i>
        </button>
        <span>$ 76.00</span>
      </div>
    </div>
  );
};

export default Item;
