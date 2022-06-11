import React from "react";
import Logo from "../assets/Logo";
import { AiOutlineShoppingCart } from "react-icons/ai";
import styles from "./Header.module.scss";

interface HeaderProps {}

export const Header: React.FC<HeaderProps> = () => {
  return (
    <header className={styles.header}>
      <nav className={styles.header__nav}>
        <a href="/products" className={styles.header__nav__logo}>
          <Logo />
        </a>
        <div className={styles.header__nav__links}>
          <a href="/shop">Shop</a>
          <a href="/learn">Learn</a>
        </div>
        <div className={styles.header__nav__profile}>
          <a href="/account">Account</a>
          <a href="/cart">
            <AiOutlineShoppingCart />
            <span>0</span>
          </a>
        </div>
      </nav>
    </header>
  );
};
