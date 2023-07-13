import React, { Fragment } from "react";
import ReactDom from "react-dom";
import Styles from "./Modal.module.css";

const Backdrop = ({ close }) => {
    return <div className={Styles.backdrop} onClick={close}></div>
};

const Overlay = () => {
    return <div className={Styles.overlay}></div>
};

const Modal = ({ show, hide }) => {
    return (
        show && (
            <Fragment>
            {ReactDom.createPortal(
                <Fragment>
                    <Backdrop close={hide}></Backdrop>
                    <Overlay></Overlay>
                </Fragment>,
                document.getElementById("modal")
            )}
            </Fragment>
        )
    );
};

export default Modal;