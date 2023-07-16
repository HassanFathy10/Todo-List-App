import React from "react";
import Styles from "./Form.module.css";

const Form = (props) => {
    return <form onSubmit={props.onSubmit}>{props.children}</form>;
};

const Controller = (props) => {
    return <div className={Styles.control}>{props.children}</div>;
};

Form.Controller = Controller;

export default Form;