import React, {useState} from 'react';
import styles from './App.module.css'
import Card from '../Card/Card';
import Filter from '../filter/Filter';


const App = () => {
    // const inputEl = useRef(null);
    const [cardToggle, setCardToggle] = useState(false);
    const [state , newState] = useState([{
        name: "Hassan",
        Age: 23,
        phone: "013565659494"
    },
    {
        name: "Ahmed",
        Age: 21,
        phone: "013565652494"
    },
    {
        name: "Kareem",
        Age: 22,
        phone: "013565655"
    },
    ]);
    const deleteHandeler = (e, clickedIndex) => {
        // const deleteOberation = state.filter((e, index) => (index !== clickedIndex));
        // newState(deleteOberation);
        
        newState((prevState) => {
            return prevState.filter((e, index) => (index !== clickedIndex));
        });
        console.log("inside", state); // old info
    };
    console.log("outside", state); // new info

    const toggleHandler = () => setCardToggle(!cardToggle) ;
    
    // const testHandler = () => console.log(inputEl.current.value);
    
    // const onClick = ()=> inputEl.current.focus();

return (
    <div className={styles.main}>
        <h1>Boys Data</h1>
        <button onClick={toggleHandler}>{cardToggle ? "Hide Names" : "Show Names"}</button>
        <div style={{ "paddingTop": "10px" }} className={cardToggle ? styles.show : styles.hide}>
            <Filter></Filter>
        <Card namesList={state} type="men" deleteFunc={deleteHandeler}></Card>
        </div>
    </div>
)}

export default App;
