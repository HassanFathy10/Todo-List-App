import React from "react";
import Styles from "./Form.module.css";

const Row = (props) => {
    return <div className={Styles.row}>{props.children}</div>
}

export default Row;