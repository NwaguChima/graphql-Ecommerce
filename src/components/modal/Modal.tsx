import React, { useContext, lazy, Suspense } from "react";
import ReactDOM from "react-dom";
import Cart from "../cart/Cart";
import GlobalContext from "../../context/globalContext";
import styles from "./Modal.module.scss";

interface ModalProps {}

export const Modal: React.FC<ModalProps> = () => {
  //   const Cart = lazy(() => import("../cart/Cart"));

  const { showModal, setShowModal } = useContext(GlobalContext)!;

  const handleClose = () => {
    setShowModal(false);
  };

  if (showModal) {
    return ReactDOM.createPortal(
      <div className={styles.modal}>
        <div className={styles.modal__container} onClick={handleClose}></div>
        <aside
          className={`${styles.modal__box} ${
            showModal ? styles.moveIn : styles.moveOut
          }`}
        >
          <Cart />
        </aside>
      </div>,
      document.getElementById("modal__root")!
    );
  }

  return null;
};

export default Modal;
