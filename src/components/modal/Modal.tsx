import React, { useContext } from "react";
import ReactDOM from "react-dom";
import Cart from "../cart/Cart";
import GlobalContext from "../../context/globalContext";
import styles from "./Modal.module.scss";

interface ModalProps {}

const Modal: React.FC<ModalProps> = () => {
  const { showModal, setShowModal, close, setClose } =
    useContext(GlobalContext)!;

  const handleClose = () => {
    setClose(true);

    setTimeout(() => {
      setShowModal(false);
    }, 500);
  };

  if (showModal) {
    return ReactDOM.createPortal(
      <div className={styles.modal}>
        <div className={styles.modal__container} onClick={handleClose}></div>
        <aside
          className={`${styles.modal__box} ${showModal && styles.moveIn} ${
            close && styles.moveOut
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
