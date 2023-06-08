import React from 'react';
import styles from './card.module.css';

const Card = ({ namesList , type , deleteFunc}) => {

    const cards = namesList.map(({ name, Age, phone }, index) => (
        <div className={styles.card} key={index} style={{ backgroundColor : type === "girl" ? "pink" : "blue" }}>
            <div>Name : {name}</div>
            <div>Age : {Age}</div>
            <div>phone : {phone}</div>
            <div className={styles.deleteBtn} onClick={(e)=> deleteFunc(e, index)}>X</div>
        </div>
    ))
        return (
        <div>
            {cards}
        </div>
    )
};

export default Card;
