import React from "react";
import Card from "../Card/Card";

const CardList = ({ namesList, deleteFunc }) => {
    const cards = namesList.map(({ id, ...otherProps}) => (
        <Card key={id} id={id} {...otherProps} deleteFunc={deleteFunc}></Card>
    ));
    return <div>{cards}</div>;
};
export default CardList;