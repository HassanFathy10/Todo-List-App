import React, { Fragment } from "react";
import ReactDom from "react-dom";
import Styles from "./Modal.module.css";

const Modal = () => {
    return (
        <Fragment>
            {ReactDom.createPortal(
                <Fragment>
                <div className={Styles.backdrop}></div>
                <div className={Styles.overlay}></div>
                </Fragment>,
                document.getElementById("modal")
            )}
        </Fragment>
    );
};

export default Modal;