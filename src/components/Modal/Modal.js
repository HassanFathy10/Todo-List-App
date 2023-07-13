import React, { Fragment } from "react";
import ReactDom from "react-dom";
import Styles from "./Modal.module.css";

const Backdrop = ({ close, show }) => {
    return <div className={`${Styles.backdrop} ${show ? Styles.showBackdrop : null}`} onClick={close}></div>
};

const Overlay = ({ show }) => {
    return <div className={`${Styles.overlay} ${show ? Styles.showOverlay : null}`}></div>
};

const Modal = ({ show, hide }) => {
    return (
            <Fragment>
                {ReactDom.createPortal(
                    <Fragment>
                        <Backdrop close={hide} show={show}></Backdrop>
                        <Overlay show ={show}></Overlay>
                    </Fragment>,
                    document.getElementById("modal")
                )}
            </Fragment>
        )
};

export default Modal;