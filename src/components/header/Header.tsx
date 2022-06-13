import React, { useContext } from "react";
import Logo from "../assets/Logo";
import { AiOutlineShoppingCart } from "react-icons/ai";
import GlobalContext from "../../context/globalContext";
import styles from "./Header.module.scss";

interface HeaderProps {}

export const Header: React.FC<HeaderProps> = () => {
  const { setShowModal } = useContext(GlobalContext)!;

  return (
    <header className={styles.header}>
      <nav className={styles.header__nav}>
        <div className={styles.header__nav__links}>
          <a href="/products" className={styles.header__nav__links__logo}>
            <Logo />
          </a>
          <div className={styles.header__nav__links__items}>
            <a href="/shop" className={styles.focus}>
              Shop
            </a>
            <a href="/learn" className={styles.focus}>
              Learn
            </a>
          </div>
        </div>
        <div className={styles.header__nav__profile}>
          <a href="/account" className={styles.focus}>
            Account
          </a>
          <div
            className={styles.header__nav__profile__cart}
            onClick={() => setShowModal(true)}
          >
            <i>
              <AiOutlineShoppingCart />
            </i>
            <span>4</span>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
