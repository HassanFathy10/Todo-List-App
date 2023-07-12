import React, { Fragment } from "react";
import Styles from "./Modal.module.css";

const Modal = () => {
    return (
        <Fragment>
            <div className={Styles.backdrop}></div>
            <div className={Styles.overlay}></div>
        </Fragment>
    );
};

export default Modal;