import React, { useContext, lazy, Suspense } from "react";
import ReactDOM from "react-dom";
import { VscError } from "react-icons/vsc";
import GlobalContext from "../../context/globalContext";
import styles from "./Modal.module.scss";

interface ModalProps {}

export const Modal: React.FC<ModalProps> = () => {
  //   const Table = lazy(() => import("../characterTable/CharacterTable"));
  const { showModal, setShowModal } = useContext(GlobalContext)!;

  const handleClose = () => {
    //     context?.setShowModal(false);
    //     context?.setCharacters(undefined);
  };

  if (showModal) {
    return ReactDOM.createPortal(
      <div className={styles.modal}>
        <div className={styles.modal__container} onClick={handleClose}></div>
        <div
          className={`${styles.modal__box} ${
            showModal ? styles.moveIn : styles.moveOut
          }`}
        ></div>
      </div>,
      document.getElementById("modal__root")!
    );
  }

  return null;
};

export default Modal;
