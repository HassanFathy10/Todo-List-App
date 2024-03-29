import React from 'react';
import styles from './card.module.css';

const Card = ({id, name, age, phone, address, type, deleteFunc}) => {
    return (
        <div className={styles.card} style={{ backgroundColor: type === "girl" ? "pink" : "#89fffd" }}>
            <div>Name : {name}</div>
            <div>Age : {age}</div>
            <div>phone : {phone}</div>
            <div>Address : {address}</div>
            <div>type : {type}</div>
            <div className={styles.deleteBtn} onClick={(e) => deleteFunc(e, id)}>X</div>
        </div>
    );
};

export default Card;
