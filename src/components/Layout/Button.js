import React from "react";
import Styles from "./Form.module.css";


const Button = (props) => {
    return <button type={`${props.type ? props.type : "button"}`} style={props.style} className={Styles.button} onClick={props.onClick}>{props.children}</button>
};

export default Button;