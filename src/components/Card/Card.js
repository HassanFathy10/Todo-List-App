import React from 'react';
import styles from './card.module.css';

const Card = ({id, name, age, phone, address, type, deleteFunc}) => {
        return (
            <div>
                <div className={styles.card} key={id} style={{ backgroundColor : type === "girl" ? "pink" : "blue" }}>
                    <div>Name : {name}</div>
                    <div>Age : {age}</div>
                    <div>phone : {phone}</div>
                    <div>Address : {address}</div>
                    <div>type : {type}</div>
                    <div className={styles.deleteBtn} onClick={(e)=> deleteFunc(e, id)}>X</div>
                </div>
            </div>
    )
};

export default Card;
