import React, { Fragment } from "react";
import ReactDom from "react-dom";
import Form from "../Layout/Form";
import Styles from "./Modal.module.css";
import Button from "../Layout/Button";
import Row from "../Layout/Row";


const Backdrop = ({ close, show }) => {
    return <div className={`${Styles.backdrop} ${show ? Styles.showBackdrop : null}`} onClick={close}></div>
};

const Overlay = ({ show }) => {
    const submitHandler = (e) => {
        e.preventDefault();
    };
    return <div className={`${Styles.overlay} ${show ? Styles.showOverlay : null}`}>
        <Form onSubmit={submitHandler}>
            <Form.Controller>
                <label htmlFor="name">Name</label>
                <input type="text" id="name" placeholder="Enter Your Name"></input>
            </Form.Controller>
            <Form.Controller>
                <label htmlFor="age">Age</label>
                <input type="text" id="age" placeholder="Enter Your Age"></input>
            </Form.Controller>
            <Form.Controller>
                <label htmlFor="phone">Phone</label>
                <input type="text" id="phone" placeholder="Enter Your Phone"></input>
            </Form.Controller>
            <Form.Controller>
                <label htmlFor="address">Address</label>
                <input type="text" id="address" placeholder="Enter Your Address"></input>
            </Form.Controller>
            <Form.Controller>
                <label htmlFor="type">Type</label>
                <input type="text" id="type" placeholder="Enter Your Type"></input>
            </Form.Controller>
            <Row>
                <Button type="submit">Save</Button>
                <Button type="reset">Reset</Button>
            </Row>
        </Form>
    </div>
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