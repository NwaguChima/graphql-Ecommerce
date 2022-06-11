import React from "react";
import { Link } from "react-router-dom";
import styles from "./Header.module.scss";

interface HeaderProps {}

export const Header: React.FC<HeaderProps> = () => {
  return (
    <header className={styles.header}>
      <nav className={styles.header__nav}>
        <a href="/products" className={styles.header__nav__link}>
          Home
        </a>
      </nav>
    </header>
  );
};
