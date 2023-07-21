import React, {useState} from 'react';
import Styles from './FilterInput.module.css';

const Filter = ({filteration}) => {
    const [filter, setFilter] = useState("");

    const filterHandler = (e) => {
        const name = e.target.value;
        setFilter(name);
        filteration(name);
    };

return (
    <div className={Styles.mp}>
        <input type='text' placeholder='Filter by Name' value={filter} onChange={filterHandler}></input>
    </div>
)
}

export default Filter;
