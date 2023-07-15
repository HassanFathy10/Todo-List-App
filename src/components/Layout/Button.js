import React from "react";
import Styles from "./Form.module.css"

const Button = (props) => {
    return <button style={props.style} className={Styles.button} onClick={props.onClick}>{props.children}</button>
}

export default Button;