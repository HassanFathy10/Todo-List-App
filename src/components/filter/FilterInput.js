import React, {useState} from 'react';
import Styles from './FilterInput.module.css';

const Filter = ({filteration}) => {
    const [filter, setfilter] = useState("");

    const filterHandler = (e) => {
        const name = e.target.value;
        setfilter(name);
        filteration(name);
    };

return (
    <div className={Styles.mp}>
        <input type='text' placeholder='filter by name' value={filter} onChange={filterHandler}></input>
    </div>
)
}

export default Filter;
