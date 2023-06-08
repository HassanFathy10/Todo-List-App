import React, {useState} from 'react';
import Styles from './Filter.module.css';

const Filter = () => {
    const [filter, setfilter] = useState("");

    const filterHandler = (e) => {
        setfilter(e.target.value);
    };

return (
    <div className={Styles.mp}>
        <input type='text' placeholder='filter by name' value={filter} onChange={filterHandler}></input>
        <button>Click Me</button>
    </div>
)
}

export default Filter;
