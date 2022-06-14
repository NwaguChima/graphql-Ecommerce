import React from "react";
import { IoCloseOutline } from "react-icons/io5";
import { BsPlus } from "react-icons/bs";
import { BiMinus } from "react-icons/bi";

interface ItemProps {}

const Item: React.FC<ItemProps> = () => {
  return (
    <div>
      <div className="head">
        <h5>Classic Maintenance Set</h5>
        <i>
          <IoCloseOutline />
        </i>
      </div>
      <p>Oily / Two Months</p>
      <div className="delivery">
        <p>Two months supply shipped every two months</p>
        <img
          src="https://d1b929y2mmls08.cloudfront.net/luminskin/img/new-landing-page/moisturizing-balm.png"
          alt="item badge"
        />
      </div>
      <div className="details">
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
