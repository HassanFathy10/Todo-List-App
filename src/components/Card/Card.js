import React from 'react';
import styles from './card.module.css';

const Card = ({ namesList, deleteFunc}) => {

    const cards = namesList.map(({ name, Age, phone, type, id}) => (
        <div className={styles.card} key={id} style={{ backgroundColor : type === "girl" ? "pink" : "blue" }}>
            <div>Name : {name}</div>
            <div>Age : {Age}</div>
            <div>phone : {phone}</div>
            <div>type : {type}</div>
            <div className={styles.deleteBtn} onClick={(e)=> deleteFunc(e, id)}>X</div>
        </div>
    ))
        return (
        <div>
            {cards}
        </div>
    )
};

export default Card;
