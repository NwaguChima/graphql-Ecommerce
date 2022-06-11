import React from "react";
import Logo from "../assets/Logo";
import styles from "./Header.module.scss";

interface HeaderProps {}

export const Header: React.FC<HeaderProps> = () => {
  return (
    <header className={styles.header}>
      <nav className={styles.header__nav}>
        <a href="/products" className={styles.header__nav__link}>
          <Logo />
        </a>
      </nav>
    </header>
  );
};
