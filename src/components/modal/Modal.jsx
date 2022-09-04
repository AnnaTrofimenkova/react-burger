import ModalStyles from "./Modal.module.css";
import { useEffect } from "react";
import { createPortal } from "react-dom";
import ModalCSS from "./Modal.module.css";
import ModalOverlay from "../modalOverlay/ModalOverlay";
import { CloseIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import PropTypes from "prop-types";

function Modal(props) {
  // console.log(props.user);
  const modalRoot = document.getElementById("root-modals");

  useEffect(() => {
    const closeByEsc = (event) => {
      if (event.key === "Escape") {
        props.onClose();
      }
    };
    window.addEventListener("keydown", closeByEsc);
    return () => {
      window.removeEventListener("keydown", closeByEsc);
    };
  }, []);

  return createPortal(
    <>
      <ModalOverlay onClose={props.onClose} />
      <div className={`${ModalStyles.popup} pt-10 pl-10 pr-10 pb-15`}>
        <div>
          <div
            className={`${ModalStyles.popup__header} text text_type_main-large mb-4`}
          >
            <span>{props.title}</span>
          </div>
          <div className={ModalStyles.popup__content}>{props.children}</div>
        </div>
        <span
          className={ModalStyles.popup__close}
          onClick={() => {
            props.onClose(false);
          }}
        >
          <CloseIcon type="primary" />
        </span>
      </div>
    </>,
    modalRoot
  );
}

export default Modal;

Modal.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node.isRequired,
  onClose: PropTypes.func.isRequired,
};
